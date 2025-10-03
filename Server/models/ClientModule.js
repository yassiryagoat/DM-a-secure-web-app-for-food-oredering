    const mongoose = require('mongoose')

    const ClientSchema = new mongoose.Schema(
        {
            lastname: {type: String, required: true },
            firstname:  {type: String, required: true },
            email:  {type: String, required: true, unique: true},
            password:   {type: String, required: true},
            cartData:{type:Object,default:{}}
        },{minimize:false}
    )
    const ClientModel = mongoose.model("clients",ClientSchema)
    module.exports = ClientModel