// Initialization
var secret_message = sessionStorage.getItem("secretmessage");
var encrypted_message="";
var decrypted_message="";
const numbers = [];
const num_encyp = [];
const let_encyp = [];
const num_decryp = [];
const let_decryp = [];

function key2() {
  self.location = "index.html";
}

function remainder(m,e,mod)  {
  var prod = 1;
  for (let i =1; i <= e; i++)  {
    prod = (prod*m) % mod;
  }
  return prod;
}
// Convert each letter into ASCII Equivalent numbers
for (let i = 0; i < secret_message.length; i++)  {
    letter_num = secret_message.charCodeAt(i);
    numbers.push(letter_num);
}
// Select two prime numbers
var p = 73;
var q = 79;
// Calculate the required variables
var n = p*q;
var phi_n = (p-1)*(q-1);
var e = 7;
var d = 2407;

for (let i = 0 ; i < secret_message.length; i++)   {
  var num = numbers[i];
  var num_e = remainder(num,e,n);
  num_encyp.push(num_e);
  let_encyp.push(String.fromCharCode(num_e));
}

for (let i = 0; i < secret_message.length; i++)   {
  var num = num_encyp[i];
  var num_d = remainder(num,d,n);
  num_decryp.push(num_d);
  let_decryp.push(String.fromCharCode(num_d));
}

for (let i = 0; i < secret_message.length; i++)   {
    var let = let_encyp[i];
    encrypted_message+=let;
}

for (let i = 0; i < secret_message.length; i++)   {
    var let = let_decryp[i];
    decrypted_message+=let;
}
document.write("<h1> Entered Message \t : " + secret_message + " </h1>");

document.write("<h1> ASCII Format \t : " + numbers + " </h1>");

document.write("<h1> p, q, e, d values \t : " + p + " , " + q + " , "+ e + " , " +d + " </h1>");


document.write("<h1> Your Public Key \t : ("+ e+" , " + n + ") </h1>");

document.write("<h1> Your Private Key (don't share) \t : ("+ d+" , " + n + ") </h1>");


document.write("<h1> Encrypted numbers \t : " + num_encyp + " </h1>");

document.write("<h1> Encrypted message \t : " + encrypted_message + " </h1>");



document.write("<h1> Decrypted Numbers \t :  " + num_decryp + " </h1>");

document.write("<h1> Decrypted Message \t :  " + decrypted_message + " </h1>");

document.write("<h3> Explanation : First the secret message is converted into ASCII format, then each number is taken and Encryption is applied as (x ^ e mod n) where x is the ASCII number, (e, n) is public key. In above case e is 7 and n is 5767. IF we do this for all the numbers, encryption is done. To decrypt we need private key which is (d, n) where d in above case is 2407. To decrypt we need to do (x ^ d mod n) where x is encrypted number. </h3>");

document.write(" <h3>Here two prime numbers, e and d are fixed. To calculate them use wolfram alpha and follow the steps given in main page. </h3>");

document.write("<button  class=\"button\" onclick=\"key2()\" >Back</button>");
