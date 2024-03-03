const { mongoose } = require("mongoose");

const connectDB = async (req, res) => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/websiteHistory');
        console.log('DB Connected');
    }
    catch (error) {
        console.log('DB Failed', error);
    }
};

module.exports = connectDB;
