const ciudades =[];

do{
 ciudades.push(prompt('ingrese una ciudad'));




} while(confirm('desea ingresar otra ciudad?'));
document.write(`<p>EL arreglo de ciudades tiene ${ciudades.length} elementos</p>`);

//for( let i=0; i<=(ciudades.length); i++){
//console.log(i)}

document.write(`<ul>`);
   

document.write(`<p>Elemento 1er posicion:${ciudades[1]}</p>`);
document.write(`<p>Elemento 3er posicion:${ciudades[3]}</p>`);
document.write(`<p>Elemento ultima posicion:${ciudades[ciudades.length-1]}</p>`);

document.write(`</ul>`);