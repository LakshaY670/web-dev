//npm install axios
//node dwnldweb.js --url="https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results" --dest="downld.html"
let minimist=require("minimist");
let axios=require("axios");
let fs=require("fs");

let args = minimist(process.argv);
//console.log(args);

let dwnldPromise=axios.get(args.url);
dwnldPromise.then(function(response){
    let html =response.data;
    fs.writeFileSync(args.dest,html,"utf-8");
}).catch(function(err){
    console.log(err)
})
