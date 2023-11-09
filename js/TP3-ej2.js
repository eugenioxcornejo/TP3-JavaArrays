const ciudades =[];

do{
 ciudades.push(prompt('ingrese una ciudad'));




} while(confirm('desea ingresar otra ciudad?'));
document.write(`<p>EL arreglo de ciudades tiene ${ciudades.length} elementos</p>`);

document.write(`<ul>`)
document.write(`<h1>Lista de ciudades ingresadas</h1>`)
for( let i=0; i<(ciudades.length); i++){

document.write(`<li>${ciudades[i]}</li>`)
}
document.write(`</ul>`);

document.write(`<ul>`);
   

document.write(`<p>Elemento 1er posicion:${ciudades[0]}</p>`);
document.write(`<p>Elemento 3er posicion:${ciudades[2]}</p>`);
document.write(`<p>Elemento ultima posicion:${ciudades[ciudades.length-1]}</p>`);



document.write(`</ul>`);
document.write(`<h2>Lista de ciudades ingresadas agregado Paris al final</h2>`);
ciudades.splice(ciudades.length,0,'Paris')
document.write(`<ul>`)

for( let i=0; i<(ciudades.length); i++){

document.write(`<li>${ciudades[i]}</li>`)
}
document.write(`</ul>`);


document.write(`<ul>`);

document.write(`<p>Elemento 2da posicion:${ciudades[1]}</p>`);

ciudades.splice(1,0,'Barcelona');

document.write(`<h2>Lista de ciudades ingresadas agregado Barcelona en la segunda posicion</h2>`);
for( let i=0; i<(ciudades.length); i++){

    document.write(`<li>${ciudades[i]}</li>`)
    }
    document.write(`</ul>`);
    
    