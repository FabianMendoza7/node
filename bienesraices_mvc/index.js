import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js';

// Crear la app.
const app = express();

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