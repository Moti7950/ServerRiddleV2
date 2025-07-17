import { MongoClient } from "mongodb";
import "dotenv/config"

console.log("Mongo url:", process.env.MONGO_URL);

const mongoServer = new MongoClient(process.env.MONGO_URL)

async function run() {
    try {
        const DBname = mongoServer.db("Riddle_DB")
        const DBTableName = DBname.collection("MathQuestion")

        const insertTemplit = {
            name: "Easy Math",
            taskDescription: "What is 5 + 3?",
            correctAnswer: "8",
        }
        const result = await DBTableName.insertOne(insertTemplit)

        console.log("insert was sucsessfuli the _id is", result.insertedId);
        
    } 
    finally
    {
        await mongoServer.close()
    }
}

run()