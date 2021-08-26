const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let user = new Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    catagory: [{ type: String, require: true }],
    expense: [{ date: Date, expense: Number, _id: String }]//catarory==_Id

});

module.exports = user;