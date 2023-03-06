const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { prototype } = require('jsonwebtoken/lib/JsonWebTokenError');


//rutas
require("./routes/publicacion")(app);
require("./routes/usuario")(app);



const db = require("./models");
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


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Servidor corriendo." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}.`);
});


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({limit: '50mb',extended: true}))



app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*'); 
  res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
  res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
  next();

});




