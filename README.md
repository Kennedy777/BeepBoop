
# The HALSplainer: Epicodus Week 3 Independent Project

### A simple interactive program/game
#### by Marguerite Kennedy, April 12, 2019

## Description

"HAL," the not-so-benevolent computer overlord from a movie that at the advice of our lawyers we'll just call "Two Thousand Fun: A Copyright Infringement Odessey" asks the user to enter a number. HAL then "computersplains" the meaning of that number in a string of *seeming* nonsense that follows very specific rules. 

Starting at 0, HAL will give a list of the numbers up to and including the user's number. 
Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that."
If neither a 1,2, or 3 is in a given number, it will return the original number. 


## Specs

The above exceptions are written from *least to most important*. For example:

If a user enters "13" the result will be all numbers from 0 to 13, with the replacements above. The number 13 (last on the outputted list) will return "I'm sorry, Dave, I can't do that." Although 13 contains both a 1 and a 3, the result for a number containing 3 will be returned, because the 3 takes precedence. 


For example: user inputs a "7"
Output will be: "0,Beep!,Boop!,I'm sorry, Dave, I'm afraid I can't do that.,4,5,6,7"

My strategy:

- First, take the user-entered value and loop up to the value of the entered number, from zero. 
- Loop through array using "to String" to evaluate each number at a given index. 
- If that number contains 3, replace with "I'm sorry,  Dave, I can't do that."
- if it contains 2 ==> "Boop!", 
  if 1 ==> "Beep!",
- if there's no 1, 2, or 3 in the number, then     
  display the number at that index with no replacement.
- Return the "translated" numbers to user. 


## Setup/Installation Requirements

Open: https://kennedy777.github.io/BeepBoop/, or 
Clone from: https://github.com/Kennedy777/BeepBoop, open index.html in any browser

## Known Bugs
* No known bugs at this time.  

## Technologies Used
  * Bootstrap
  * JavaScript
  * JQuery
  * CSS
  * HTML

## Support and contact details

_Email me at reach.marguerite@gmail.com with any questions, comments, or concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2019 **_{Marguerite Kennedy}_**

###
