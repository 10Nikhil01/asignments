function validation(){
    let secondInput = document.getElementById("second").value;
    let thirdInput = document.getElementById('third').value;
    let forthInput = document.getElementById('forth').value;
    let fifthInput = document.getElementById('fifth').value;
    let sixthInput = document.getElementById('sixth').value;
    let seventhInput = document.getElementById('seventh').value;
    let error = false;


    if(secondInput.length > 5 &&
       !secondInput.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]+/) &&
       secondInput.charAt(0) !== ("+","-","_") 
        ){
        document.getElementById("second-invalid").style.display = "none";
    }
    else{
        document.getElementById("second-invalid").style.display = "block";
        error=true;
    }


    if(thirdInput.length > 5 &&
        !thirdInput.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]+/) &&
        thirdInput.charAt(0) !== ("+","-","_")){
        document.getElementById("third-invalid").style.display = "none";
    }
    else{
        document.getElementById("third-invalid").style.display = "block"
        error=true;
    }


    if(forthInput.length > 5 &&
        !forthInput.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]+/) &&
        forthInput.charAt(0) !== ("+","-","_")){
        document.getElementById("forth-invalid").style.display = "none";
    }
    else{
        document.getElementById("forth-invalid").style.display = "block";
        error=true;
    }


    if(fifthInput.length > 5 &&
        !fifthInput.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]+/) &&
        fifthInput.charAt(0) !== ("+","-","_")){
        document.getElementById("fifth-invalid").style.display = "none";
    }
    else{
        document.getElementById("fifth-invalid").style.display = "block";
        error=true;
    }


    if(sixthInput.length > 5 &&
        !sixthInput.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]+/) &&
        sixthInput.charAt(0) !== ("+","-","_")){
        document.getElementById("sixth-invalid").style.display = "none";
    }
    else{
        document.getElementById("sixth-invalid").style.display = "block";
        error=true;
    }


    if(seventhInput.length > 5 &&
        !seventhInput.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]+/) &&
        seventhInput.charAt(0) !== ("+","-","_")){
        document.getElementById("seventh-invalid").style.display = "none";
    }
    else{
        document.getElementById("seventh-invalid").style.display = "block";
        error=true;
    }

    
  if (!error) {
    alert("Your details have been saved successfully!");
    document.getElementById("second").value = "";
    document.getElementById("third").value = "";
    document.getElementById("forth").value = "";
    document.getElementById("fifth").value = "";
    document.getElementById("sixth").value = "";
    document.getElementById("seventh").value = "";
  }
}