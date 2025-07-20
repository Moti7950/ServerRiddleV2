import express from "express";
import { userCreate } from "../Dal/User.DAL.js";
import fs from "fs/promises";
import { newUser } from ".././Utils/UtilityFunction.js"

const UserRouters = express.Router()
const UsersDBPath = ".././DB/TestingFile.json";

UserRouters.delete("/delete/:id", (req, res) => res.send("Delete user! \n"))

UserRouters.get("/show", (req, res) => res.send("Get all players \n"))

UserRouters.post("/create", async (req, res) =>{});

UserRouters.put("/api/players/delete/update/:id", async (req, res) => { })

export default UserRouters;