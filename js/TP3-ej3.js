const dados =[];

for(i=0;i<50;i++){
    let resultados1=Math.floor(Math.random()*6)
console.log(`resulatado primer dado ${resultados1}`);
    let resultados2=Math.floor(Math.random()*6)
console.log(`resultado segundo dado ${resultados2}`);
let suma=(resultados1+resultados2);
document.write(`<p>${suma}</p>`);
dados.push(suma)}



const repetido1= dados.filter((numero) => numero===(dados[0]));
console.log(`se repite ${repetido1}`);
document.write(`se repite ${repetido1.length} veces`)

//array.forEach((1) => { 
  //  repetido[1] = (repetido[1] || 0)+1;
    
//});