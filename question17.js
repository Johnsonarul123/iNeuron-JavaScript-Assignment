// 17. Write a program which tells the number of days in a month.

const days = prompt("Check number of days in a month and first word should be uppercase");

if(days == "January" || days == "March"||days == "May"||days == "July"||days == "August"||days == "Octor"||days == "December" ){
    console.log("The number of days in the month is 31");
}
else if(days == "February"){
    console.log("The number of days in the month is 28 if not leap year else 29 days in a leap year");
}
else if(days == "April" || days == "June"||days == "September"||days == "November"){
    console.log("The number of days in the month is 30");
}
else{
    console.log("Please enter a valid month");
}