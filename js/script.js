'use strict'
//global variables:
const userInputName = document.querySelector('#name');
const userInputEmail = document.querySelector('#mail');
const otherJobRole = document.querySelector('#other-title');
const jobRoleSelection = document.querySelector('#title');
const listOfColors = document.querySelector('#color');
const design = document.querySelector('#design');
const activityList = document.querySelector('.activities');
const activities = document.querySelectorAll('.activities input');
const creditCardDiv = document.querySelector('#credit-card');
const payPalDiv = document.querySelector('#paypal');
const bitcoinDiv = document.querySelector('#bitcoin');
const paymentOption = document.querySelector('#payment');
const submitButton = document.querySelector('button');
const form = document.querySelector('form');
let total = 0;
const shirtSelectionDiv = document.querySelector('.shirt-box');

const creditCardNumber = document.querySelector('#cc-num');
const zip = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');

//Add placeholders:
userInputName.placeholder = 'Please enter your name here';
userInputEmail.placeholder = 'Please enter a valid emal';
creditCardNumber.placeholder = '3-16 digits card #';
zip.placeholder = '5 digits';
cvv.placeholder = '3 digits';

//1. Set focus on first text field when the page is loads.
    //1a. Should be focused by default
userInputName.focus();
// userInputName.style.backgroundColor = 'limegreen';

/**
 * Job Role Selection
 * Note: You'll need to add the "Other" job role input directly into the HTML and hide it initially
 * with JS in order to get this feature to work when JS is disabled, which is a requirement below.
 */
//Do not display the other text field
otherJobRole.style.display = 'none';

//2. In the Job Role drop down menu, when "Other" is selected
//check for what the user selected
for(let i = 0; i < jobRoleSelection.length; i++){
    //add event listener to change of dropdown selection
    jobRoleSelection.addEventListener('change', (e) => {
        if(e.target.value === 'other'){
            //2a. Display text field
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
//create "Please select a T-shirt theme" option first:

/** Meets secpection:
const selectThemeFirstElement = document.createElement('option');
selectThemeFirstElement.setAttribute('value','selectThemeFirst');
selectThemeFirstElement.innerHTML = 'Please select a T-shirt theme';
listOfColors.appendChild(selectThemeFirstElement);
*/

/**exceed expectation
hide colour drop down list:
*/
const hideColorList = document.querySelector('#color');
hideColorList.hidden = true;
hideColorList.parentElement.hidden = true;

//set selectThemeFirstElement as what to display and hide the rest
// listOfColors[6].selected = true;
listOfColors[0].hidden = true;
listOfColors[1].hidden = true;
listOfColors[2].hidden = true;
listOfColors[3].hidden = true;
listOfColors[4].hidden = true;
listOfColors[5].hidden = true;
// listOfColors[6].hidden = false;

//4. After theme is selected only display colour options that match the design selected in the "Design" menu.
    //4a. Theme - JS Puns = "Cornflower Blue", "Dark Slate Grey" and "Gold"
    //4b. Theme - I ♥ JS = "Tomato", "Steel Blue" and "Dim Grey"
    //4c. Update theme and colours as theme is selected.
//add event listener to design drop down menu
design.addEventListener('change', (e) =>{
    //if user selects selectTheme
    if(e.target.value === 'Select Theme'){
        hideColorList.hidden = true;
        hideColorList.parentElement.hidden = true;
        // listOfColors[6].selected = true;
        // listOfColors[0].hidden = true;
        // listOfColors[1].hidden = true;
        // listOfColors[2].hidden = true;
        // listOfColors[3].hidden = true;
        // listOfColors[4].hidden = true;
        // listOfColors[5].hidden = true;
        // listOfColors[6].hidden = false;
    }
    //if user selects js puns
    if(e.target.value === 'js puns'){
        hideColorList.hidden = false;
        hideColorList.parentElement.hidden = false;
        listOfColors[0].selected = true;
        listOfColors[0].hidden = false;
        listOfColors[1].hidden = false;
        listOfColors[2].hidden = false;
        listOfColors[3].hidden = true;
        listOfColors[4].hidden = true;
        listOfColors[5].hidden = true;
        // listOfColors[6].hidden = true;
    }
    //if user selects heart js
    if(e.target.value === 'heart js'){
        hideColorList.hidden = false;
        hideColorList.parentElement.hidden = false;
        listOfColors[3].selected = true;
        listOfColors[0].hidden = true;
        listOfColors[1].hidden = true;
        listOfColors[2].hidden = true;
        listOfColors[3].hidden = false;
        listOfColors[4].hidden = false;
        listOfColors[5].hidden = false;
        // listOfColors[6].hidden = true;
    }
});
/**
 * Register for Activities section
 */
//5. Don't allow user to select a workshop that is at the same day and time as selected
    //5a. disable checkbox and visually indicate that it is not available. 
    //5b. when user uncheck a checkbox, make sure disabled checkboxes are enabled.
//6. When user clicks on an activity, a running total should display below the list
//set total to 0 to start, set this up before evenListener so that it can be called in the event listener.
// let total = 0;
const totalElement = document.createElement('p');
totalElement.textContent = (`Total Cost: $${total}`);
activityList.appendChild(totalElement);

//add event listener to checkbox:
activityList.addEventListener('change', (e)=>{
    let checked = e.target;

    let selectedDayTime = checked.getAttribute('data-day-and-time');

    //dissable and enabling the right activities
    for(let i = 0; i < activities.length; i++){
        
        let activityDayTime = activities[i].getAttribute('data-day-and-time');

        if(selectedDayTime === activityDayTime && checked !== activities[i]){
            if(checked.checked){
                console.log(`same day and time`);
                activities[i].disabled = true;
            }else{
                activities[i].disabled = false;
            }
        }
    }
    //calculate cost
    let activityCost = parseInt(checked.getAttribute('data-cost'));
    if(checked.checked){
        total += activityCost;
        totalElement.textContent = (`Total Cost: $${total}`);
    }else{
        total -= activityCost;
        totalElement.textContent = (`Total Cost: $${total}`);
    }
});

/**
 * Payment info section
 * Display payment section based on payment option chosen in the select menu
 */
//7. Credit card option is selected by default
creditCardDiv.hidden = false;
//7a. Display the #credit-card div, hide "PayPal" and "Bitcoin" information.
payPalDiv.hidden = true;
bitcoinDiv.hidden = true;

//Make "Select Payment Method" not a clickable option
const selectMethodOption = paymentOption[0];
selectMethodOption.disabled = true;
const creditCardOption = paymentOption[1];
creditCardOption.selected = true;

//add event listener to payement option
paymentOption.addEventListener('change', (e)=>{
    //8. PayPal option is selected
    if(paymentOption.value === 'paypal'){
        //8a. Display payPal and hide credit-card and bitcoin information
        creditCardDiv.hidden = true;
        payPalDiv.hidden = false;
        bitcoinDiv.hidden = true;
    }
    //9. Bitcoin option is selected
    if(paymentOption.value === 'bitcoin'){
        //9a. Display bitcoin and hide credit-card and bitcoin information
        creditCardDiv.hidden = true;
        payPalDiv.hidden = true;
        bitcoinDiv.hidden = false;
    } 
    if(paymentOption.value === 'credit card'){
        //set credit card div as default
        creditCardDiv.hidden = false;
        payPalDiv.hidden = true;
        bitcoinDiv.hidden = true;
    }
});

/**
 * Form validation 
 * NOTE: Don't rely on the built in HTML5 validation by adding the required attribute to your DOM
 * elements. You need to actually create your own custom validation checks and error messages.
 */

//10. Prevent user from submitting the form if:

//validations:
//name:
const validateName = (userInputName) =>{
    const validUserInputName = (/^[A-Za-z]+[\s]?[A-Za-z-]+$/).test(userInputName.value);
    console.log(`name is valid: ${validUserInputName}`);
    return validUserInputName;
};

// email:
const validateEmail = (userInputEmail) =>{
    //check to see if email is valid
    console.log(`user input for email is ${userInputEmail.value}`);
    //any letter or number, @, any number or letters, only one ., and then either 2 or 3 letters (com / net / hk/ tw)
    const vaildUserInputEmail = (/^[A-za-z0-9]+@+[A-za-z0-9]+\.[A-za-z]{2,3}$/).test(userInputEmail.value);
    console.log(`email is valid: ${vaildUserInputEmail}`);
    return vaildUserInputEmail;
}

//credit card number:
const validateCreditCardNumber = (creditCardNumber) =>{
    const validCreditCardNumber = (/^[0-9]{13,16}$/).test(creditCardNumber.value);
    console.log(`user's input has ${validCreditCardNumber.length} numbers`);
    return validCreditCardNumber;
}

//zip code:
const validateZipCode = (zip) =>{
    const validZipCode = (/^[0-9]{5}$/).test(zip.value);
    console.log(`user input for zip code is: ${zip.value}`);
    return validZipCode;
}

//cvv:
const validateCvv = (cvv) =>{
    const validCvv = (/^[0-9]{3}$/).test(cvv.value);
    console.log(`user input for cvv is: ${cvv.value}`);
    return validCvv
}

//other job role 
const validateOtherJobRole = (otherJobRole) => {
    const validOtherJonRole = (/^\d\w\s$/).test(otherJobRole.value);
    console.log(`user input for other job role is $(otherJobRole.value)`);
    return validateOtherJobRole;
}

//keyup error messaging
userInputName.addEventListener('keyup', (e) =>{
    const userInput = e.target;
    console.log(`user input is: ${userInput.value}`);
    const nameMessageDiv = document.createElement('div');
    userInputName.appendChild(nameMessageDiv);
    if(userInputName.value === ''){
        nameMessageDiv.textContent = (`Please enter your name`);
    } else{
        nameMessageDiv.textContent = (`Hi, ${userInput.value}`);
    }
});
//add event listener to form submit button
form.addEventListener('submit', (e) =>{
    //10a. name field is blank or does not validate
    console.log(`user input for name is: ${userInputName.value}`);
    if(userInputName.value === '' || validateName(userInputName) === false){
        userInputName.style.borderStyle = 'none none none solid';
        userInputName.style.borderWidth = 'thick 20px';
        userInputName.style.borderColor = 'red';
        //prevent form submittting
        e.preventDefault();
    }else{
        userInputName.style.borderStyle = 'none none none solid';
        userInputName.style.borderWidth = 'thick 20px';
        userInputName.style.borderColor = 'green';
    }

    //10b. email fied must be valid formatted email
    console.log(`user input for email is: ${userInputEmail.value}`);
    if(userInputEmail.value === '' || validateEmail(userInputEmail) === false){
        userInputEmail.style.borderStyle = 'none none none solid';
        userInputEmail.style.borderWidth = 'thick 20px';
        userInputEmail.style.borderColor = 'red';
        //prevent from submitting
        e.preventDefault();
    }else{
        userInputEmail.style.borderStyle = 'none none none solid';
        userInputEmail.style.borderWidth = 'thick 20px';
        userInputEmail.style.borderColor = 'green';
    }

    //10c. at least one checkbox in activities section 
    if(total === 0){
        console.log(`no activities selected`);
        activityList.style.borderStyle = 'none none none solid';
        activityList.style.borderWidth = 'thick 20px';
        activityList.style.borderColor = 'red';
        //prevent form submittting
        e.preventDefault();
    }else{
        console.log(`activites is valid`);
        activityList.style.borderStyle = 'none none none solid';
        activityList.style.borderWidth = 'thick 20px';
        activityList.style.borderColor = 'green';
    }

    //10d. if payment method is credit card:
    if(paymentOption.value === 'credit card'){
        console.log(`validating credit card...`);
        //10d i. credit card number (number between 13 - 16 digits)
        if(creditCardNumber.value === '' || validateCreditCardNumber(creditCardNumber) === false){
            creditCardNumber.style.borderStyle = 'none none none solid';
            creditCardNumber.style.borderWidth = 'thick 20px';
            creditCardNumber.style.borderColor = 'red';
            //prevent form submittting
            e.preventDefault();
        }else{
            creditCardNumber.style.borderStyle = 'none none none solid';
            creditCardNumber.style.borderWidth = 'thick 20px';
            creditCardNumber.style.borderColor = 'green';
            //prevent from submitting
            e.preventDefault();
        }

        //10d ii. zip code (5 digit)
        if(zip.value === '' || validateZipCode(zip) === false){
            zip.style.borderStyle = 'none none none solid';
            zip.style.borderWidth = 'thick 20px';
            zip.style.borderColor = 'red';
            //prevent form submittting
            e.preventDefault();
        }else{
            zip.style.borderStyle = 'none none none solid';
            zip.style.borderWidth = 'thick 20px';
            zip.style.borderColor = 'green';

        }

        //10d iii. three number CVV (3 digits)
        if(cvv.length === '' || validateCvv(cvv) === false){
            cvv.style.borderStyle = 'none none none solid';
            cvv.style.borderWidth = 'thick 20px';
            cvv.style.borderColor = 'red';
            //prevent form submittting
            e.preventDefault();
        }else{
            cvv.style.borderStyle = 'none none none solid';
            cvv.style.borderWidth = 'thick 20px';
            cvv.style.borderColor = 'green';
        }
    }
    //if other, must type something in input
    if(otherJobRole.value === '' || validateOtherJobRole(otherJobRole) === false){
        otherJobRole.style.borderStyle = 'none none none solid';
        otherJobRole.style.borderWidth = 'thick 20px';
        otherJobRole.style.borderColor = 'red';
        //prevent form submittting
        e.preventDefault();
    }else{
        otherJobRole.style.borderStyle = 'none none none solid';
        otherJobRole.style.borderWidth = 'thick 20px';
        otherJobRole.style.borderColor = 'green';
    }
    
    //if user did not select shirt
    if(design.value === 'Select Theme'){
        shirtSelectionDiv.style.backgroundColor = 'red';
        e.preventDefault();
    }else{
        shirtSelectionDiv.style.backgroundColor = 'green';
    }
});

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