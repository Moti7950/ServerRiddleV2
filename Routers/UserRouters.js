import express from "express";
import fs from "fs/promises";

const UserRouters = express.Router()

UserRouters.get("/api/players", (req,res)=> res.send("Get all players \n"))

UserRouters.post("/api/players", async (req,res)=> 
{
        try 
        {
            const {name, TimeStatistics} = req.body
            if (!name || !TimeStatistics)
            {
                return res.status(400).json({err: "Missing paremeters! 😢"})
            }
            await userCreate(DBPath, name, TimeStatistics);
    
            res.status(201).json({message: "Success to write a new riddle"})
        }
        catch(err)
        {
            res.status(500).json({error: "Internal server error!!"})
        }
})

UserRouters.put("/api/players/:id", async (req,res)=> {})

export default UserRouters;