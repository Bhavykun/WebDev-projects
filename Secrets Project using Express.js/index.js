
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({"extended":true}));

app.post("/check",(req,res)=>{
    var password= req.body["password"];
    if(password=="ILoveProgramming"){
        res.sendFile(__dirname+"/public/secret.html");
    }
    else{
        res.sendFile(__dirname+"/public/nocorrect.html");
    }
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})

app.listen(port,()=>{
    console.log(`server running ${port} port.`);
})