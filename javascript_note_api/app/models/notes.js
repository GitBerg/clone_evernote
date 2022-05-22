const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title:String,
    body:String,
    created_at: {type:Date, default:Date.now},
    updated_at: {type:Date, default:Date.now},
    author: {
        type:Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Note', noteSchema)