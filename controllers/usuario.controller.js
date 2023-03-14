const db = require("../models");
const usuario  = db.usuario;
const Op = db.Sequelize.Op;

const bcrypt = require('bcrypt-nodejs');
const jwt = require('../helpers/jwt');



const login = async function(req,res){

    var data = req.body;
    var usuario_arr = [];

    usuario_arr = await usuario.find({email:data.email});

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
                res.status(200).send({message: 'La contraseña no coincide', data:undefined});
            }
        });
    }   

}



   
//Registro
const registro = async function(req,res){
    var data = req.body;
    console.log("Body:", req.body);
    
    let user_arr = await usuario.findOne({email:data.email});

    if(user_arr){
        res.status(200).send({message:'El correo ya existe en la base de datos', data:undefined});
    }else{
        
        if({data:data.password}){
            bcrypt.hash(data.password,null,null, async function(err, hash){
                if(hash){
                    data.password = hash;
                    var reg = await usuario.create(data);
                    console.log(hash);

                    res.status(200).send({data:reg});
                }else{
                    res.status(200).send({message:'ErrorServer', data:undefined});
                }
            })  

        }else{
            res.status(200).send({message: 'No hay una contraseña',data:undefined});
        }
        //res.status(200).send({data:reg});
    } 
}


module.exports={
    registro,
    login
}