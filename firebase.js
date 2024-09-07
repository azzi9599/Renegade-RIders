

const firebaseConfig = {
    apiKey: "AIzaSyD-JfvSXApMuJPOlhq4Z56ru5Jy3HuEShM",
    authDomain: "trip-organiser-5bcfa.firebaseapp.com",
    databaseURL: "https://trip-organiser-5bcfa-default-rtdb.firebaseio.com",
    projectId: "trip-organiser-5bcfa",
    storageBucket: "trip-organiser-5bcfa.appspot.com",
    messagingSenderId: "776989253060",
    appId: "1:776989253060:web:43481d322bd9a1b70a5891",
    measurementId: "G-NPSH7663L6"
  };


  firebase.initializeApp(firebaseConfig);

  var contactFormDB = firebase.database().ref("contactForm");

  document.getElementById("contactForm").addEventListener("submit",submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var number = getElementVal('telnumber');
    var emailid = getElementVal('email');
    var msg = getElementVal('message');
    
saveMessages(name, number,emailid, msg);    
document.querySelector('.alert').style.display="block";

setTimeout(() => {
    document.querySelector('.alert').style.display="none";

},3000);


document.getElementById("contactForm").reset();



  }
const saveMessages = (name, number,emailid, msg ) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        number: number,
        emailid: emailid,
        msg: msg,
    });
};
const getElementVal = (id) => {
    return document.getElementById(id).value;
};


