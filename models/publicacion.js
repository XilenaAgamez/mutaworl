module.exports = (sequelize, Sequelize) => {
    const Publicacion = sequelize.define("publicacion", {
      titulo: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      id_user: {
        type: Sequelize.INTEGER
      },
    });
  
    return Publicacion;
};