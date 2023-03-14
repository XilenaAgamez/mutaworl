module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
      
      nombre: {
        type: Sequelize.TEXT
      },
      
      email: {
        type: Sequelize.TEXT
      },

      password: {
        type: Sequelize.STRING
      }     

    });
  
    return Usuario;

  };


  