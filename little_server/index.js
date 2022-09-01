const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('hello world');
});

//first value is port number
app.listen(3001, function(){
    console.log('running on port 3001!');
})