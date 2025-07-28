import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config({ path: '../.env' });

const DBUserName = "gamemembers"
// console.log("SQL_URL:", process.env.SQL_URL);
// console.log("PUBLIC_ANON_API:", process.env.PUBLIC_ANON_API);

const supabase = createClient(process.env.SQL_URL, process.env.PUBLIC_ANON_API);


//insert data
//work V
export async function createPlayers(name)
{ const {data , error} = await supabase
    .from(DBUserName)
    .insert({name})
    .select()
    return error || data
}   

//read from DB
//work V
export async function readAllPlayers()
{
    const {data , error} = await supabase
    .from(DBUserName)
    .select()
    return error || data
}

//update from DB
//work V
export async function updeateTime(id,time) {
      const {data , error} = await supabase
    .from(DBUserName)
    .update({timestatistics: time})
    .eq("id", id)
    if(error) return false;
    return true;
}

export async function checkPassword(name, inputPassword) {
    const { data, error } = await supabase
        .from(DBUserName)
        .select("password")
        .eq("name", name)
        .single()

    if (error || !data) return false;

    return data.password === inputPassword;
}

//delete from DB
//work V
export async function deleteById(id) {
    const {data , error} = await supabase
    .from(DBUserName)
    .delete()
    .eq("id", id)
     if(error) return false;
    return true;
}

//serch by id
//work V
export async function serchById(idOrName)
{
    const {data, error} = await supabase
    .from(DBUserName)
    .select("*")
    .or(`id.eq.${idOrName},name.eq.${idOrName}`);
    if(data.length === 0 || error) return false;
    return true;
}

// console.log(await updeateTime(3,2.5));
// console.log(await deleteById(2));

export default supabase;

