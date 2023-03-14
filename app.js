const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const cors = require("cors");
const db = require("./models");


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({limit: '50mb',extended: true}))


app.get("/", (req, res) => {
  res.json({ message: "Servidor corriendo." });
});



//Puerto
const PORT = process.env.PORT || 8080;

var usuario_router= require('./routes/usuario');


app.listen(PORT, () => {
  console.log('El servidor se encuentra corriendo en el puerto ' + PORT);

  db.sequelize.sync()
    .then(() => {
      console.log("bd conectada.");
    })
    .catch((err) => {
      console.log("fallo la conexion: " + err.message);
  })


  db.sequelize.sync({ force: true }).then(() => {
    console.log("detener y volver a sincronizar.");
  });

});


app.use('/api', usuario_router);

module.exports = app;


require("./routes/publicacion")(app);


