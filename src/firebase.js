import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBp7W37IAxJSbXTCpiloPxBosOkD5jOK3Y",
  authDomain: "discord-clone-3746e.firebaseapp.com",
  projectId: "discord-clone-3746e",
  storageBucket: "discord-clone-3746e.appspot.com",
  messagingSenderId: "449576577790",
  appId: "1:449576577790:web:2884f367f0849d757993af",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
