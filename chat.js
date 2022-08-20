var firebaseConfig = {
    apiKey: "AIzaSyAm2Aqnwf2KIwP4ZCBIiq4uF2nIqRtmZw0",
    authDomain: "chatapp-dc217.firebaseapp.com",
    databaseURL: "https://chatapp-dc217-default-rtdb.firebaseio.com",
    projectId: "chatapp-dc217",
    storageBucket: "chatapp-dc217.appspot.com",
    messagingSenderId: "970218351922",
    appId: "1:970218351922:web:a97767e9819521d8a2bb2b",
    measurementId: "G-HPEZSRQL3S"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  username=localStorage.getItem("name1");
  roomname=localStorage.getItem("room");
  function logout() {
    localStorage.removeItem("name1");
    localStorage.removeItem("room");
    window.location="index.html"
}