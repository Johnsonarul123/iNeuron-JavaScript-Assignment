// 18. Write a program which tells the number of days in a month, now consider leap year.

let d = new Date();

console.log(d);

let month ="January"

const days =() =>{
    if(  month == "January" || month == "march" ||month == "may" ||month == "july" ||month == "August"  ||month == "December" )
    return 31 ;

    else if(month == "Febuary")
    return 29;

    else if(month == "April" || month == "June" ||month == "September" ||month == "july" ||month == "November")
    return 30;

    else
    console.log("Enter a correct name ")
}

let result=days();
console.log(result);