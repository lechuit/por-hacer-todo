const argv = require('./config/yargs').argv;
//argv.argv;
var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar todas las tareas');
        break;

    case 'crear':
        console.log("Crear tarea");
        break;

    case 'actualizar':
        console.log("Actualizar tarea");
        break;

    default: console.log('comando desconocido');

}
