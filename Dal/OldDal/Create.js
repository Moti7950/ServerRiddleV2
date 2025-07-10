// import { writeFile } from "node:fs/promises"
// import {Read} from "./Read.js"

// //Utiliti function for gave the id
// function MaxId(DBPath)
// {
//     let counter = 1;
//     JSON.parse(DBPath).forEach(item => {
//         if ("ID" in item){
//             counter += 1;
//         }
//     });
//     return counter; 
// }

// //function create for object file (.Json)
// export async function Create(DBPath, name, TimeStatistics)
// {
//     const Readi = await Read(DBPath)
//     let DBCopyToJson = await JSON.parse(Readi)
//     // create new obj for added 
//     const templitJson =
//     {
//         // need atomatic counter,
//         "ID": MaxId(Readi),
//         "name": name,
//         "TimeStatistics": TimeStatistics
//     };

//     // log print if create successful
//     // console.log("Cehck print from func Create: ", templitJson);
//     // Importent!!! we need to copy the DB for update.
    
//     try
//     {
//         DBCopyToJson.push(templitJson)
//         await writeFile(DBPath, JSON.stringify(DBCopyToJson,null, 2))
//         console.log("The writing was successful. 😁");
//     }
//     catch(err)
//     {
//         console.error("Error to writing a new file: 😢", err);
//     }
// }

// // Function check
// // const checkCreate = await Create("../.././DBServer/DB/TestingFile.json");
// // console.log(checkCreate);

// // const checkRead = await Read("../.././DBServer/DB/TestingFile.json")
// // console.log(checkRead);

// // console.log(MaxId(checkRead));

// // Create("../.././DBServer/DB/TestingFile.json","test",5)
// // console.log(MaxId(checkRead));

