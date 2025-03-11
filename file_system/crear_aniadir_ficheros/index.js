const fs = require('fs/promises');
const fsSync = require('fs');//Creamos el sincrono porque en el asincrono no podemos usar la funcion exists

(async () => {
    try{
        if(!fsSync.existsSync('./config')){
            await fs.mkdir('./config');
        } else{
            console.log('El directorio ya existe');
        }

        await fs.appendFile('./config/prueba.md', 'Contenido de prueba del fichero');
    } catch(err){
        console.log(err.message);
    }
})();