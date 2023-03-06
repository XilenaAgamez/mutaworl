const db = require("../models");
const Usuario = db.usuario;
const Op = db.Sequelize.Op;
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../helpers/jwt');



//registro de cliente
const registro_usuario = async function(req,res){
    var data = req.body;
    var usuarios_arr = [];

    //registro
    usuarios_arr = await Usuario.find({email:data.email});
  
    if(usuarios_arr.length == 0){
        if(data.password){
            bcrypt.hash(data.password,null,null, async function(err, hash){
                if(hash){
                    data.password = hash;
                    var reg = await Usuario.create(data);
                    //console.log(hash);
                    res.status(200).send({data:reg});
                }else{
                    res.status(200).send({message:'ErrorServer', data:undefined});
                }
            })  

        }else{
            res.status(200).send({message: 'No hay una contraseña',data:undefined});
        }
        //res.status(200).send({data:reg});
    }else{
        res.status(200).send({message:'El correo ya existe en la base de datos', data:undefined});
    }  
}


//Validacion de credenciales login
const login_usuario = async function(req, res){
    var data = req.body;
    var usuario_arr = [];

    usuario_arr = await Usuario.find({email:data.email});

    if(usuario_arr.length == 0){
        res.status(200).send({message: 'No se encontro el correo', data:undefined});

    }else{
        let user = usuario_arr[0];

        bcrypt.compare(data.password, user.password, async function(err, check){
            if(check){
                res.status(200).send({
                    data:user,
                    token: jwt.createToken(user)
                });
               
            }else{
                res.status(200).send({message: 'La contraseña no coicide', data:undefined});
            }
        });
    }   
}




module.exports={
    registro_usuario,
    login_usuario
}