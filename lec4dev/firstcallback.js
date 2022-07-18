//t1=read a file(disk)
//t2=calculate prime(cpu)
//t3=write a file(disk)
//t4=calculate square of prime
//node Firstlackofcallback.js --source=f12.txt --dest=f23.txt --n=40000
function Isprime(n){
    let isprime=true;
    for(let div=2 ;div*div<=n ;div++){
        if(n%div==0){
            isPrime=false;
            break;
        }
    }
    return isprime;
}

let minimist=require("minimist");
let fs=require("fs");
let args=minimist(process.argv);

//console.log(args);

//task1
let t1=Date.now();
console.log("Starting task1 at "+t1%100000);
//let data=fs.readFileSync(args.source,"utf-8");
//console.log(stext);
//callback
fs.readFile(args.source,function(err,data)
{
    let t2=Date.now();
    console.log("task 1 end at "+t2%100000);
    console.log(t2-t1);
})
//let t2=Date.now();
//console.log("task 1 end at "+t2%100000);
//console.log(t2-t1);


//task 2
let t3=Date.now();
console.log("starting task 2 at "+ t3%100000);
let arr=[];
for(let i=2 ; i < args.n ; i++){
    let isprime=Isprime(i);
    if(isprime==true){
        arr.push(i);
    }
}
let t4=Date.now();
console.log("finishing task2 at "+t4%100000);
console.log(t4-t3);
