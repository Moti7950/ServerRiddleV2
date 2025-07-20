import { createClient } from "@supabase/supabase-js";
import "dotenv/config"

// console.log("SQL_URL:", process.env.SQL_URL);
// console.log("PUBLIC_ANON_API:", process.env.PUBLIC_ANON_API);

const supabase = createClient(process.env.SQL_URL, process.env.PUBLIC_ANON_API);

//insert data
export async function createPlayers(name)
{ const {data , error} = await supabase
    .from("gamemembers")
    .insert({name})
    .select()
    return error || data
}   

//read from DB
export async function readAllPlayers()
{
    const {data , error} = await supabase
    .from("gamemembers")
    .select()
    return error || data
}

//update from DB
export async function updeateTime(id,time) {
      const {data , error} = await supabase
    .from("gamemembers")
    .eq("id", id)
    .update({timestatistics: time})
    return error || data
}

//delete from DB
export async function deleteById(id) {
    const {data , error} = await supabase
    .from("gamemembers")
    .delete()
    .eq("id", id)
    return error || data
}

// console.log(await updeateTime(3,4));
// console.log(await deleteById(10));



export default supabase;

