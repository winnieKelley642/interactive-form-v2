'use strict'
//global variables:
const nameField = document.querySelector('#name');
const emailField = document.querySelector('#mail');
const otherJobRole = document.querySelector('#other-title');
const jobRoleSelection = document.querySelector('#title');
const listOfColors = document.querySelector('#color');
const design = document.querySelector('#design');

//Add placeholders
nameField.placeholder = 'Please enter your name';
emailField.placeholder = 'Please enter a valid email';

//1. Set focus on first text field when the page is loads.
    //1a. Should be focused by default
nameField.focus();
nameField.style.backgroundColor = 'limegreen';

/**
 * Job Role Selection
 * Note: You'll need to add the "Other" job role input directly into the HTML and hide it initially
 * with JS in order to get this feature to work when JS is disabled, which is a requirement below.
 */
//Do not display the other text field
otherJobRole.style.display = 'none';
console.log(jobRoleSelection);

//2. In the Job Role drop down menu, when "Other" is selected
//check for what the user selected
for(let i = 0; i < jobRoleSelection.length; i++){
    //add event listener to change of dropdown selection
    jobRoleSelection.addEventListener('change', (e) => {
        console.log(`user's selction of job role is ${jobRoleSelection.value}`);
        if(e.target.value === 'other'){
            //2a. Display text field
            console.log(`in other job role display loop`);
            otherJobRole.style.display = 'block';
        } else{
            //hide the text field if not 'other'
            otherJobRole.style.display = 'none';
        }
    });
}
    //2b. set text field id = "other-title" <-- done in html
    //2c. set placeholder to "Your Job Role" <-- done in html

/** 
 * T-Shirt Info
 */
//3. Hide colour options in the "Color" drop down list until theme is selected from "Design menu"
    //3b. set "Color" field to read "Please select a T-shirt theme".
//create 'Please select a T-shirt theme' option first:
//create "Please select a T-shirt theme" option first:
const selectThemeFirstElement = document.createElement('option');
selectThemeFirstElement.setAttribute('value','selectThemeFirst');
selectThemeFirstElement.innerHTML = 'Please select a T-shirt theme';
listOfColors.appendChild(selectThemeFirstElement);

//set selectThemeFirstElement as what to display and hide the rest
listOfColors[6].selected = true;
listOfColors[0].hidden = true;
listOfColors[1].hidden = true;
listOfColors[2].hidden = true;
listOfColors[3].hidden = true;
listOfColors[4].hidden = true;
listOfColors[5].hidden = true;
listOfColors[6].hidden = false;

//4. After theme is selected only display colour options that match the design selected in the "Design" menu.
    //4a. Theme - JS Puns = "Cornflower Blue", "Dark Slate Grey" and "Gold"
    //4b. Theme - I ♥ JS = "Tomato", "Steel Blue" and "Dim Grey"
    //4c. Update theme and colours as theme is selected.
//add event listener to design drop down menu
design.addEventListener('change', (e) =>{
    console.log(`design chosen is: ${design.value}`);
    console.log(e.target.value);
    //if user selects selectTheme
    if(e.target.value === 'Select Theme'){
        listOfColors[6].selected = true;
        listOfColors[0].hidden = true;
        listOfColors[1].hidden = true;
        listOfColors[2].hidden = true;
        listOfColors[3].hidden = true;
        listOfColors[4].hidden = true;
        listOfColors[5].hidden = true;
        listOfColors[6].hidden = false;
    }
    //if user selects js puns
    if(e.target.value === 'js puns'){
        listOfColors[0].selected = true;
        listOfColors[0].hidden = false;
        listOfColors[1].hidden = false;
        listOfColors[2].hidden = false;
        listOfColors[3].hidden = true;
        listOfColors[4].hidden = true;
        listOfColors[5].hidden = true;
        listOfColors[6].hidden = true;
    }
    //if user selects heart js
    if(e.target.value === 'heart js'){
        listOfColors[3].selected = true;
        listOfColors[0].hidden = true;
        listOfColors[1].hidden = true;
        listOfColors[2].hidden = true;
        listOfColors[3].hidden = false;
        listOfColors[4].hidden = false;
        listOfColors[5].hidden = false;
        listOfColors[6].hidden = true;
    }
});
/**
 * Register for Activities section
 */
//5. Don't allow user to select a workshop that is at the same day and time as selected
    //5a. disable checkbox and visually indicate that it is not available. 
    //5b. when user uncheck a checkbox, make sure disabled checkboxes are enabled.
//6. When user clicks on an activity, a running total should display below the list

/**
 * Payment info section
 * Display payment section based on payment option chosen in the select menu
 */
//7. Credit card option is selected by default
    //7a. Display the #credit-card div, hide "PayPal" and "Bitcoin" information.
//8. PayPal option is selected
    //8a. Display payPal and hide credit-card and bitcoin information
//9. Bitcoin option is selected
    //9a. Display bitcoin and hide credit-card and bitcoin information
//Make "Select Payment Method" not a clickable option

/**
 * Form validation 
 * NOTE: Don't rely on the built in HTML5 validation by adding the required attribute to your DOM
 * elements. You need to actually create your own custom validation checks and error messages.
 */
//10. Prevent user from submitting the form if:
    //10a. name field is blank
    //10b. email fied must be valid formatted email
    //10c. at least one checkbox in activities section 
    //10d. if payment method is credit card:
        //10d i. credit card number (number between 13 - 16 digits)
        //10d ii. zip code (5 digit)
        //10d iii. three number CVV (3 digits)

/**
 * Form Validation messages
 * Provide indiation when there's a falidation error, border color turns red, red text message 
 * appears near the field
 * 
 * Error messages or indicatons should NOT BE VISIBLE by default. only upon submission or after user 
 * interaction.
 * 
 * Do not use alerts
*/
//11. These needs to have obvious error messages:
    //11a. Name field
    //11b. Email field
    //11c. Register for activities (at least 1 selected)
    //11d. Credit card number
    //11e. zip code
    //11f. CVV code

    //if user is submiting empty form each of the above items should have error indication / message.

/**
 * Should work without js
 * croos browswer check
 * allowed to change css
 */

 /** Now this should meet expectations */
