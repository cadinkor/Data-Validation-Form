function myfun(){
  var UserName=document.getElementById('Name').value;
  var Email=document.getElementById('Email').value;
  var Password=document.getElementById('Password').value;
  var ConfirmPassword=document.getElementById('Confirm').value;

  if(UserName == ""){
    document.getElementById('UserBlank').innerHTML = "Please Enter the Username"
  }else if(UserName != ""){
    document.getElementById('UserBlank').innerhTML = ""
 
  }if(Email  == ""){
    document.getElementById('EmailBlank').innerHTML = "Please Enter Your Email"
  }else if(Email != ""){
    document.getElementById('EmailBlank').innerHTML = ""
  
  }if(Pass == ""){
    document.getElementById('PasswordBlank').innerHTML = "Please Enter Your Password"
  }else if(Pass !== ""){
    document.getElementById('PasswordBlank').innerHTML = ""
  }

  if(ConfirmPassword == ""){
    document.getElementById('ConfirmBlank').innerHTML = "Please Enter Your Password"
  }else if(ConfirmPassword !== ""){
    document.getElementById('ConfirmBlank').innerHTML = ""

  if(Password != ConfirmPassword){
    document.getElementById('PassConfirmBlank').innerHTML = "Please Enter Confirmed Password"
  } else if (Password == ConfirmPassword){
    document.getElementById('Success').innerHTML = "You have successfully registered"
  }
}