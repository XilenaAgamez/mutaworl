module.exports = app => {
    
    const usuario = require("../controllers/usuario.controller.js");
  
    var router = require("express").Router();
  

    router.post("/registro_cliente", usuario.registro_usuario);
  
    router.post("/login_cliente", usuario.login_usuario);
  
  
    app.use('/api/usuario', router);
  };