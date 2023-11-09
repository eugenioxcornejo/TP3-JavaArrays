const dados =[];


document.write(`<table> <tbody>`);



for(i=0;i<50;i++){  

  document.write(`<tr>`);
    let resultados1=Math.floor(Math.random()*6);
console.log(`resulatado primer dado ${resultados1}`);
    let resultados2=Math.floor(Math.random()*6)
console.log(`resultado segundo dado ${resultados2}`);
let suma=(resultados1+resultados2);
//document.write(`<td>${suma}</td>`);
dados.push(suma);

}


document.write(`<td><h2>suma dados</h2></td> <td><h2>Apariciones</h2></td>  `);


const repetido=[];
for (x=0; x<50;x++){
  
  document.write(`<tr>`);
const repetido1= dados.filter((numero) => numero===(dados[x]));
console.log(`se repite ${repetido1}`);

document.write(`<td> ${dados[x]}</td>  <td>${repetido1.length}</td>`);
repetido.push(repetido1);

}
document.write(`</tr>`);
document.write(`</tr>`);



document.write(`</table></tbody>`);

