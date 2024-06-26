const Role = require('../models/role');
const Usuario = require('../models/usuarios');


const esRoleValido = async (rol) => {

    const existeRol = await Role.findOne({ rol });
    if(!existeRol) {
       //error personalizado de express-validator
      throw new Error(`El rol ${rol} no está registrado en la BD`)
    }
 }

 const emailExiste = async (correo) => {

   const existeEmail = await Usuario.findOne({correo});
if (existeEmail) {
   throw new Error(`El email ${correo} ya esta registrado en la BD`)
  }
}


const existeUsuarioPorId = async (id) => {

   const existeUsuario = await Usuario.findById(id);
if (!existeUsuario) {
   throw new Error(`El id ${id} no esta registrado en la BD`)
  }
}





 module.exports = { esRoleValido, emailExiste, existeUsuarioPorId}





 