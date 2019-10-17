//requireds
const fs = require('fs');
const colors = require('colors');

let datos = '';

let listarArchivos = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) & !Number(limite)) {
            reject(`el valor introducido ${base} no es un numero`);
            return;
        }

        console.log('================================'.blue);
        console.log(`========Tabla de ${base}========`.blue);
        console.log('================================'.blue);
        for (let i = 1; i <= limite; i++) {

            resul = base * i;
            resolve(console.log(`${base} * ${i}= ${resul} `));
        }

    })
}


let crearArchivos = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor introducido ${base} no es un numero`);
            return;
        }

        for (let i = 1; i <= limite; i++) {

            resul = base * i;
            datos += `${base} * ${i}= ${resul} \n`;
        }

        const data = new Uint8Array(Buffer.from(datos));
        fs.writeFile(`28_tablas/tabla_del_${base}_al_${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla_del_${base}_al_${limite}.txt`);
        });
    })
}

module.exports = {
    crearArchivos,
    listarArchivos
}