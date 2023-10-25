const mongoose = require('mongoose')
const mealSchema = new mongoose.Schema({
    email: String,
    mealName: String,
    mealTime: String,
    insulinTime: String,
    insulinDose: String,
    carbCount: String
})




const MealModel = mongoose.model('meal', mealSchema) //collection name, schema (structure)

module.exports = MealModel