import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js';
import db from './config/db.js';

// Crear la app.
const app = express();

// Habilitar lectura de datos de formularios.
app.use(express.urlencoded({extended: true}));

// Conexión a la base de datos.
try {
    await db.authenticate();
    db.sync();
    console.log("Conexión correcta a la base de datos");
    
} catch(error){
    console.log(error);
}

// Habilitar Pug.
app.set('view engine','pug');
app.set('views', './views');

// Carpeta Pública.
app.use(express.static('public'));

// Routing.
app.use('/auth', usuarioRoutes);

// Definir puerto y arrancar proyecto.
const port = 3000;

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
});