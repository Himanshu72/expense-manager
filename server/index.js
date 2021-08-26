var express = require('express');
var app = express();
var cors = require('cors')
const port = process.env.PORT || 4000;
let router = require("./routes/index");
app.use(router) ;
app.use(cors());
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})