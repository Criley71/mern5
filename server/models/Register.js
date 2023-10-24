const mongoose = require('mongoose')
const mealSchema = new mongoose.Schema({
    mealName: String,
    mealTime: String,
    insulinTime: String,
    dosage: String,
    carbCount: String
})
const RegisterSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    meals: [mealSchema]

})



const RegisterModel = mongoose.model('register', RegisterSchema) //collection name, schema (structure)

module.exports = RegisterModel