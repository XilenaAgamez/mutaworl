module.exports = app => {
    
    const publicacion = require("../controllers/publicacion.controller.js");
  
    var router = require("express").Router();
  
    //crear 
    router.post("/", publicacion.create);
  
    // actualizar 
    router.put("/:id", publicacion.update);
  
    // eliminar 
    router.delete("/:id", publicacion.delete);
  
  
    app.use('/api/publicacion', router);

  };