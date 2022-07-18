//node firstjson.js --dest=teams.json

let minimist=require("minimist");
let fs=require("fs");

let args=minimist(process.argv);
let teams=[{
    name: "India",
    Rank: 1
},
{
    name: "england",
    Rank: 2
},
{
    name: "pakistan",
    Rank: 3
}
];
let json=JSON.stringify(teams);
fs.writeFileSync(args.dest,json,"utf-8");
console.log(teams[2].Rank);