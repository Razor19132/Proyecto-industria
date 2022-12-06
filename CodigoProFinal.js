// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbMqZ6Fy9nHHMrS7NHrNKHK18-9L6oMUA",
  authDomain: "iot-210622.firebaseapp.com",
  databaseURL: "https://iot-210622-default-rtdb.firebaseio.com",
  projectId: "iot-210622",
  storageBucket: "iot-210622.appspot.com",
  messagingSenderId: "750868422223",
  appId: "1:750868422223:web:b0862a5fd3d5bf6aae543a"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

//------------------------ Leer Datos --------------------------------------
firebase.database().ref('ProFinal/Gas').on('value', function(data) {
lblContador.innerHTML = JSON.stringify(data.val())
})