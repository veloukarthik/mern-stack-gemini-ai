const express = require('express');
const router = express.Router();
const promptModel = require('../models/Prompts');
const promptResponseModel = require('../models/PromptResponse');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const jwt = require('jsonwebtoken');

const apiKey = process.env.API_KEY;  // Replace with your actual API key 'AIzaSyDbQL3ne9AHWYAUzn97NkouiKukIfEmH-U'
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const getToken = (req) => {
    const token = req.headers.authorization.split(" ");

    const secret = 'expense-login';

    const decoded = jwt.verify(token[1], secret);

    return decoded.id;
}
const prompt = async (req, res) => {

    try {
        if (!req.body.prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }
        const prompt = req.body.prompt; // Assuming the prompt is sent in the request body
        const userId = getToken(req);
        let subprompt = '';

        if (req.body.subprompt) {
            subprompt = req.body.subprompt;
        }
        const checkPrompt = await promptModel.findOne({ prompt: prompt, user_id: userId });

        let promptId = '';

        if (!checkPrompt) {
            const createPrompt = await promptModel.create({
                prompt: prompt,
                user_id: userId
            });
            promptId = createPrompt._id;
        }
        else {
            promptId = checkPrompt._id;
        }

        let result = '';

        if (subprompt) {
            result = await model.generateContent([subprompt]);
        }
        else {
            result = await model.generateContent([prompt]);
        }

        if (!result.response.text()) {
            return res.status(400).json({ error: 'Something went wrong' });
        }

        const checkRespone = await promptResponseModel.findOne({ prompt_id: promptId, user_id: userId, subprompt: subprompt });

        let promptResponse;

        if (checkRespone) {
            promptResponse = await promptResponseModel.findOneAndUpdate({ prompt_id: promptId, user_id: userId, subprompt: subprompt }, { response: result.response.text() }, { new: true });
        }
        else {
             promptResponse = await promptResponseModel.create({
                prompt_id: promptId,
                user_id: userId,
                subprompt: subprompt,
                response: result.response.text()
            });
        }

        if (!promptResponse) {
            return res.status(400).json({ error: 'Something went wrong' });
        }


        return res.status(200).json({ response: promptResponse });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

const getPrompt = async (req, res) => {
    try {
        const userId = getToken(req);
        const prompts = await promptModel.find({ user_id: userId });
        return res.status(200).json({ prompts });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}
const getPromptResponse = async (req, res) => {
    try {
        const userId = getToken(req);
        const promptId = req.params.id;
        const promptResponse = await promptResponseModel.find({ prompt_id: promptId, user_id: userId });
        return res.status(200).json({ promptResponse });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

module.exports = {
    prompt,
    getPrompt,
    getPromptResponse
}