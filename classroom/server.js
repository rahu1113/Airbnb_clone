
const express=require('express');
const app=express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
// const cookieParser=require("cookie-parser");
const session=require("express-session");
const flash=require("connect-flash"); 
const path=require("path");

app.set ("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

const sessionOptions= {
    secret:"my secret",
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}
}

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
});

app.get("/register",(req,res)=>{
    let {name="anonymous"}=req.query;
    req.session.name=name;
    if(name==="anonymous"){
        req.flash("success","You have not registered!");
    }else{
        req.flash("success","You have registered as ");
    }
    res.redirect("/hello");
});
app.get("/hello",(req,res)=>{

    
    res.render("page.ejs",{name:req.session.name});
});

// app.get("/countSession",(req,res)=>{
//     if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count=1;
//     }
//     res.send(`You have visited this page ${req.session.count} times.`);
// });
  
// app.get("/test",(req,res)=>{
//     res.send("test route");
// })

// app.use(cookieParser());




// app.get("/getCookies",(req,res)=>{
//     res.cookie("greet","hello world");
//     res.send("cookie set");
// });

// app.get("/greet",(req,res)=>{
//     let {name="anonymous"} = req.cookies;
//     res.send(`hi, ${name}!`);
// });

// app.get("/",(req,res)=>{
//     console.dir(req.cookies);
//     res.send("i am route");
// });

// app.use("/users",users);
// app.use("/posts",posts);


// app.listen(3000,()=>{
//     console.log("listening on port 3000");
// });








app.listen(3000,()=>{
    console.log("listening on port 3000");
});