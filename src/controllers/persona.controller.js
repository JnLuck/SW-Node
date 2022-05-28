import { pool } from '../database'

export const getPersonas = async (req,res)=>{
    try {
        const response = await pool.query('select *from fc_listar_persona()');
        return res.status(200).json(response.rows);
    } catch (e) {

        return res.status(500).json('Error al listar Rols');
    }
};

export const getPersonaId = async (req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from fc_listar_persona_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        return res.status(500).json('Error al listar persona');
    }
};

export const crearPersona = async (req,res)=>{
    try {
        const {apellidos, nombres, direccion, telefono} = req.body;
        await pool.query('select from fc_create_persona($1, $2, $3, $4)',[apellidos, nombres, direccion, telefono]);
        return res.status(200).json({
            message: 'Persona registrado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar persona...!');
    }
};

export const updatePersona = async (req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {apellidos, nombres, direccion, telefono} = req.body;
        await pool.query('select fc_update_persona($1, $2, $3, $4, $5)',[apellidos, nombres, direccion, telefono, id]);
        return res.status(200).json({
            message: 'Persona modificado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al modificar persona...!');
    }
};

export const deletePersona = async (req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {nombre, estado} = req.body;
        await pool.query('select fc_delete_persona($1)',[id]);
        return res.status(200).json({
            message: 'Persona eliminado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al eliminar persona...!');
    }
};