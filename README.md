Project Name
The HALSplainer: Epicodus Week 3 Independent Project

by Marguerite Kennedy
April 5, 2019

Technologies used:
HTML, CSS, Javascript, Bootstrap, jQuery

Installation

Open: https://kennedy777.github.io/BeepBoop/, or 
Clone from: https://github.com/Kennedy777/beepboop, open index.html in any browser

Enter a number to get a message from the computer to "explain" the meaning of the number in his mind.
 
Starting at 0, HAL will give a list of the numbers up to and including the user's number. 

Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."

These exceptions are written from least to most important.
My strategy:

- First, take the user-entered value and loop up to the value of the entered number, from zero. 

- Loop through array using "to String" to analyze      each number at a given index. 
- If that number contains 3, replace with "I'm sorry,  Dave, I can't do that."
- if it contains 2 ==> "Boop!", 
  if 1 ==> "Beep!",
- if there's no 1, 2, or 3 in the number, then     
  display the number at that index with no replacement.
- Return the "translated" numbers to user. 

MIT licence, &copy;Marguerite Kennedy 2019