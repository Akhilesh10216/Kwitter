
const firebaseConfig = {
      apiKey: "AIzaSyAZPA0S6fxJb6zdAMlL5ofrL2XWPkkWCPQ",
      authDomain: "kwitter-24106.firebaseapp.com",
      databaseURL: "https://kwitter-24106-default-rtdb.firebaseio.com",
      projectId: "kwitter-24106",
      storageBucket: "kwitter-24106.appspot.com",
      messagingSenderId: "517453331329",
      appId: "1:517453331329:web:c6ede2d92cab465d1bc680",
      measurementId: "G-P7QS5FFF7D"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
