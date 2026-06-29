const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Tareas básicas -CRUD -> Método
// C - Create (Registro) -> POST
// R - Read (Lectura/Recuperación) -> GET
// U - Update (Actualización) -> PUT
// D - Delete (Eliminación) -> DELETE

// Ruta raíz
app.get('/', (req, res) => {
    res.json({
        message: 'Bienvenidos a los servicios web del proyecto Biblioteca'
    });
});

// Rutas de Usuarios
const usuarioRoutes = require('./routes/usuario');
app.use('/api/usuarios', usuarioRoutes);

// Lanzamiento del servicio
// visibilidad del puerto

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log('Servidor esta corriendo en el puerto 4000');
});