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

    /*       
    to be added when we set up subscription page

    <div id="formStyle" class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Name">
        </div>

        <div id="formStyle" class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="email" placeholder="Email">
        </div>

        <div id="formStyle" class="form-group">
          <label for="exampleInputPassword1">Twitter Handle</label>
          <input type="text" class="form-control" id="social-handle" placeholder="Password">
        </div>

        
        <a onclick="addSubscriber()" class="btn btn-primary" href="#"> Contact</a>
        
        */