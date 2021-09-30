function clickfun(){
    var a = document.getElementById("sem").value;
    document.getElementById("kk").innerHTML=a;

    
    if(a==0){
        alert("PLEASE ENTER NUMBER ");
    }
    else if(a<=9){
    alert("You have choose No : "+ a);
    var queryString = "?sem=" + a ;


    window.open("wel2.html" + queryString);
    document.getElementById("kk").innerHTML="";
    
    }
    else{
        
        alert("PLEASE ENTER NUMBER OF SEMESTER UPTO 9");
        document.getElementById("sem").value ="";
        document.getElementById("kk").innerHTML="";

    }
    

}
/*function handleSubmit () {
    const name = document.getElementById('name').value;
    const usn = document.getElementById('usn').value;

    // to set into local storage
    /* localStorage.setItem("NAME", name);
    localStorage.setItem("SURNAME", surname); */
    
   /* sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("USN", usn);

    return;
}*/