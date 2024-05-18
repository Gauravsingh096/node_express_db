// const fs= require("fs");
import  fs  from "fs";

//sync 
fs.writeFileSync("./test.txt","hey there");


// async 
fs.writeFile('./test.txt', 'heyyyyyyy there', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('File has been written successfully.');
    }
});
// read 
const result = fs.readFileSync('./test.txt',"utf-8")
console.log(result);

// read async 
fs.readFile('./test.txt', 'utf-8', (err, data) => { 
    if (err) {
        console.error('Error reading file:', err);
        } else {
            console.log('File has been read successfully:', data);
            }
            });

// append
fs.appendFileSync('./test.txt',`${Date.now()} \n Hey there\n`);

// copy 
fs.cpSync("./test.txt","./copy.txt");

//unlink
fs.unlinkSync("./copy.txt");


fs.mkdirSync("my-doccs/a/b",{recursive:true});

