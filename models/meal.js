const mongoose = require("mongoose")

const Schema = mongoose.Schema
const mealSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: String,
    time: String,
    category: String,
    servings: String,
    calories: String,
    top: Boolean,
    photo: String
})
const Meal = mongoose.model("meal", mealSchema)

module.exports = Meal