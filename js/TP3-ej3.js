const dados =[];

for(i=0;i<50;i++){
    let resultados1=Math.floor(Math.random()*6)
console.log(`resulatado primer dado ${resultados1}`);
    let resultados2=Math.floor(Math.random()*6)
console.log(`resultado segundo dado ${resultados2}`);
let suma=(resultados1+resultados2);
document.write(`<p>${suma}</p>`);
dados.push(suma)}


const repetido=[];
for (x=0; x<50;x++){
const repetido1= dados.filter((numero) => numero===(dados[x]));
console.log(`se repite ${repetido1}`);
document.write(`<p>se repite ${repetido1.length}</p>`)
repetido.push(repetido1);

}

//array.forEach((1) => { 
  //  repetido[1] = (repetido[1] || 0)+1;
    
//});