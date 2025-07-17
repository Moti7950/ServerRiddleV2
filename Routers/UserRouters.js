import express from "express";
import { userCreate } from "../Dal/User.DAL.js";
import fs from "fs/promises";
import { newUser } from ".././Utils/UtilityFunction.js"

const UserRouters = express.Router()
const UsersDBPath = ".././DB/TestingFile.json";

UserRouters.delete("/delete/:id", (req, res) => res.send("Delete user! \n"))

UserRouters.get("/show", (req, res) => res.send("Get all players \n"))

UserRouters.post("/create", async (req, res) => 
{
    try {
        const { name, TimeStatistics } = req.body;

        if (typeof name !== "string" || typeof TimeStatistics !== "number") {
            return res.status(400).json({ error: "Invalid or missing parameters 😢" });
        }
        

        const newUserForGame = await newUser(UsersDBPath ,req.body.name,)
        await userCreate(UsersDBPath, newUserForGame);

        res.status(201).json({ message: "User created successfully 😏", user: newUserForGame });

    } catch (err)
    {
        console.error("❌ Error creating user:", err);
        res.status(500).json({ error: "Internal server error 😢 !!" });
    }
});

UserRouters.put("/api/players/delete/update/:id", async (req, res) => { })

export default UserRouters;