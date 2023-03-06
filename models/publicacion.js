module.exports = (sequelize, Sequelize) => {
    const Publicacion = sequelize.define("publicacion", {
      titulo: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      autor: {
        type: Sequelize.STRING
      }
    });
  
    return Publicacion;
  };