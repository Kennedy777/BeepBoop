Project Name
Beep Boop: Epicodus Week 3 Independent Project

by Marguerite Kennedy
April 5, 2019

About
Github Page:

Technologies used:
HTML, CSS, Javascript, Bootstrap, jQuery

Installation

Open: https://kennedy777.github.io/BeepBoop/, or 
Clone from: https://github.com/Kennedy777/beepboop, open index.html in any browser

Enter a number to get a message from the computer based on the following:

Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."

These exceptions are written from least to most important. So, for example:

The number 13 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."
The number 21 should be replaced with "Boop".
The number 32 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."
A user should be able to enter a new number and see new results over and over again.

My strategy for the "business logic":

- First, take the user-entered value and return a list of numbers from 1 to that number,
using an (var i=0; i<=[value]; i++);
- Put results in an array
- Loop through array to find each number in array.
- IF that number contains 3, replace with "I'm sorry, Dave"
- If it contains 2 ==> "Boop!", if 1 ==> "Beep!",
- if there's no 1, 2, or 3 in the number, then generate the number with no replacement.
- Return the numbers (with or without substitutions) to the user.

MIT licence, &copy;Marguerite Kennedy 2019