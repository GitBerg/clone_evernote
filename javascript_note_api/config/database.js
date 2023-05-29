const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

require('dotenv').config();
const mongo_url = process.env.MONGO_URL;

mongoose.connect(mongo_url)
.then(() => console.log('Connection Succesful'))
.catch(err => console.log(err))