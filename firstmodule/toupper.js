let minimist=require("minimist");
let args=minimist(process.argv);
//console.log(args);
let fs=require("fs");
let stext=fs.readFileSync(args.source,"utf-8");
//console.log(stext);
//capitalize
let words=stext.split(" "); //string has split
for(let i=0 ;i< words.length ; i++){
    words[i]= words[i].toUpperCase();
}
let dest= words.join(" "); // array has join
fs.writeFileSync(args.dest, dest ,"utf-8");
//node toupper.js --source=f1.txt --dest=f2.txt