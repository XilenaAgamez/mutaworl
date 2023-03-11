const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());


app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.json({ message: "Servidor corriendo." });
});


require("./routes/publicacion")(app);
require("./routes/usuario")(app);


// Puerto
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('El servidor se encuentra corriendo en el puerto' + PORT);
});

