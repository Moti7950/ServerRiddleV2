import { createClient } from "@supabase/supabase-js";
import "dotenv/config"

console.log("SQL_URL:", process.env.SQL_URL);
console.log("PUBLIC_ANON_API:", process.env.PUBLIC_ANON_API);

const supabase = createClient(process.env.SQL_URL, process.env.PUBLIC_ANON_API);


//insert data
async function createtest()
{ const {data , error} = await supabase
    .from("gamemembers")
    .insert({id: 1, name: "Moti"})
    .select()
    return error || data
}   

try{
    console.log(await createtest());
}
catch{
    console.log(error.message);
}