var express = require('express');
var app = express();



//Views setup
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//Css files go on the public/css folder
app.use(express.static(__dirname + '/public'));

//Router
app.get('/',function(req,res){
	res.render('index')
})



//Server
var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Server running on port 3000 press CTRL-C to terminate');
});
