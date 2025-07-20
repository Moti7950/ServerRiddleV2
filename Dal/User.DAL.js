import { writeFile } from "node:fs/promises"
import { readFile } from "node:fs/promises"
import { Read } from "./Read.js"
import { newUser } from "../Utils/UtilityFunction.js"


export async function userCreate(name) {
        const { data, error } = await supabase
            .from("gamemembers")
            .insert({ name: name })
            .select()
        return error || data
    }

export async function userUpdate() { }

export async function userRead() { }

export async function userDelete() { }

