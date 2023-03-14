module.exports = app => {
    
  const publicacion = require("../controllers/publicacion.controller.js");

  var router = require("express").Router();

  //crear 
  router.post("/", publicacion.create);

  //Actualizar 
  router.put("/:id", publicacion.update);

  //Eliminar 
  router.delete("/:id", publicacion.delete);


  app.use('/api/publicacion', router);

};