
import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyA12y5WihZcd3t20hMJdgVFqjes1i1TR24",
    authDomain: "abilisense-8b140.firebaseapp.com",
    databaseURL: "https://abilisense-8b140.firebaseio.com",
    projectId: "abilisense-8b140",
    storageBucket: "abilisense-8b140.appspot.com",
    messagingSenderId: "1039560777",
    appId: "1:1039560777:web:65caf2ac2cf009429ccf98",
    measurementId: "G-JT4N1P6FXJ"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;