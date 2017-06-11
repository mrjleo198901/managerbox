
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

mongoose.connect('mongodb://localhost/managerboxBD', function (error) {
    if (error) {
        throw error;
    } else {
        console.log('Conectado a MongoDB');
    }
});

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use('/api', require('./routes/clienteApi'));
app.use('/api', require('./routes/comprasApi'));
app.use('/api', require('./routes/configuracionApi'));
app.use('/api', require('./routes/detalleFacturaApi'));
app.use('/api', require('./routes/facturaApi'));
app.use('/api', require('./routes/productoApi'));
app.use('/api', require('./routes/promocionesApi'));
app.use('/api', require('./routes/proveedorApi'));
app.use('/api', require('./routes/tipoClienteApi'));
app.use('/api', require('./routes/tipoProductoApi'));
app.use('/api', require('./routes/tipoPromocionApi'));

app.listen(3000);
console.log("servidor ejecutando en el puerto 3000");
