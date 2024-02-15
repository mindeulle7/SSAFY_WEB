const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

const morgan = require("morgan");
app.use(morgan("dev"));

app.get("/user/:id", async (req, res) => {
    console.log(req.params);
    console.log(req.query);
    try{   
        if(req.params.id && req.query.name){
            return res.json({
                getid: true,
                id : req.params.id,
                name: req.query.name,
            });
        }
    }
    catch(error){
        return res.json({
            getid: false,
        });
    }
});

app.post("/user", async (req, res) => {
    console.log(req.body)
    try{   
        if(req.body.id && req.body.password){
            return res.json({
                signup: true,
                id : req.params.id,
                password: req.query.password,
            });
        }
    }
    catch(error){
        return res.json({
            signup: false,
        });
    }
});

app.patch("/user/:id", async (req, res) => {
    console.log(req.params);
    console.log(req.body);
    try{   
        if(req.params.id && req.body.name){
            return res.json({
                update: true,
                id : req.params.id,
                name: req.body.name,
            });
        }
    }
    catch(error){
        return res.json({
            update: false,
        });
    }
});

app.delete("/user/:id", async (req, res) => {
    console.log(req.params);
    try{   
        if(req.params.id){
            return res.json({
                delete: true,
                id : req.params.id,
            });
        }
    }
    catch(error){
        return res.json({
            delete: false,
        });
    }
});

app.listen(PORT, () => `this aplication is running in ${PORT}`);