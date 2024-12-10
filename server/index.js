
const express = require('express')
const connectDb = require('./db')
const {signupModel,loginModel} = require('./models/userModel')

const cors = require('cors')
var bodyParser = require('body-parser');

const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

connectDb()

app.get('/userLogin',async(req,res) => {
    const items = await loginModel.find();
   return res.json(items)
})

app.post('/userSignup',async(req,res) => {
    try{
        const data = await signupModel.create(req.body)
        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

app.listen(5000,()=> {
    console.log("app is running")
})