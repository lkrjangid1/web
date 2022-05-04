
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


var database = firebase.database();
var n, d, t, b, s, ty; 
var ref = firebase.database().ref("/metrial"+ mt_branch.value );
function submitmt() { 
if (mt_name.value  && mt_url.value) { 
n = mt_name.value; d = mt_imgurl.value; t = mt_url.value;
b = mt_branch.value; s = mt_sem.value; ty = mt_type.value;

document.getElementById("mt_name").value = ""; 
document.getElementById("mt_imgurl").value = ""; 
document.getElementById("mt_url").value = ""; 
alert("Uploaded Successfully");
firebase.database().ref("/metrial"+ mt_branch.value).push({
mtname: n, imgurl : d, url : t, branch : b, sem : s, type : ty }).key;
}
else{
   alert("fill ALL the details");     
    }

}

