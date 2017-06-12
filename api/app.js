const express=require("express");
const routes = require('./routes/');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
//app.use: morgan, bod-parser:yjson, body-parser:urlenconde, enableCors
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(enableCors);  //CORREGIR

console.log('aantess');


console.log('despuessss');
//middleware of express
app.use('/api/', routes); //Se utiliza para el localhost

//this is a hand-made middleware
function enableCors(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
}

module.exports =app;

/*
app.post('/')   
res.send
next()
*/