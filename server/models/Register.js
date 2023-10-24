const mongoose = require('mongoose')

const RegisterSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    meals: [{
        mealName: String,
        mealTime: Int16Array,
        insulinTime: Int16Array,
        dosage: Int16Array,
        carbCount: Int16Array
    }]

})



const RegisterModel = mongoose.model('register', RegisterSchema) //collection name, schema (structure)

module.exports = RegisterModel