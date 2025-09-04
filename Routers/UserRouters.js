import express from "express";
import "dotenv/config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createPlayers, readAllPlayers, updeateTime, deleteById, serchById, checkUserLogin } from "../Dal/CRUD_To_supabase_players.js"

const UserRouters = express.Router()

UserRouters.post("/signin", async (req, res) => {
    try {
        const { name, password } = req.body;
        console.log(req.body);
        if (name && password) {
            // const hashedPassword = await bcrypt.hash(password, 12);
            const ok = await checkUserLogin(name, password);
            if (ok) {
                return res.status(200).json({ message: "Login ok" });
            } else {
                return res.status(401).json({ error: "Invalid credentials" });
            }

        }
        return res.status(400).json({ error: "Missing name or password" })
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error!!" })
    }
})

UserRouters.delete("/delete/:id", (req, res) => res.send("Delete user! \n"))

UserRouters.get("/show", async (req, res) => {
    try {
        console.log("Hi from read user!");
        const users = await readAllPlayers()
        const filtered = users.map(user => ({
            name: user.name,
            timestatistics: user.timestatistics
        }))
        res.status(201).json({ message: "List of users: ", data: filtered })
    }
    catch (err) {
        res.status(500).json({ error: "Internal server error!!" })
    }
})

UserRouters.post("/search-in-DB-by-id-or-name", async (req, res) => {
    try {
        console.log("hi from serch id or name");
        const { name } = req.body;
        const result = await serchById(name);
        res.status(200).json({ result })
    } catch (err) {
        res.status(500).json({ error: "Internal server error!!" })
    }
});

UserRouters.post("/create", async (req, res) => {
    try {
        console.log("Hi from create!");
        console.log("Received body:", req.body.name);
        createPlayers(req.body.name);
        res.status(201).json({ message: "Success to write a new riddle" })
    }
    catch (err) {
        res.status(500).json({ error: "Internal server error!!" })
    }
});

UserRouters.put("/update/:id", async (req, res) => {
    try {
        console.log("Hi from update!");
        await updeateTime(req.params.id, req.body.timestatistics)
        console.log("Received body:", req.body.timestatistics, req.params.id);

        res.status(200).json({ message: "Success to update timestatistics" })
    }
    catch (err) {
        res.status(500).json({ error: "Internal server error!!" })
    }
})

export default UserRouters;