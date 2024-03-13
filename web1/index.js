const express = require('express')
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 4000;
app.use(express.json());
require('./config/database').connect();
const user = require('./routes/user')
app.use('/api/v1',user);
app.listen(PORT,() => {
    console.log(`App is running on port -> ${PORT}`)
})
// app.get("/api/v1/signup",(req,res) =>{
//     res.send(`<h1> This is Homepage baby </h1>`)
// })