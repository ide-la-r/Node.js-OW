const fs = require('fs');
const fsPromise = require('fs/promises');

//Sincrona
const files = fs.readdirSync('./ficheros');
console.log('SYNC', files);

//Asincrona con callback
fs.readdir('./ficheros', (err, files)=>{
    console.log(err);
    console.log('ASYNC', files);
});

//Asincronia con promesas
fsPromise.readdir('./ficheros')
    .then(files => console.log('PROMISE', files))
    .catch(err => console.log(err));

//Async-await
(async ()=>{
    const filesP = await fsPromise.readdir('./ficheros')
    console.log('ASYNC-AWAY', filesP);
})()