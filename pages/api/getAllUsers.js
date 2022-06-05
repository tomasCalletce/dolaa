
const Customer = require('../../db/models/Costumer')


export default async function handler(req, res) {
    const arr = [];
    const customer = await Customer.find({},{"messages":{$slice: -1}})
    console.log(customer[0].messages)
    for (const cuto of customer) {
        if(cuto.messages[0]){
            arr.push(cuto.messages[0])
        }
    }
    res.status(200).json(arr)
}

