import gameServer from "./Routers/ExpressServer.js"

const PORT = process.env.PORT || 9076;

gameServer.listen(PORT, ()=> console.log(`Im listing to you at port ${PORT} 👁️`));
