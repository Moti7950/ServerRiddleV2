
//function for get path ane read the data , the function gave a string file.
async function Read(path)
{
    try
    {
        console.log("from Read func in try block");
        const asyncRead = await readFile(path, "utf8")
        return asyncRead;
    }
    catch (err)
    {
        console.log("Error from Read func in catch block!");
        return err;
    }
}


//Utiliti function for gave the id on object
export function MaxId(DBPath)
{
    let counter = 1;
    JSON.parse(DBPath).forEach(item => {
        if ("ID" in item){
            counter += 1;
        }
    });
    return counter; 
}

//function for create a new user
export async function newUser(DBPath, name, TimeStatistics)
{
    const Readi = await Read(DBPath)
    templitJson =
    {
        // need atomatic counter,
        "ID": MaxId(Readi),
        "name": name,
        "TimeStatistics": TimeStatistics
    };
    return templitJson
}

