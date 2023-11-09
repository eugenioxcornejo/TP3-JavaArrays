//**5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */

function esmayusominus(palabraingresada){
    const palabraconsola = palabraingresada;
    console.log=(palabraconsola);

    
    for (i=0;i<palabraconsola.length; i++ ){

        let letras= palabraconsola.chartat(i);
        if(!isNaN(letras*1)){
            alert('Contiene caracter numericos');
        }else{
            if (letras == letras.touppercase()) {
                alert('Contiene mayusculas');
            }
            if (letras == letras.tolowercase()){
                alert('Contiene minusculas');
            }
        }
    }

}

esmayusominus('Palabras')