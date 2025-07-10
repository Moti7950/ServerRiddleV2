

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