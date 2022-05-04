

var config = {
				apiKey: "AIzaSyDjH7OD2pCE6dKEZjdd443IpIvVQ2I7rCQ",
  authDomain: "chatweb-78998.firebaseapp.com",
  databaseURL: "https://chatweb-78998.firebaseio.com",
  projectId: "chatweb-78998",
  storageBucket: "chatweb-78998.appspot.com",
  messagingSenderId: "777186925861",
  appId: "1:777186925861:web:e7f0d9f79daff0b3dd4ecc",
  measurementId: "G-N1Y93CYKD9"
			  };
			  firebase.initializeApp(config);


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
        
window.location="home.html";
    
    var user = firebase.auth().currentUser;

    if(user != null){
			var email_id = user.email;
   
    var uid = user.uid;
    
 document.getElementById("user_para").innerHTML = "Welcome User : " + email_id  + uid ;
   
     }
    
    

  }
  
  else {
    // No user is signed in.

        
  
    
  }
});


function forgetPass(){
  var auth = firebase.auth();
  var emailAddress = document.getElementById("forget_email").value;

  auth.sendPasswordResetEmail(emailAddress).then(function() {
    // Email sent.
    window.alert("Please check Email inbox and reset password : " + emailAddress);
  }).catch(function(error) {
    // An error happened.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
  });
}

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}



function register(){
  var regEmail = document.getElementById("reg_email").value;
  var regPass = document.getElementById("reg_pass").value;
  var regname = document.getElementById("reg_name").value;
 
  var database = firebase.database();

  var n, d,t ;
  var ref = firebase.database().ref("/users");
  
      if (reg_email.value && reg_name.value  )
 {
    n=reg_email.value;
    d=reg_name.value;
   
    
    alert("Signup Successfully");
  
    firebase.database().ref("/users").push({ 

       name:d,
       email:n, 
       
}).key;

}

 
  firebase.auth().createUserWithEmailAndPassword(regEmail, regPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    window.alert("Error : " + errorMessage);
  });


}

function logout(){
  firebase.auth().signOut();
  window.location="index.html";
}						

