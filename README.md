# IMPLEMENTING RSA ENCRYPTION AND DECRYPTION USING JAVASCRIPT
#### Video Demo : https://www.youtube.com/watch?v=ZVCMNeXisWg
#### Description : 

This project aims to introduce you about the RSA algorithm, working, advantages and disadvantages. 

When someone opens this site, it will ask for his name and that is stored in session variables, so even if the same user refreshes the page the name is still there. If the user closes the page and re-opens it or clears all session variables the name will be prompted again. 

Once name is given, it will greet you and welcomes to the page. In the home page brief introduction about the RSA algorithm is given. It also discusses about the working of the algorithm. For this algorithm we need to select three values which are two prime numbers and a public exponent which are p q and e respectively. 

In this project p is selected as 73 and q is selected as 79 and e to be 7. Based on these 3 numbers we need to calculate 3 more variables which are n = p*q, phi(n) = (p-1)*(q-1) and d which is the private exponent. To calculate d we use wolfram alpha site because it is computationally difficult to calculate it. The formula for calculating d is e^(-1) mod phi(n). 

Once we have all these numbers we are ready to encrypt and decrypt the data. In this home page at the bottom there is a prompt to enter a secret message. If an user enters a message he wants to encrypt there, it will load you to other page where you can see the detailed algorithm implementation on your secret message. First the secret message is converted into ASCII numbers. 

Now each of these numbers are converted into cipher numbers by using the encryption formula given in home page. Once there are converted, they are converted into text which gives us the encrypted message. Now this message can be shared to the owner who already has the private key. When the person having private key gets this data, we can perform decryption operation of this data by using the formula given in the page 1. 

That operation is also done for the encrypted numbers and given the output. This output is decrypted ASCII numbers and it is coverted to text form. All this will be in output.html page and when we come back even though the input page refreshes it won't ask you for name. You can enter any other message and see it's encrypted version. This is my cs50 project.


#### How to Launch the project :

1. Download the project file as zip.
2. Open the index.html file.
3. It prompts for a name. Please give your name.
4. When you click enter, it goes to home page.
5. You can read about the RSA algorithm.
6. To launch the live demo please enter a secret message and click Enter.
7. To encrypt more messages click back and give the new secret message.
