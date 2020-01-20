const express = require ('express');
const morgan = require ('morgan');
const app = express ();
const { mongoose } = require ('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//Midelwares
app.use(morgan('dev'));
app.use(express.json());
//Routes
app.use('/tienda/productos' , require('./routers/products.routes'));

//Starting the server
app.listen(app.get('port') , () =>{
    console.log("Server on port 3000.");
});