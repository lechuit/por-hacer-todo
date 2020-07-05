const fs = require('fs');


let listadoPorHacer = [];
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile("db/data.json",data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
};

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data');
    }catch (error) {
        listadoPorHacer = [];
    }
};

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
};

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index => 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        console.log('Tarea Actualizada');
        return true;
    }else {
        return false;
    }

};

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0){
        listadoPorHacer.splice(index,1);
        guardarDB();
        console.log("Tarea eliminada");
        return true;
    }else {
        console.log("Tarea No existe");
        return false;
    }

};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};
