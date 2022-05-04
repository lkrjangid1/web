var Config = { 
apiKey: "AIzaSyDjH7OD2pCE6dKEZjdd443IpIvVQ2I7rCQ",
  authDomain: "chatweb-78998.firebaseapp.com",
  databaseURL: "https://chatweb-78998.firebaseio.com",
  projectId: "chatweb-78998",
  storageBucket: "chatweb-78998.appspot.com",
  messagingSenderId: "777186925861",
  appId: "1:777186925861:web:e7f0d9f79daff0b3dd4ecc",
  measurementId: "G-N1Y93CYKD9"};
firebase.initializeApp(Config);

function submitsem() {
    var ref = firebase.database().ref().child("metrialCivil"); 
    ref.on("child_added", function(data) { 
				var una1 = data.val(); 
				var una2 = data.val(); 
				var una3 = data.val();
				var una4 = data.val(); 
				var una5 = data.val(); 
				var una6 = data.val();
    		if (((una4.branch).toLowerCase()).includes(("Civil").toLowerCase()) && ((una5.sem).toLowerCase(usersem.value)).includes(().toLowerCase()) && ((una6.type).toLowerCase()).includes(("Book").toLowerCase()) ){
        
					booklist.innerHTML = document.getElementById("booklist").innerHTML + "<div class=\"books\"><center><a href=\"" + una1.url +"\"><img class=\"bookimg\" src=\"" + una2.imgurl  +"\" /><h5 class=\"bookname\" >" + una3.mtname + "</h5></a></center></div>" }},
function(error) { alert(error.code) });};

