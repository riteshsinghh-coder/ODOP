const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use(cors());
app.use(express.json()) ;
app.use(express.static("public"));
app.get ('/', function(req,res){
    res.sendFile(__dirname + "/index.html");
})
app.listen (process.env.PORT || 3000,function(){
    console.log("server started on port 3000");
})