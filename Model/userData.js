const mongoose = require('mongoose');

const amount = mongoose.Schema({
    amount: {
        type:Number,
        required:true
    },
    desc: {
        type:String,
        required:true
    },
    type:String,
    createAt: {
        type: Date,
        default: new Date
    },
    runningAmount:String
});

const transaction = mongoose.model('transaction' , amount);

module.exports = transaction;