const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/javascriptNote')
.then(() => console.log('Connection Succesful'))
.catch(err => console.log(err))