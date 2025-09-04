import express from "express"
import UserRouters from "./UserRouters.js"
import RiddleRouters from "./RiddleRouters.js"

const gameServer = express()


gameServer.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
     if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});


gameServer.use(express.json())

//path to game reqwustclea
gameServer.use("/api/players", UserRouters);
gameServer.use("/api/riddles", RiddleRouters);


export default gameServer;
