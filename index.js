const express = require('express')
const PORT = 3002;
const app = express();
const router = require("./routes/url")
const connectDB = require("./config")

connectDB();
app.use(express.static("./public"))
app.use(express.urlencoded({ extended: false}))
app.use(express.json());

app.use('/', router);


app.listen(PORT, (err) => {
     if(err)  console.log(err);
     console.log(`server start on http://localhost:${PORT}`)
     
})