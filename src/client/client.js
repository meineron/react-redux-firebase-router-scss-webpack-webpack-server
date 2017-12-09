import firebase from 'firebase';

var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};


firebase.initializeApp(config);

export const auth = firebase.auth
//export const provider = new firebase.auth.FacebookAuthProvider();
export const database = firebase.database();

//provider.addScope('user_friends');


