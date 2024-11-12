


function validateEmail(email) {

  var emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  return emailPattern.test(email);
  
}

function check() {
  //Check Email
  var email = document.getElementById('email')
  var emailErr = document.getElementById('email-err')
  //Check Phone Number
  var phoneNumber = document.getElementById('phone-number')
  var phoneErr = document.getElementById('phone-err')
  
  //Check Password 
  var password = document.getElementById('password')
  var passErr = document.getElementById('pwd-err')

  var text = email.value
  var isEmail = validateEmail(text)
  if(!isEmail){
      emailErr.textContent = 'Email is not valid'
  }else{
    emailErr.textContent = ''
  }

  
  var phoneNumberValue = phoneNumber.value
  if(!isNaN(phoneNumberValue) && phoneNumberValue.length === 8){
    phoneErr.textContent = ''
  }
    else{
      phoneErr.textContent = 'Phone number must be only numbers and 8 digits'
  }
 

  var passValue = password.value
  if(passValue.length < 6){
    passErr.textContent = 'Password must be more than 6 digits'
  }
  else{
      passErr.textContent = ''
  }

  }
    




















  // console.log(validateEmail('.@example.fr'))