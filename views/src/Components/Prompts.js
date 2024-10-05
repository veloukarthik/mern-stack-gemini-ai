import React, { useEffect, useState } from 'react';
import { getPrompts, getPromtResponse } from '../Services/Index';
import { Link } from 'react-router-dom';

function Prompts({changes}) {

    const [prompts, setPrompts] = useState([]);
    const [input, setInput] = useState('');
    const [response, , setResponse] = useState([]);

    const getItems = () => {
        getPrompts().then((data) => {
            console.log(data, "data");
            setPrompts(data.prompts);
        });
    }

    useEffect(() => {
        console.log(changes, "changes");
        getItems();
    }, [changes]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() !== '') {

        }
    };

    return (
        <div className="h-screen flex">
            <div className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="p-4 font-bold text-xl border-b border-gray-700">Gemini AI</div>
                <div className="w-64 bg-gray-800 text-white flex flex-col">
                    <Link to="/" className="p-4 font-bold text-xl border-b border-gray-700">New</Link>
                </div>
                <div className="flex-1 overflow-y-auto p-4">
                    {prompts && prompts.map((message, index) => (
                        <div key={index} className={`mb-4 ${message.user ? 'text-right' : 'text-left'}`}>
                            <div className={`inline-block p-2 rounded-lg`}>
                                <Link to={`/p/${message._id}`}>{message.prompt}</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Prompts;