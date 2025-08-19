import mongoose from "mongoose"

// initiated a function to connect to my database connection 
const connectDB = async () => {
    // enclosed inside a try catch block scope 
    try {
        // initiated my connection to my database
        const conn = await mongoose.connect('mongodb://localhost:27017/APP')
        // logged my response to ensure it is running 
        console.log(`Mongodb Connected ${conn.connection.host}`)

    } catch (error) {
        // to catch error
        console.error(`Error: ${error.message}`)
        // to exit the program after catching the error
        process.exit()
    }
    
}
// exporting the function to be used in other files
export default connectDB  