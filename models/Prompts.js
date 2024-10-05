const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Prompt = new Schema({
    prompt: {
        type: String,
        index: true
    },
    user_id:{
        type:Schema.Types.ObjectId,
        require:true,
        index: true,
        ref:'users'
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('prompts', Prompt);