
import express from "express";

const app = express();

function createServer(){
    app.use(express.json);

    app.get("/", (req, res) => {
    res.send("Hello from Express!");
    });

    app.post("/data", (req, res) => {
    const { name } = req.body;
    res.json({ message: `Hello, ${name}!` });
    });

    const PORT = 300;
    app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    });
}


createServer()