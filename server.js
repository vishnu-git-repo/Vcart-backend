const app = require("./app")
const db = require("./config/database")


// const fs = require("fs")
// if(fs.existsSync("uploads")){
//     console.log("uploads folder exists")
// }else{
//     console.log("uploads folder not exists")
// }

const PORT = process.env.PORT
app.listen(PORT,()=>{console.log('Server is listening in the PORT '+PORT)});