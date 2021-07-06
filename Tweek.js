// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDc4e2iXVbRBp3QNTty_DWgLTzqfVj1ah4",
  authDomain: "kwiiter-7b8a7.firebaseapp.com",
  databaseURL: "https://kwiiter-7b8a7-default-rtdb.firebaseio.com",
  projectId: "kwiiter-7b8a7",
  storageBucket: "kwiiter-7b8a7.appspot.com",
  messagingSenderId: "805862591339",
  appId: "1:805862591339:web:454e01873acef1146f1a2e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

      var UserName = localStorage.getItem("UserName");
      console.log(UserName);
      document.getElementById("RoomUsername").innerHTML = "Welcome " + UserName+"!"; 
  
      function getData() {firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(function(childSnapshot) {childKey =
  childSnapshot.key;
   Room_names = childKey

   //Start code
   console.log("roomname-"+Room_names);
   row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div> <hr>";
   document.getElementById("output").innerHTML+=row;
   });});}
  getData(); 
  
  function AddRoom()
  {
  RoomName = document.getElementById("RoomName Input").value;
  firebase.database().ref("/").child(RoomName).update({ purpose : "adding room name" });
  localStorage.setItem("RoomName", RoomName);
  console.log(RoomName);
  window.location="TweekRoom.html";
  }


  /* To Fix */
  function redirect(Room_names)
  {
    localStorage.setItem("room_name",Room_names);
    window.location= "TweekRoom.html";
    console.log(Room_names);
  }
  /* To */
  
  
  function Logout()
  {
    localStorage.removeItem("RoomName");
    localStorage.removeItem("user_name");
    window.location="index.html";
  } 

