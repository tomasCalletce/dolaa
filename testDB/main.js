const Customer = require('../db/models/Costumer')
const User = require('../db/models/User')

async function main(){
    const newCustomer = new Customer({
        user : '626d5c051bdc04abdd87b6c2',
        cellPhone : '573217000120@c.us',
        messages : []
    });
    
    newCustomer.messages.push({
        message : 'uyy si',
        author : 1
    });
    
    await newCustomer.save();
}

main()

