import { MongoClient } from "mongodb";
import "dotenv/config"

// console.log("Mongo url:", process.env.MONGO_URL);

const mongoServer = new MongoClient(process.env.MONGO_URL)

//להכניס את התבנית של החידה בפונקציה
export async function createNewRiddle(newRiddle) {
    await mongoServer.connect(); 
    try {
        const DBname = mongoServer.db("Riddle_DB")
        const DBTableName = DBname.collection("MathQuestion")

        const result = await DBTableName.insertOne(newRiddle)

        console.log("insert was sucsessfuli the _id is", result.insertedId);
    }
    finally {
        await mongoServer.close()
    }
}

export async function redAllRiddle() {
    await mongoServer.connect(); 
    try {
        const DBname = mongoServer.db("Riddle_DB")
        const DBTableName = DBname.collection("MathQuestion")
        const result = await DBTableName.find().toArray()
        // console.log("All riddle:", result);
        return result;
    }
    catch (err) {
        console.error("MongoDB error:", err.message);
        console.error(err);
        return [];
    }
    finally {
        await mongoServer.close()
    }
}

export async function updateOneRiddle(idChenge ,newIteme)
{
 await mongoServer.connect(); 
    try {
        const DBname = mongoServer.db("Riddle_DB")
        const DBTableName = DBname.collection("MathQuestion")
        const result = await DBTableName.updateOne({ObjectId:`${idChenge}`},{$set: newIteme})
        // console.log("All riddle:", result);
        // return result;
    }
    catch (err) {
        console.error("MongoDB error:", err.message);
        console.error(err);
        return [];
    }
    finally {
        await mongoServer.close()
    }
}
