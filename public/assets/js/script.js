//JavaScript will go here
(function(){

 // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyCAAZk5kcdhwsSYjDaZ15DcgjT_mfEVDnE",
    authDomain: "swingmagazinelesgetit.firebaseapp.com",
    databaseURL: "https://swingmagazinelesgetit.firebaseio.com",
    projectId: "swingmagazinelesgetit",
    storageBucket: "swingmagazinelesgetit.appspot.com",
    messagingSenderId: "406177441271"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  //var database = firebase.database();
}());

function addSubscriber(){
    var subName = document.getElementById('name').value;
    var subEmail = document.getElementById('email').value;
    var subSocial = document.getElementById('social-handle').value;

    var db = firebase.database();
    var ref = db.ref();
    var subscribers = ref.child('user/subscribers');

    //push new info onto the stack
    subscribers.push({
      "name": subName,
      "email": subEmail,
      "social_handle": subSocial
    });

    var modal = document.getElementById('myModal');
    modal.style.display = "none";

    console.log(subEmail);
    console.log(subName);
    console.log(subSocial);
}

function sendEmail(){

    var email_body = document.getElementById('message').value;
    var email_to = "zandriaj14@gmail.com";
    var email_subject = "New Inquiry from SwingMagazine.net";

    window.open('mailto:test@example.com?subject=subject&body=body');
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav-pills") {
        x.className += " responsive";
    } else {
        x.className = "nav-pills";
    }
}
