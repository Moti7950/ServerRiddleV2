import express from "express";
import { createNewRiddle, redAllRiddle, updateOneRiddle, deleteOneRiddle } from "../Dal/CRUD_To_mongo_riddle.js"

const RiddleRouters = express.Router()
RiddleRouters.use(express.json())

RiddleRouters.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await deleteOneRiddle(id);

        if (!result) {
            return res.status(500).send(" Error deleting riddle");
        }

        if (result.deletedCount === 0) {
            return res.status(404).send("Riddle not found");
        }
        res.send(`Riddle ${id} was deleted`);
    } catch (err) {
        res.status(500).send("Internal server error");
    }
});

RiddleRouters.get("/show", async (req, res) => {
    try {
        console.log("Hi from read")
        const riddle = await redAllRiddle()
        res.status(200).json({ message: "Success to read thea riddles", data: riddle })
    }
    catch (err) {
        res.status(500).json({ error: "Internal server error!!", err })
    }
});

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

});

RiddleRouters.put("/update/:id", async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await updateOneRiddle(id, updatedData);
    console.log(id, updatedData);


    if (result.matchedCount === 0) {
        return res.status(404).send("Riddle not found");
    }
    res.send(`Riddle ${id} was updated`);
});

// RiddleRouters.get("/check-answer", async (req, res) => {
//     const {Answer} = req;
//     try {
//         const riddles = await redAllRiddle()
//         // console.log(typeof riddles, "\n riddels: ", riddles);
//         //אני רץ פה בלולאה לבדוק האם התשובה נכונה, אולי זה לא צריך להיות פה??
//     }
//     catch (err) {
//         res.status(500).json({ error: "Internal server error!!", err })
//     }
// });

export default RiddleRouters;