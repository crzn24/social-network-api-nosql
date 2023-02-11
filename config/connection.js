const { connect, connection } = require('mongoose');

//Wrap Mongoose around local connection to MongoDB. local MongoDB instance runs on localhost with default port 27017. default connection at 127.0.0.1:27017 connects to Compass
connect('mongodb://127.0.0.1:27017/socialNetworkDB', { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); // options to connect with in connection string

module.exports = connection;