
import express from "express";
import { add ,getTimestamp,reverseString } from "./func";
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
    app.get("/add", (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);
    res.json({ result: add(a, b) });
    });
    app.get("/reverse", (req, res) => {
    const { text } = req.quer;
    res.json({ resul: reverseString(text) });
    });
    app.get("/time", (req, res) => {
    res.json({ timestamp: getTimestamp() });
    });

    const PORT = 300;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
}

createServer()