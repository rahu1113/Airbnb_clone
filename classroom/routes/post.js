
const express = require('express');
const app = express();
const router = express.Router();


// index route for posts

router.get('/',(req,res)=>{
    res.send("User Index");
});


// show route for posts
router.get('/:id',(req,res)=>{
    res.send("User Show");
});

// create route for posts
router.post('/',(req,res)=>{
    res.send("User Create");
});

router.put('/:id',(req,res)=>{
    res.send("User Update");
});

router.delete('/:id',(req,res)=>{
    res.send("User Delete");
});

module.exports = router;