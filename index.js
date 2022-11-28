// Imported Packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const transaction = require('./Model/userData');

// Uses of Imported Packages
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));
app.use(cors());

// Post API
app.post('/postData' , (req,res)=>{
    console.log(req.body.runningAmount);
    const newAmount = new transaction({
        desc: req.body.desc,
        amount: req.body.amount,
        type: req.body.type,
        runningAmount: req.body.runningAmount
    });
    newAmount.save().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err);
    });
});

// Get API
app.get('/getData' , (req,res)=>{
    transaction.find().then((data)=>{
        res.send(data)
    }).catch((errr)=>{
        console.log(err)
    });
});

// Database Connection
mongoose.connect("mongodb://127.0.0.1:27017/transaction-app").then(()=>{
    app.listen(8000 , ()=>{
        console.log('Server started on : 8000');
    });
});