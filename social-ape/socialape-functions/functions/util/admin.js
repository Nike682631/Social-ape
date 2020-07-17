var admin = require("firebase-admin");

// var serviceAccount = require("/home/nikunj/socialape-functions/socialape-6925b-firebase-adminsdk-5sl6j-aff9ac6efd.json");

const firebaseConfig = require("./firebaseConfig");

admin
  .initializeApp
  // credential: admin.credential.cert(serviceAccount),
  // databaseURL: "https://socialape-6925b.firebaseio.com",
  // storageBucket: "socialape-6925b.appspot.com",
  ();

const db = admin.firestore();

module.exports = { admin, db };
