- # Be My Beep-Boop?


- ## An application to return a user's inputted number and returns some wise words from Mr. Rodgers.

- ## Tech Used:
  - HTML
  - CSS
  - JavaScript

## SetUp/Installation:
 - Clone this respsitory to your local machine.
 - Navigate to the root directory.
 - Open index.html in browser.

## Known Bugs:
 - Array not returning to attached results box. 
 - Problems with CSS stylings after event submission is handled. 

 - ## License
     MIT
     Brandon Morgan,  2023

     //Business logic//

//Get the user input number from the HTML element with id "userNumber".//Initialize an empty array called resultArray to store the results./
/Loop from 0 to the user input number, inclusive:
   - Check if the current number contains the digit "3" by converting it to a string and using the includes() method.
   - If the number contains "3", push the string "Won't you be my neighbor?" to the resultArray.
   - Otherwise, check if the current number contains the digit "2".
   - If the number contains "2", push the string "Boop!" to the resultArray.
   - Otherwise, check if the current number contains the digit "1".
   - If the number contains "1", push the string "Beep" to the resultArray.
   -  Otherwise, push the current number to the resultArray.//

//Set the HTML content of the element with id "result" to the resultArray joined by ", ". //

//Set the CSS display property of the HTML element with id "resultBox" to "block".//
