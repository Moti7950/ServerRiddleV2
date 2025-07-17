import express from "express"
import UserRouters from "./UserRouters.js"
import RiddleRouters from "./RiddleRouters.js"

const PORT = 9076;

//יש שגיאה ביצירת המשתמש לכן הקוד נופל צריך לבדוק שוב איך ליצור נכון את המשתמש
const gameServer = express()

gameServer.use(express.json())

//path to game reqwustclea
gameServer.use("/api/users/", UserRouters);
gameServer.use("/api/riddles/", RiddleRouters);

gameServer.listen(PORT, ()=> console.log(`Im listing to you at port ${PORT} 👁️`));
