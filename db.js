const firebase = require('firebase');
const config = require('./config');

const fireDb = firebase.initializeApp(config.firebaseConfig);

module.exports = fireDb;