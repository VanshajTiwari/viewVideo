const Express=require('express');
const App=Express();
const ejs=require('ejs');
const path = require('path');

App.use(Express.static(path.join(__dirname)));
App.use(Express.json());
App.use(Express.urlencoded({extended:true}));
App.set("view-engine",ejs);
App.set('views',path.join(__dirname,"views"));
App.get("/",(req,res)=>{
    res.render("index.ejs");
})
App.post("/post",(req,res)=>{
        const {url}=req.body;
        res.render("viewVide.ejs",{url});
});

App.listen(8080,()=>{
    console.log("http://127.0.0.1:8080");
})
