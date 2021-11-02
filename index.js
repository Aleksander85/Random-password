let first_c = document.getElementById("first_code");
function passwordGen(){
  let character = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789!@#$%^&*()?><';
  let password = '';
  for (i=1; i<=10; i++){
    var char = Math.floor(Math.random() * character.length + 1);
    password += character.charAt(char);
  }
  return password;
}
function code_Run() {
  first_c.innerHTML = passwordGen();
}
