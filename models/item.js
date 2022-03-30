const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// this our schema which wel use to access data, properties when we incorporate the api
const itemSchema = new Schema({
    shoeName: {type: String, unique: true, required: true},
    brand: {type: String, required: true},
    img: {type: String},
    description: {type: String}
}, {timeStamps: true})

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;