const db = require("../models");
//const publicacion = require("../models/publicacion");
const Publicacion = db.publicacion;
const Op = db.Sequelize.Op;




exports.create = (req, res) => {

  if (!req.body.titulo) {
    res.status(400).send({
      message: "No puede estar Vacio!"
    });
    return;
  }

  // Create a Tutorial
  const publicaciones = {
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    id_user: req.body.id_user    
  };

  //Guardar
  Publicacion.create(publicaciones)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error."
      });
    });
};



//Actualizar
exports.update = (req, res) => {
    const id = req.params.id;
  
    Publicacion.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Se actualizo con exito."
          });
        } else {
          res.send({
            message: `No se puede actualizar el registro con id=${id}. No fue encontrado!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error No se pudo actualizar"
        });
      });
  };


  //eliminar
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Publicacion.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Elimanado con exito!"
          });
        } else {
          res.send({
            message: `no se pudo eliminar el registro con id=${id}. No fue encontrado!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "No se logro eliminar el registro con  id=" + id
        });
      });
  };
