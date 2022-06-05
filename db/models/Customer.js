const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const customerSchema = new Schema({
    cellPhone : String,
    user : { type: Schema.Types.ObjectId, ref: 'User',required : true },
    messages : [
        {
            author : String,
            time : { type : Date, default: Date.now },
            message : String
        }
    ]
});

const Customer = model('Costumer', customerSchema);
module.exports = Customer;