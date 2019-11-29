const express= require('express');
const app= express();
const morgan = require('morgan');
const path = require('path'); //modulo para trabajar con directorios sin importar el sistema operativo.



// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); //_dirname: da la dirección del archivo completo.
//app.engine('html', require('ejs').renderFile); //esto sirve para indicar que se van a utilizar archivos html con el formato ejs.
app.set('view engine', 'ejs'); //esto funciona para indicar cuál motor de plantilla vamos a utilizar.
//ejs no have falta que se requiera porque ya nodejs lo reconoce.

// middlewares
app.use(morgan('dev'));

// routes
app.use(require('./routes'));

// static files
app.use(express.static(path.join(__dirname, 'public'))); //esto permite que la carpeta public pueda ser acedida desde el navegador.

// listening the Server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});