import express from "express"
import UserRouters from "./UserRouters.js"
import RiddleRouters from "./RiddleRouters.js"

const gameServer = express()

gameServer.use(express.json())

//path to game reqwustclea
gameServer.use("/api/players", UserRouters);
gameServer.use("/api/riddles", RiddleRouters);


export default gameServer;
