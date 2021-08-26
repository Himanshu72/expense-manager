const env = require("../env");
const mongoose = require("mongoose");
const user = require("../schema/user");
//const user = require("../schema/user");

mongoose.connect("mongodb://localhost:27017/expenses", {
  useNewUrlParser: true,
  
});

var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));


const usermodel = mongoose.model("users", user);

module.exports = {
    async insertUser(obj) {
        try {
            
            const userData = new usermodel(obj);
            await userData.save();
        } catch (e) {
            throw e;
        }

    },
    async getUser(email) {
        try {
            let data = await usermodel.findOne({ _id: email });
            return data;
        } catch (e) {
            throw e;
        }
    },
    async addCatagory(obj) {
        try {

            let data = await usermodel.updateOne({ _id: obj.email }, { $addToSet: { catagory: obj.name } }, { new: true });
            return data;
        } catch (e) {
            throw e;
        }
    }, async addExpense(obj) {
        try {
            let data = await usermodel.updateOne({ _id: obj.email }, { $addToSet: { expense: obj } }, { new: true });
            return data;
        } catch (e) {
            throw e;
        }
    }
};

