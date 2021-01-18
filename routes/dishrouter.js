// express router 
const express = require('express');
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose'); 

const Dishes = require('../models/dishes'); 



var dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')// we need to mount this on index.js file 
// mounting an express router 
// chain all the get,put, post methods 
.get( (req, res, next) => {
    Dishes.find({})
        .then((dishes) => {
            res.statusCode = 200; 
            res.setHeader('Content-Type', 'application/json'); 
            res.json(dishes);   // send it back over to the client 
        }, (err) => next(err))
})
.post((req, res, next) => {
    res.end('Will add the dish: '+ req.body.name + ' with details: '+ req.body.description); 

})

.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes'); 

})

.delete( (req, res, next) => {
    res.end('Deleting all the dishes!');

});


dishRouter.route('/:dishId')
.get( (req, res, next) => {
    res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+req.params.dishId); 

})
.put((req, res, next) => {
    res.write('Updating the dish: '+ req.params.dishId + '\n');
    res.end('Will update the dish: '+ req.body.name + ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting dish: '+req.params.dishId);
});





// the code above is one single unit 

module.exports = dishRouter;