
var person = sessionStorage.getItem("user_name");
if (person == null) {
person = prompt("Please Enter Your Name");
}
sessionStorage.setItem("user_name", person);
if (person != null) {
  document.write("<h1> Hello " + person + ", This is my CS50 Project !!! </h1>");
}
function key() {
  var a = document.getElementById('secretMess').value;
  sessionStorage.setItem("secretmessage",a);
  self.location="output.html";
}
