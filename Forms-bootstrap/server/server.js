const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;
const app =  express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res)
    {
        res.send("Hello from Server");
    }
)

app.listen(PORT, function(){
    console.log("Server is running at: " + PORT);
})

app.post('/register', function(req, res){
    console.log(req.body);
    res.status(200).send({             // here you can give the status code 401 to check the server error
        "message: " : "Data Received"
    })
})