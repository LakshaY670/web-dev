//npm install pdf-lib
//node writingpdf.js --source=teams.json --dest=worldcup
let minimist=require("minimist");
let fs=require("fs");
let path=require("path");
let pdf=require("pdf-lib");
const { PageSizes } = require("pdf-lib");

//use path.join
let args=minimist(process.argv);
let teamsJSON=fs.readFileSync(args.source,"utf-8");
let teams=JSON.parse(teamsJSON);
fs.mkdirSync(args.dest);
for(let i=0 ; i<teams.length ;i++){
    let folderName=path.join(args.dest,teams[i].name);
    fs.mkdirSync(folderName);
    for(let j=0;j<teams[i].matches.length;j++){
        let matchFilename=path.join(folderName,teams[i].matches[j].vs+".pdf");
        createScoreCard(teams[i].name,teams[i].matches[j],matchFilename);
    }
}
function createScoreCard(teamName,match,matchFileName){
    //this fn creates pdf for match in appropriate folder with correct details
    //here we will use pdf-lib to create the pdf
    let t1=teamName;
    let t2=match.vs;
    let result=t1+" "+match.result;

    let orignalBytes=fs.readFileSync("template.pdf");
    let prmToloaddoc=pdf.PDFDocument.load(orignalBytes);
    prmToloaddoc.then(function(pdfdoc){
        let page=pdfdoc.getPage(0);
        page.drawText(t1,{
            x:335,
            y:340
        });
        page.drawText(t2,{
            x:335,
            y:315
        });
        page.drawText(result,{
            x:335,
            y:300
        });
    
        let prmTosave=pdfdoc.save();
        prmTosave.then(function(changedBytes){
            fs.writeFileSync(matchFileName, changedBytes);
        });
    })
}