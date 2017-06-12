
const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

mongoose.Promise = global.Promise;

//const port = process.env.PORT;
const uriString = process.env.DB || 'localhost:27017/Jarnotes';

app.listen(3000, () => {
  console.log(`Server running on port`);
});


try {
    mongoose.connect('mongodb://localhost:27017/Jarnotes'); //- starting a db connection
}catch(err) {
    mongoose.createConnection('mongodb://localhost:27017/Jarnotes'); //- starting another db connection
}
