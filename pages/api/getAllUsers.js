
const Customer = require('../../db/models/Costumer')


export default async function handler(req, res) {
    console.log("llego")
    // const szs = await User.find({}).exec();
    const customer = await Customer.find({});
    console.log(customer)
    res.status(200).json(customer)
}