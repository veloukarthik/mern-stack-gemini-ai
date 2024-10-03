const mongoose = require('mongoose');
const {isEmail} = require('validator');

const Schema = mongoose.Schema;

const User = new Schema({
    name: {
        type: String,
        require: [true,'Please enter your name'],
        index: true
    },
    mobile: {
        type: Number,
        require: [true,'Please enter your mobile number'],
        index: true
    }, 
    email: {
        type: String,
        require: [true,'Please enter your email'],
        index: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        require: [true,'Please enter your password'],
        minlength:[6,'Minimum 6 chracters only allowed']
    },
    gender:{
        type:String,
    },
    token:{
        type:String,
        require:true
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('users', User);