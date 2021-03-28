const express = require('express');
const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient
const app = express();


app.use(express.json());


// let data = [
//     {
//     "name": "stu1",
//     "subject": "react",
//     "level": "beginner"
//     },
// ];
 
app.get('/', function (req, res) {
    // res.send(data);
    mongoClient.connect('mongodb://127.0.0.1:27017/', (err, clientInfo) => {
        
    });
});

app.post("/create-student", function (req, res) {
    data.push(res.body);
    res.send({
        type: "post",
    name: req.body.name,
        language: req.body.language,
    level: req.body.level
    
    });
    res.status(200).json({ message: "created" });
});

app.put("/update-student/:id", function (req, res){
    res.send({type:"post"});
    res.status(200).json({ message: "updated" });
});

app.delete("/deleted-student/:id", function (req, res) {
    res.send({type:"post"});
    res.status(200).json({ message: "deleted" });
});

app.listen(3000);