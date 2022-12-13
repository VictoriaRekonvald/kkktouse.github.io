var computerwinner=Number(0);
var userwinner=Number(0);
var name1=document.getElementById("username");
var name2=prompt("Insert user name:","");
name1.innerHTML=name2;
function main(){
    var userwinner1=document.getElementById("userwinner");
    var computerwinner1=document.getElementById("computerwinner");

    var uservalue1=document.getElementById("uservalue");
    var uservalue=Number(0);

    var computervalue1=document.getElementById("computervalue");
    var computervalue=Number(0);

    if(userwinner<4||computerwinner<4)
    uservalue=Math.round(Math.random()*(10-0)+10);
    uservalue1.innerText=uservalue;
    computervalue=Math.round(Math.random()*(10-0)+10);
    computervalue1.innerText=computervalue;

    if(uservalue>computervalue){userwinner=userwinner+1;userwinner1.innerText=userwinner;}
    else if(computervalue>uservalue){computerwinner=computerwinner+1;computerwinner1.innerText=computerwinner;}
    if(userwinner==3||computerwinner==3){
        if(computerwinner>userwinner){alert("Computer win")}
        else if(computerwinner<userwinner){alert(name2+" Win")}
    }
}
