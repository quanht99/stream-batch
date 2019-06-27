const express = require("express");
let port = process.env.PORT || 3000;
const BodyParser = require("body-parser");
const morgan = require("morgan");

let router = require("./router");


const app = express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extends: true}));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.get('/', (req, res) => {
    res.json({
        success: true
    })
});
app.use('/api', router);

app.listen(port, (err) => {
    if(!err){
        console.log(`Server is running on ${port}`);
    }
});