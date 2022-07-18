let clargs=process.argv;
let n=parseInt(clargs[2]);
for(let i=2;i<=n;i++){
    let isprime=Isprime(i);
    if(isprime==true){
        console.log(i);
    }
}

function Isprime(x){
    let isPrime=true;
    for(let div=2;div*div<=x;div++){
        if(x%div==0){
            isPrime=false;
        }
    }
    return isPrime;
}