import { MongoClient } from "mongodb";
import "dotenv/config"

console.log("Mongo url:", process.env.MONGO_URL);

const mongoServer = new MongoClient(process.env.MONGO_URL)

//להכניס את התבנית של החידה בפונקציה
export async function createNewRiddle(newRiddle) {
    try {
        const DBname = mongoServer.db("Riddle_DB")
        const DBTableName = DBname.collection("MathQuestion")

        const result = await DBTableName.insertOne(newRiddle)

        console.log("insert was sucsessfuli the _id is", result.insertedId);
        
    } 
    finally
    {
        await mongoServer.close()
    }
}
