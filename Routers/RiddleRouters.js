import express from "express";
import fs from "fs/promises";
import { riddleCreate } from "../Dal/Riddle.DAL.js";
import {createNewRiddle} from "../Dal/CRUD_To_mongo_riddle.js"

const RiddleRouters = express.Router()
RiddleRouters.use(express.json())


const RiddleDBPath = ".././DB/TestingFile.json";

RiddleRouters.delete("delete/:id", (req, res) => res.send("Get all riddles \n"))

RiddleRouters.get("/show", (req, res) => res.send("Get all riddles \n"))

RiddleRouters.post("/create", async (req, res) => {
    try {
        console.log("Hi from create!");
        console.log("Received body:", req.body.name);
        createNewRiddle(JSON.stringify(req.body))
        res.status(201).json({ message: "Success to write a new riddle" })
    }
    catch (err) {
        res.status(500).json({ error: "Internal server error!!" })
    }

})

RiddleRouters.put("/api/riddles/update/:id", async (req, res) => { })

export default RiddleRouters;