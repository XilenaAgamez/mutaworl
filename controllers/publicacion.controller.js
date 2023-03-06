const db = require("../models");
const Publicacion = db.publicacion;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {

    if (!req.body.titulo) {

      res.status(400).send({
        message: "No se puede dejar vacio!"
      });
      return;
    }
  
    // Crear
    const publicacion = {
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
      autor: req.body.autor
    };


   
   Publicacion.create(publicacion)
   .then(data => {
     res.send(data);
   })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Ocurrio un error con el guardado."
     });
   });
};





//update

exports.update = (req, res) => {
    const id = req.params.id;
  
    Publicacion.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "se actualizo con exito."
          });
        } else {
          res.send({
            message: `No se puede actualizar el reg con id=${id}.No fue encontrado!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating  with id=" + id
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
            message: " Elimanado con exito!"
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
