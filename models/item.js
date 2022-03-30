const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// this our schema which wel use to access data, properties when we incorporate the api
const itemSchema = new Schema({
    productName: {type: String, unique: true, required: true},
    quantity: {type: Number, default: 0, required: true}
}, {timeStamps: true})

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;