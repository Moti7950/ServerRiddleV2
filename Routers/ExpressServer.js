import express from "express"
import UserRouters from "./UserRouters.js"
import RiddleRouters from "./RiddleRouters.js"

const PORT = 9096;

const gameServer = express()

gameServer.use(express.json())

//path to game reqwust
gameServer.use("/", UserRouters);
gameServer.use("/", RiddleRouters);

gameServer.listen(PORT, ()=> console.log(`Im listing to you at port ${PORT} 👁️`));
