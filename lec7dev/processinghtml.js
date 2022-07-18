//node processinghtml.js --source=downld.html
//npm install jsdom
let minimist=require("minimist");
let fs=require("fs");
let jsdom=require("jsdom");
let args=minimist(process.argv);
fs.readFile(args.source,"utf-8",function(err,data){
    //console.log(data);
    let dom=new jsdom.JSDOM(data);
    let document=dom.window.document;

    let c= document.querySelectorAll(".ds-text-tight-xs.ds-truncate.ds-text-ui-typo-mid");
    //console.log(c.length);
    for(let i=0;i <c.length ; i++){
        console.log(c[i].textContent);
    }
    
})