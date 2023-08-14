/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var day = 0;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let monday = document.getElementById("monday"); function click() { monday.style.background = '#E5AF42'; day = day + 1;} monday.addEventListener("click", click);
let tuesday = document.getElementById("tuesday"); function click1() { tuesday.style.background = '#E5AF42'; day = day + 1;} tuesday.addEventListener("click", click1);
let wednesday = document.getElementById("wednesday"); function click2() { wednesday.style.background = '#E5AF42'; day = day + 1;} wednesday.addEventListener("click", click2);
let thursday = document.getElementById("thursday"); function click3() { thursday.style.background = '#E5AF42'; day = day + 1;} thursday.addEventListener("click", click3);
let friday = document.getElementById("friday"); function click4() { friday.style.background = '#E5AF42'; day = day + 1;} friday.addEventListener("click", click4);


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.


let clear = document.getElementById("clear-button"); 

function click5() { 
    
    monday.style = 'blue-hover';
    tuesday.style = 'blue-hover';
    wednesday.style = 'blue-hover';
    thursday.style = 'blue-hover';
    friday.style = 'blue-hover';

    day = 0;

    calculatedcost.innerHTML = 0;

}


clear.addEventListener("click", click5);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


let calculatedcost = document.getElementById("calculated-cost");

let full = document.getElementById("full");

let half = document.getElementById("half");


function click6() { full.style.background = '#E5AF42'; half.style = 'blue-hover';} full.addEventListener("click", click6);
function click7() { half.style.background = '#E5AF42'; full.style = 'blue-hover';} half.addEventListener("click", click7);



function halfDayRate() {

    var cost_per_day;

    
    if (full.style.background == 'rgb(229, 175, 66)'){cost_per_day = day * 35;}

    if (half.style.background == 'rgb(229, 175, 66)'){cost_per_day = day * 20;}

    calculatedcost.innerHTML = cost_per_day;
}

//modelButton.addEventListener("click", halfDayRate);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


//modelButton.addEventListener("click", changeModel);


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


monday.addEventListener('click', halfDayRate);
tuesday.addEventListener('click', halfDayRate);
wednesday.addEventListener('click', halfDayRate);
thursday.addEventListener('click', halfDayRate);
friday.addEventListener('click', halfDayRate);
full.addEventListener('click', halfDayRate);
half.addEventListener('click', halfDayRate);