var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
  var name = document.getElementById('contact-name').value;
  if (name.length == 0) {
    console.log("working")
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'Enter Full Name';
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  return true;
}

function validateEmail() {
  var email = document.getElementById('email').value;
  if (email.length == 0) {
    emailError.innerHTML = 'Email is required';
    return false;
  }
  if (!email.match(/^\S+@\S+\.\S+$/)) {
    emailError.innerHTML = 'Enter a valid email';
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  return true;
}

function validateSubject() {
  var subject = document.getElementById('subject').value;
  if (subject.length == 0) {
    subjectError.innerHTML = 'Subject is required';
    return false;
  }
  subjectError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
  return true;
}

function validateMessage(){
  var Message=document.getElementById('message').value
  var required2=20
  var left2 = required2-Message.length

  if(left2 > 0){
    messageError.innerHTML= left2 + "more characters requried"
    return false
  }
  messageError.innerHTML='<i class="fa-solid fa-square-check"></i>';
  return true
}

// function vlidateform(){
//   if(!validateName() || !validateEmail() ||! validateSubject() ||! validateMessage()){
//     submitError.style.display='block'
//     submitError.innerHTML='please fill all the field'
//       setTimeout(function(){submitError.style.display='none'},3000)
//       return false
//   }
//   }
  

  