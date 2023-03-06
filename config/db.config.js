module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "xilena28",
    DB: "prueba_muta",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };