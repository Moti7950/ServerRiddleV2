import express from "express";
import fs from "fs/promises";
import { riddleCreate } from "../Dal/Riddle.DAL.js";

const RiddleRouters = express.Router()

const RiddleDBPath = ".././DB/TestingFile.json";

RiddleRouters.delete("/api/riddles/delete/:id", (req, res) => res.send("Get all riddles \n"))

RiddleRouters.get("/api/riddles/show", (req, res) => res.send("Get all riddles \n"))

RiddleRouters.post("/api/riddles/create", async (req, res) => {
    try {
        const { name, TimeStatistics } = req.body
        if (!name || !TimeStatistics) {
            return res.status(400).json({ err: "Missing paremeters! 😢" })
        }
        //need to write create for riddle
        await riddleCreate(RiddleDBPath, name, TimeStatistics);

        res.status(201).json({ message: "Success to write a new riddle" })
    }
    catch (err) {
        res.status(500).json({ error: "Internal server error!!" })
    }

})

RiddleRouters.put("/api/riddles/update/:id", async (req, res) => { })

export default RiddleRouters;