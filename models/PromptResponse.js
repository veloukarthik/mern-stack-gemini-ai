const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const objectId = mongoose.Schema.Types.ObjectId;

const PromptResponse = new Schema({
    prompt_id:{
        type:Schema.Types.ObjectId,
        require:true,
        index: true,
        ref:'prompts'
    },
    user_id:{
        type:Schema.Types.ObjectId,
        require:true,
        index: true,
        ref:'users'
    },
    subprompt:{
        type:String,
        index:true
    },
    response:{
        type:String,
        require:true,
        index:true
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('prompt_responses', PromptResponse);