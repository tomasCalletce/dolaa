
// db
import Customer from "../../db/models/Costumer"

// helpers 
import moment from "moment"


export default async function handler(req, res) {

    try {
        const data = []
        const customers = await Customer.find({ "user" : req.body.id})
        for(let customer of customers){
            if(customer.messages.length > 0){
                let cell = String(customer.cellPhone)
                data.push({
                    id : customer._id,
                    cellPhone : cell.slice(0,cell.length-5),
                    lastMessage : customer.messages[0]
                })
            }
        }

        data.sort((a, b) => {
            a = moment(a.lastMessage.time);
            b = moment(b.lastMessage.time);
            if (a.isBefore(b)) {
              return 1;
            }
            if (b.isBefore(a)) {
              return -1;
            }
            return 0;
        })

        res.status(200).json({ data : data })
    } catch(err){
        res.status(400).json({ err: err })
    }
  }