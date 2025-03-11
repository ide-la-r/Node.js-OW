const fs = require('fs/promises');

//Si queremos saber que vamos a hacer despues 
async function accionFicheros(){
    try{
        await fs.appendFile('../ficheros/blog.md', '\n\nAutor: Ismael de la rosa')
        
        const data = await fs.readFile('../ficheros/blog.md', 'utf-8')//hay que pasarle el tipo de dato que queremos que lea si no sale en  formato diferente
        console.log(data);
    }
    catch (err){
        console.log(err)//aqui gestionamos el error
    }
    
}

accionFicheros();