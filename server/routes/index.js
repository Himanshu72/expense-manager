const express = require('express');
const router = express.Router();
const utlit = require("../utility/db");
router.get("/", async (req, res) => {
    try {
      //  let a = await utlit.addExpense({email:"mm",date:new Date(), expense:999.99, _id:"mm" });
       /// console.log(a); 

    } catch (e) {
        console.log(e);
        throw e;
    }
    res.send("Hello Worlds")
});
module.exports = router;
