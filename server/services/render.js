const axios=require('axios');

exports.homeRoutes=(req,res)=>{

    //To make a request to api/users
    axios.get('http://localhost:3002/api/users')
     .then(function(response){
        console.log(response.data)
        res.render('index',{users:response.data});
     })
     .catch(err=>{
        res.send(err);
     })
   
   
}

exports.add_user=(req,res)=>{
    res.render('add_user');
}

