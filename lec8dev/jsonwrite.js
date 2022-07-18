//node jsonwrite.js --source=teams.json
let minimist=require("minimist");
let fs=require("fs");
let args=minimist(process.argv);

fs.readFile(args.source,"utf-8",function(err,json){
    if(err){
        console.log(err);
    }else{
       // console.log(json);
       let teams=JSON.parse(json);
       console.log(teams[2].Rank);
    }
})