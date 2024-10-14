const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const SERVER_PORT = 3001

const DB_URL = "mongodb+srv://stephfee:DKpU8mQqpBca94Fv@productdb.mmelk.mongodb.net/?retryWrites=true&w=majority&appName=productdb"
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const noteRoutes = require("./routes/NoteRoutes")

mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});

app.use("/api", noteRoutes)


app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})
