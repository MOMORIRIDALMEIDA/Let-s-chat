
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBIhiCGn3-YiFjv6vs8AGbxshUlK5mVi4Y",
      authDomain: "let-s-chat-edd22.firebaseapp.com",
      databaseURL: "https://let-s-chat-edd22-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-edd22",
      storageBucket: "let-s-chat-edd22.appspot.com",
      messagingSenderId: "289211705747",
      appId: "1:289211705747:web:f0f6088b2d36e13f156066"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
