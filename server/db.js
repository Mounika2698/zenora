const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        const connect = await mongoose.connect('mongodb+srv://goalscript:mypassword@ecomapp.onkqx.mongodb.net/ecomDb?retryWrites=true&w=majority&appName=ecomApp', {
            // useNewUrlParser:true,
            // useUnifiedTopology:true
        });

        console.log('Mongodb connected');
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = connectDb;