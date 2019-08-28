const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));


app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');
app.get('/', (req, res) => {
    //res.send('Hola mundo hola')

    res.render('home', {
        nombre: 'Fernando',
        anio: new Date().getFullYear(),
        hora: new Date().getHours(),
        minutos: new Date().getMinutes(),
        segundos: new Date().getSeconds()
    });

})

app.get('/about', (req, res) => {

    res.render('about');


})

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
})