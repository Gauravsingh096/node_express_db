// console.log(" i am guarav");
import http from "http";
import fs from "fs";
const myserver = http.createServer((req, res) => {
    // console.log(req);
    const log =`${Date.now()}:New Req Recieved:`;
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url){
            case "/":
                res.end("Welcome to my server");
                 break;
            case "/about":
                res.end("This is about page");
                break;
            default:
                res.end("404 not found");
        }
    // res.end("helllo from server again ");
    });
});
myserver.listen(9000,()=>console.log("server start"));

console.log("i am guarav");
