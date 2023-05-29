var myname = prompt("Enter your name");
var enddate = prompt("What is your date of birth (Example: 12 Dec)" );
var party = "Party Begins in next: ";
document.getElementById("name").innerHTML = "Happy Birthday " + myname;
document.getElementById("party").innerHTML = party;
const inputs = document.querySelectorAll("input")


function clock(){
    const end = new Date(enddate + " 2023 11:59 pm " );
    const now = new Date();
    const diff = (end -now) /1000;

    if(diff<0) return 0;

   inputs[0].value = Math.floor(diff/3600/24);
   inputs[1].value = Math.floor(diff/3600)%24;
   inputs[2].value = Math.floor(diff/60)%60;
   inputs[3].value = Math.floor(diff)%60;


}

setInterval(
    ()=> {
        clock()
        }, 1000
)
    
