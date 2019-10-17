//requireds
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivos, listarArchivos } = require('./29_multiplicacion_porseparado/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarArchivos(argv.base, argv.limite)
            .then(archivo => console.log(`listado`))
            .catch(e => console.log(e))
        break;
    case 'crear':
        crearArchivos(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado`, colors.blue(archivo)))
            .catch(e => console.log(e))

        break;
    default:
        console.log('comando no reconocido');

}


//console.log(argvs);


// let parametro = argv[2];
// let base = parametro.split('=')[1]