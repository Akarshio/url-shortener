const mongoose = require("mongoose");
const dns = require("dns");

require("dotenv").config();

// Force Google DNS
dns.setServers(["8.8.8.8"]);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected");
    } catch (err) {
        console.error(err);
    }
};

module.exports = connectDB;