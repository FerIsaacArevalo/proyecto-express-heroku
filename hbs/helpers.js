const hbs = require('hbs');



hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split(' ');

    palabras.forEach((e, idx) => {

        palabras[idx] = e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();

    });

    return palabras.join(' ');
});


hbs.registerHelper('getHora', () => {

    let fecha = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`

    return fecha;
});