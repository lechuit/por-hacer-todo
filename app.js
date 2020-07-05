const argv = require('./config/yargs').argv;
//argv.argv;
const porHacer = require('./por-hacer/por-hacer');

var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado){
            console.log("========Por Hacer=======".green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log("========================".green);
        }
        //console.log(listado);
        break;

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar( argv.descripcion);
        break;

    default: console.log('comando desconocido');

}
