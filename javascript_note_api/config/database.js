const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

require('dotenv').config();
MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
.then(() => console.log('Connection Succesful'))
.catch(err => console.log(err))