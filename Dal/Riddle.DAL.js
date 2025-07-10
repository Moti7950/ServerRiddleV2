import { writeFile } from "node:fs/promises"
import {readFile} from "node:fs/promises"
import {Read} from "./Read.js"
import { MaxId } from "../Utils/UtilityFunction.js"
//function create for object file (.Json)
export async function RiddleCreate(DBPath, name, TimeStatistics)
{
    const Readi = await Read(DBPath)
    let DBCopyToJson = await JSON.parse(Readi)
    // create new obj for added 
    const templitJson =
    {
        // need atomatic counter,
        "ID": MaxId(Readi),
        "name": name,
        "TimeStatistics": TimeStatistics
    };

    // log print if create successful
    // console.log("Cehck print from func Create: ", templitJson);
    // Importent!!! we need to copy the DB for update.
    
    try
    {
        DBCopyToJson.push(templitJson)
        await writeFile(DBPath, JSON.stringify(DBCopyToJson,null, 2))
        console.log("The writing was successful. 😁");
    }
    catch(err)
    {
        console.error("Error to writing a new file: 😢", err);
    }
}

async function RiddleUpdate(DBPath, IDchenge)
{
    const Readi = await Read(DBPath)
    Readi.forEach(idnum => {
        if (idnum === "ID" && idnum === IDchenge)
        {
            console.log("Please select your nam");
        }
    });
}

 export async function RiddleRead(path)
{
    //Get only string file (.txt)
    try
    {
        console.log("from Read func in try block");
        const asyncRead = await readFile(path, "utf8")
        //check if neet convert to Json
        return asyncRead;
    }
    catch (err)
    {
        console.log("Error from Read func in catch block!");
        return err;
    }
}

async function RiddleDelete(DBPath, IDDelete)
{
    const Readi = await Read(DBPath)
    const newDB = Readi.filter(item => item.ID !== IDDelete)
    console.log(typeof Readi , "newDB", typeof newDB);
    console.log(newDB);
    
}

// Function check
// const checkDelete = await Delete("../.././DBServer/DB/TestingFile.json", 6)
// console.log(checkRead);

// Function check
// const checkRead = await Read("../.././DBServer/DB/TestingFile.json")
// console.log(checkRead);

