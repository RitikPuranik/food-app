// start server
require('dotenv').config();

console.log("Public Key:", process.env.IMAGEKIT_PUBLIC_KEY); // check if loaded

const app = require('./src/app');
const connectDB = require('./src/db/db');

connectDB();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})