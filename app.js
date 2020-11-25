function check(){
    var age = document.getElementById('age').value;
    var height = document.getElementById('height').value;
    var education = document.getElementById('edu').value;
    var nationality = document.getElementById('nat').value;
    var result = document.getElementById('result');

    // if(age >=18 && age <=25 && education === "inter" || education === "bachelor"  || education === "masters" && age >=26 && age <= 28 && height>= 5.5 && nationality == "pakistan"){
    //     result.innerHTML = "You are eligible"
    // }
    // else{
    //     result.innerHTML = "You are not eligible";
    // }

    if(nationality === "pakistan"){
        if (height >= 5.5) {
            if (age >= 18) {
             if(age <=25) {
                result.innerHTML = "You are eligible";
             }  
             else if(education === "masters"){
                 if(age <=28){
                     result.innerHTML = "You are eligible";
                 }
                 else{
                    result.innerHTML = "You are not eligible";    
                 }
             }
             else{
                 result.innerHTML = "You are not eligible";
             }
            }
        }
        else{
            result.innerHTML = "You are not eligible";
        }
    }   
    else{
        result.innerHTML = "You are not eligible";
    }
}
