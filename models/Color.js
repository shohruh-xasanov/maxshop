const mongoose = require('mongoose')
const colorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Color', colorSchema)