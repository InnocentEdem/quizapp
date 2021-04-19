const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require('path');
app.use(express.static (path.join(__dirname)));

/*app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,"index.html"));
 });*/
app.listen(3000);