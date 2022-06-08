
alert("welcome");
let guess = prompt("enter the number 1 to 9","");
number = 5
var d;
count =  5;
for(i = 1;i<count;i++)
{
if(guess == number)
{
    alert("congratulation guessing the secret number"+ " Remainning chance " +d);
    break;
}
else if(guess > number)
{
    alert("the number is greater then secret number");
    alert("you have another chance");
}
else if(guess < number)
{
    alert("the number is less then secret number");
    alert("you have another chance");
}
 guess = prompt("enter the number 1 to 9","");
  d = count - i;
}