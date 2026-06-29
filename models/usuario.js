// Instancia de pool de base de datos (conexión)
const pool = require('../config/database');

const Usuario = {
    /*
    Todo método devuelve una promesa
    por lo tanto cada método es asíncrono
    */

    // Recuperar todos los usuarios
    findAll: async () => {
        const [rows] = await pool.query("SELECT * FROM usuario");
        return rows;
    },
    // Recuperar un usuario a través de su Id
    findById: async ( id ) => {
        const [rows] = await pool.query("SELECT * FROM usuario WHERE id = ?", [ id ]);
        return rows[0];
    },
    // Crear un usuario
    create: async ( usuario ) => {
        const { nombre, apellidos, email, id, activo } = usuario; // Desestructuración
        const [result] = await pool.query(
            "INSERT INTO usuario (nombre, apellidos, email, activo) VALUES (?, ?, ?, ?)", 
            [ nombre, apellidos, email, activo ]
        );
        return result.insertId;
    },
    // Actualizar un usuario
    update: async (id, usuario) => {
        const { nombre, apellidos, email, id, activo } = usuario; // Desestructuración
        await pool.query(
            "UPDATE usuario SET nombre=?, apellidos=?, email=?, activo=? WHERE id=?",
            [ nombre, apellidos, email, activo, id ]
        );
    },
    // Eliminar un usuario
    delete: async (id) => {
        await pool.query("DELETE FROM usuario WHERE id=?", [id]);
    }
}

module.exports = Usuario;