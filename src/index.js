import dotenv from 'dotenv'
dotenv.config({ path: './env' })

import connectDB from './db/index.js'

connectDB()
.then(() =>{

    app.on("error", (err) => {
        console.error("Error:", err);
        throw err; // Rethrow the error to crash the application
    })

     app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
     })
})
.catch((err) =>{
    console.error("Error connecting to database:", err);
})