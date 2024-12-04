
const express = require('express')
const connectDb = require('./db')
const itemModel = require('./models/item')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
connectDb()

app.get('/getlogin',async(req,res) => {
    const items = await itemModel.find();
   return res.json(items)
})

app.post('/postdata',async(req,res) => {
    try{
        const data = await itemModel.create(req.body)
        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
   
})

app.listen(5000,()=> {
    console.log("app is running")
})