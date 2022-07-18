//npm install excel4node
//npm init y
//npm install minimist
//node firstexcel.js --source=teams.json --dest=teams.xls
let minimist=require("minimist");
let fs=require("fs");
let excel=require("excel4node");
let args=minimist(process.argv);
let teamJSON=fs.readFileSync(args.source,"utf-8");
let teams=JSON.parse(teamJSON);
let wb=new excel.Workbook();

let hs= wb.createStyle({
font: {
bold: true,
underline: true,
size: 15,
color: "red"
},
fill: {
type: "pattern",
patternType: "solid",
fgColor:"green"
}
});

for(let i=0;i<teams.length;i++){
    let sheet=wb.addWorksheet(teams[i].name);
    sheet.cell(1,1).string("opponent").style(hs);
    sheet.cell(1,2).string("result").style(hs);
    for(let j=0;j<teams[i].matches.length;j++){
        sheet.cell(j+2,1).string(teams[i].matches[j].vs);
        sheet.cell(j+2,2).string(teams[i].matches[j].result);

    }

}
wb.write(args.dest);