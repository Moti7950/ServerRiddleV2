import express from "express";
import "dotenv/config";
// import { userCreate } from "../Dal/User.DAL.js";
// import fs from "fs/promises";
// import { newUser } from ".././Utils/UtilityFunction.js"
import { createPlayers } from "../Dal/CRUD_To_supabase_players.js"

const UserRouters = express.Router()
const UsersDBPath = ".././DB/TestingFile.json";

UserRouters.delete("/delete/:id", (req, res) => res.send("Delete user! \n"))

UserRouters.get("/show", (req, res) => res.send("Get all players \n"))

UserRouters.post("/create", async (req, res) => {
    try 
    {    console.log("Hi from create!");
    console.log("Received body:", req.body.name);
    createPlayers(req.body.name);
    res.status(201).json({ message: "Success to write a new riddle" })
    }
    catch (err) {
        res.status(500).json({ error: "Internal server error!!" })
    }
});

UserRouters.put("/api/players/delete/update/:id", async (req, res) => { })


export default UserRouters;