import express from "express";
import fs from "fs/promises";
import { riddleCreate } from "../Dal/Riddle.DAL.js";
import { createNewRiddle, redAllRiddle } from "../Dal/CRUD_To_mongo_riddle.js"

const RiddleRouters = express.Router()
RiddleRouters.use(express.json())


const RiddleDBPath = ".././DB/TestingFile.json";

RiddleRouters.delete("delete/:id", (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    res.send(`Riddle ${id} was updated`);
    updateOneRiddle(updatedData)
})

RiddleRouters.get("/show", async (req, res) => {
    try {
        console.log("Hi from read")
        const riddle = await redAllRiddle()
        res.status(200).json({ message: "Success to read thea riddles", data: riddle })
    }
    catch (err) {
        res.status(500).json({ error: "Internal server error!!", err })
    }
})

RiddleRouters.post("/create", async (req, res) => {
    try {
        console.log("Hi from create!");
        console.log("Received body:", req.body.name);
        await createNewRiddle(req.body)
        res.status(201).json({ message: "Success to write a new riddle" })
    }
    catch (err) {
        res.status(500).json({ error: "Internal server error!!" })
    }

})

RiddleRouters.put("/update/:id", async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await updateOneRiddle(id, updatedData);
    if (result.matchedCount === 0) {
        return res.status(404).send("Riddle not found");
    }
    res.send(`Riddle ${id} was updated`);
});

export default RiddleRouters;