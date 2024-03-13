const express = require("express")
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;
app.use(express.json());
require('./config/database').connect();
const movies = require('./routes/movies');
app.use('/api/v1',movies);

app.listen(PORT,() =>{
    console.log(`App is running on port -> ${PORT}`)
})