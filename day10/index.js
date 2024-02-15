const express = require("express");
const { pool } = require("./db");
const app = express();
const PORT = 8080;

const cors = require("cors");
app.use(cors());

app.use(express.json());

const morgan = require("morgan");
app.use(morgan("dev"));

app.get("/", (req,res) => {
    return res.json({
        name: "ssafy",
    });
});
app.get("/api/menus", async (req, res) => {
    try {
        const data = await pool.query("SELECT * FROM menus");
        if(data[0]){
            return res.json(data[0]);
        }
    }
    catch(error){
        return res.json(error);
    }
});
app.get("api/menus/:some", (req, res) => {
    console.log(req.params);
    console.log(req.query);
    return res.json({});
})
app.post("/api/menus", async (req, res) => {
    try {
        const data = await pool.query(
            "INSERT INTO menus (menu_name, menu_description) VALUES (?, ?)",
            [req.body.menu_name, req.body.menu_description]
        );
        return res.json(data);
    }
    catch(error){
        return res.json(error);
    }
});
app.listen(PORT, () => `this aplication is running in ${PORT}`);