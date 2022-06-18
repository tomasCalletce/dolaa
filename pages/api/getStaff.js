
// db
import User from "../../db/models/User"



export default async function handler(req, res) {
    try {
        const user = await User.find({ "_id" : req.body.id})
        res.status(200).json({ data : user })
    } catch(err){
        console.log(err)
        res.status(400).json({ err: err })
    }
  }