const mongoose = require('mongoose');
class Database {
  constructor() {
    this.connect();
  }
  async connect() {
    // connect to database
    try {
      const connection = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      if (connection) {
        console.log('MongoDB connected');
      }
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = new Database();
