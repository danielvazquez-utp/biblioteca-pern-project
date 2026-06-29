// Importación de modelo
const Usuario = require('../models/usuario');

const usuarioController = {
    // Método para recuperar todos los usuarios
    getAll: async (req, res) => {
        try {
            const usuarios = await Usuario.findAll();
            res.json(usuarios);
        } catch (error) {
            res.status(500).json({
                error: "Ocurrio un error al recuperar todos los usuarios."
            });
        }
    },
    // Método para recuperar un usuario a través de su Id
    getById: async (req, res) => {
        try {
            const usuario = await Usuario.findById( req.params.id );
            if (!usuario) {
                return res.status(400).json({
                    error: "El usuario no fue encontrado."
                })
            }
        } catch (error) {
            res.status(500).json({
                error: "Ocurrio un error al recuperar un usuario."
            });
        }
    },
    // Método para crear un usuario
    create: async ( req, res ) => {
        try {
            const id = await Usuario.create( req.body );
            res.status(200).json({
                message: "Usuario creado con éxito.",
                id
            })
        } catch (error) {
            res.status(500).json({
                error: "Ocurrio un error al crear el usuario."
            });
        }
    },
    // Método para actualizar las propiedades de un usuario
    update: async (req, res) => {
        try{
            const usuario = await Usuario.findById(req.params.id);
            if (!usuario) {
                return res.status(400).json({ error: "El usuario no existe." });
            }
            await Usuario.update( req.params.id, req.body );
            res.status(200).json({ message: "El usuario se actualizó exitosamente." });
        } catch (error) {
            res.status(500).json({
                error: "Ocurrio un error al actualizar el usuario."
            });
        }
    },
    // Método para borrar un usuario a través de su Id
    delete: async (req, res) => {
        try {
            const usuario = await Usuario.findById( req.params.id );
            if (!usuario) {
                return res.status(400).json({ error: "El usuario no existe."})
            }
            await Usuario.delete( req.params.id );
            res.json({ message: "Usuario eliminado." });
        } catch (error) {
            res.status(500).json({
                error: "Ocurrio un error al borrar el usuario."
            });
        }
    }
}

module.exports = usuarioController;