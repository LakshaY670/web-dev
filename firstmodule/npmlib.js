let minimist=require("minimist");
let args=minimist(process.argv);
let name = args.name;
let age= args.age;

if(age > 30){
    console.log('hello'+name +". you are old but gold");
}else{
    console.log("heyy "+name+".where is the party tonight??");
}
//npm install minimist
//node npmlib.js --name="lakshay" --age=21