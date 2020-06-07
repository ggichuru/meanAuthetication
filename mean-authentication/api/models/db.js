require('./user');
const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://devGG:Achala07@cluster0-pmkkd.gcp.mongodb.net/meanAuth?retryWrites=true&w=majority';

mongoose.set('useCreateIndex', true);
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to database');
})
mongoose.connection.on('error', () => {
    console.log('Mongoose connection error:' + Error);
})
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
})