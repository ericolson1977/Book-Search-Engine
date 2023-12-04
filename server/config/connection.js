const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');

module.exports = mongoose.connection;



mongodb+srv://mrtuesnight:xy8xlNyTPqRwqUWq@cluster0.e8wrs5z.mongodb.net/googlebooks?retryWrites=true&w=majority