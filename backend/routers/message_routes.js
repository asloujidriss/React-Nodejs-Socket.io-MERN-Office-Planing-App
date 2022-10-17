const router = require("express").Router()

const Message = require("../models/Message")


//add
router.post("/", async(req,res)=>{
    const newmessage = new Message(req.body)
    try {
        
        const savedmessage = await newmessage.save()
        res.status(200).json({message:"newmessage",data:savedmessage})
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/:conversationId",async(req,res)=>{
    try {

        const messages = await Message.find({
            conversationId:req.params.conversationId
        })
        res.status(200).json({message:"list of messages",data:messages})
    } catch (error) {
       res.status(500).json(error) 
    }
})


module.exports= router