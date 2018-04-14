//JavaScript will go here

      
      function popupFunction() {
        // Get the modal
        var modal = document.getElementById('myModal');
        modal.style.display = "block";
        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }

      };

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

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
