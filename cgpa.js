function clickfun(){
    var a = document.getElementById("sem").value;
    document.getElementById("kk").innerHTML=a;

    
    if(a==0){
        alert("PLEASE ENTER NUMBER ");
    }
    else if(a<=8){
    alert("You have choose No : "+ a);
    var queryString = "?sem=" + a ;


    window.open("wel1.html" + queryString);
    document.getElementById("kk").innerHTML="";
    
    }
    else{
        
        alert("PLEASE ENTER NUMBER OF SEMESTER UPTO 8");
        document.getElementById("sem").value ="";
        document.getElementById("kk").innerHTML="";

    }
    

}