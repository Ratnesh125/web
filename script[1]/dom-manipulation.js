//mp driving license printing site
//auto filling ang submitting form
function first (){
document.querySelector('#applno').value=933960523;
document.querySelector('#dateOfBirth').value='04-11-2002';
document.getElementById('submitid').click();
document.querySelector('#otpno').value=456375;
document.getElementById('printid').click();
}
//if otp not match go back to previous site
function second (){
const otpNotMatched = document.querySelectorAll('font[color="blue"][style="font-size:18pt;"]');

  if (otpNotMatched.length > 0 && otpNotMatched[0].innerText === "OTP not matched.") {
    document.getElementById("back").click();
  } else {
    alert("Success!");
  }
}
first();
second();
