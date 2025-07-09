import express from "express";
import fs from "fs/promises";
import { Create } from "../Dal/Create.js";

const RiddleRouters = express.Router()

const DBPath = "../.././DBServer/DB/TestingFile.json";

RiddleRouters.delete("/api/riddles/:id", (req,res)=> res.send("Get all riddles \n"))

RiddleRouters.get("/api/riddles", (req,res)=> res.send("Get all riddles \n"))

RiddleRouters.post("/api/riddles", async (req,res)=> {
    try 
    {
        const {name, TimeStatistics} = req.body
        if (!name || !TimeStatistics)
        {
            return res.status(400).json({err: "Missing paremeters! 😢"})
        }
        //need to write create for riddle
        await Create(DBPath, name, TimeStatistics);

        res.status(201).json({message: "Success to write a new riddle"})
    }
    catch(err)
    {
        res.status(500).json({error: "Internal server error!!"})
    }

})

RiddleRouters.put("/api/riddles/:id", async (req,res)=> {})

export default RiddleRouters;