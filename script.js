// 1 Задание

function date(){
    var year = Number(prompt("Enter year:"))
    var month = Number(prompt("Enter month from 0 to 11:"))
    var day = Number(prompt("Enter day from 1 to 31:"))
    var dateInput = new Date(year, month, day );
    console.log(dateInput);
    var now = new Date();
    var differenceInTime = now.getTime() - dateInput.getTime();
    var hours = Math.floor(differenceInTime / (3600000)); // 3600000 это 1000(секунда)*60(минута)*60(час)
    console.log(hours + " hours have passed since the entered date")
    if(hours < 0){
        console.clear();
        console.warn("You have entered a date from the future");
    }
    if(month > 11){
        console.warn("You have entered the wrong date");
    }
    if(day > 31){
        console.warn("You have entered the wrong date");
    }
}
date();

// 2 Задание

function time(){
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    console.log(hours + ":" + minutes + ":" + seconds);
}
setInterval(time, 1000);