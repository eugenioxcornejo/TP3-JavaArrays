const Dado1 =[];

for(i=0;i<50;i++){
    let resultados1=Math.floor(Math.random()*6)
console.log(`resulatado primer dado ${resultados1}`);
    let resultados2=Math.floor(Math.random()*6)
console.log(`resultado segundo dado ${resultados2}`);
let suma=(resultados1+resultados2);
document.write(`<p>${suma}</p>`);
Dado1.push(suma)}
