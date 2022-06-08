require('../main.js')
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const customerSchema = new Schema({
    cellPhone: String,
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    messages: [
        {
            author: String,
            time: { type: Date, default: Date.now },
            message: String
        }
    ]
});
const Customer = mongoose.models.costumers || model('costumers', customerSchema);
module.exports = Customer;