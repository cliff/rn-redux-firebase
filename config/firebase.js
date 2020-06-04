import uuid from 'uuid/v4'
import * as firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "kinder-20.firebaseapp.com",
  databaseURL: "https://kinder-20.firebaseio.com",
  projectId: "kinder-20",
  storageBucket: "kinder-20.appspot.com",
  messagingSenderId: "242753273332",
  appId: "1:242753273332:web:9261005937f755c9004da1"
};

firebase.initializeApp(config);
const database = firebase.database();
export default database;

export const addTaskToFirebase = (task) => {
 const id = uuid()
 database.ref(`/${id}`).set({
 task, id
 })
}
export const removeTaskFromFirebase = (id) => {
database.ref(`/${id}`).remove()
}
