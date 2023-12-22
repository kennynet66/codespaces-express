const express = require('express')
const app = express()
require ('dotenv').config();
const port = process.env.PORT

app.get('/', (req,res) => {
  res.send("Hello world");
} )

app.listen(port, () => {
  console.log("App is listening on port", `${port}`);
})