const express = require('express');
const route=express.Router()

const services=require('../services/render');
const controller = require('../controller/controller');

/**
 * @description Root Route
 * @method GET/
 */
route.get('/',services.homeRoutes);

/**
 * @description add users
 * @method GET/add-user
 */

route.get('/add-user',services.add_user)

/**
 * @description for update user
 * @method GET/update-user
 */



//API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.delete('/api/users/:id',controller.delete);

  
// // To redirect add user button to new user page
// route.get('/add-user',(req,res)=>{
//     res.render('add_user');
// })
//Instead render this in render.js and write alternate code as follows( same for all 3)



// route.get('/update-user',(req,res)=>{
//     res.render('update_user');
// })

module.exports=route