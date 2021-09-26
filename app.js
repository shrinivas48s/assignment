const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser')

const app = express();


let position =[];
var data ={};


app.set('view engine', 'ejs');
app.set('views', 'view');


app.use(express.json());
app.use(cookieParser());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));






app.get('/',(req,res)=>{
    res.render('sign_in');


});



app.post('/' ,(req,res)=>{
    
   
  if(req.body.job_title === 'hr')
  {position.push(req.body.job_title);
    
    res.redirect('/hr');
  }
  else if(req.body.job_title === 'manager')
  {
    position.push(req.body.job_title);
   
    res.redirect('/manager');
  }
  
  
  });

app.post('/home' ,(req,res, next)=>{
    data = req.body;
  
    data.job_title = position[0];
  
   position.pop();
  
    res.send(data.job_title);
      });
  





      app.get('/hr' ,(req,res,next)=>{
        res.render('google',{
        });
         
         });
       
       
       
       
       
      app.get('/hr/home',(req,res, next)=>{
                    
        console.log(data);
         res.render('hr',{
           data: data

         });
      });


        app.get('/manager' ,(req,res)=>{

                            res.render('google');
                        
           });
              
     app.get('/manager/home' ,(req,res, next)=>{
        res.render('manager',
        {
          data: data

        });
                
          });
              






app.listen(8000);