const mongoose = require("mongoose")

const db_uri = process.env.DATABASE_URI;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
    await mongoose.connect(db_uri, clientOptions)
    .then(()=>{
        console.log("Database conected");
    }).catch(()=>{
        console.log("Database not connected");
    })
}
run().catch(console.dir);