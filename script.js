const name = document.getElementById('name');
const password = document.getElementById("password");
const form = document.getElementById('form');
const errorElement = document.getElementById('error');


form.addEventListener('submit',(e)=>{
    
    let messages = [];


    e.preventDefault();

    let specialChar = password.value.match(/[^A-Za-z0-9\s]/g);
    let numbers = password.value.match(/[0-9]/g);
    let whiteSpace = password.value.match(/\s/)



    if(name.value === '' || name.value==null){
        messages.push("Name is required.");
    }else if(password.value.length <= 8){
        messages.push('Password must be longer than 8 characters.')
    }else if(password.value.length >=20){
        messages.push("Password must be less than 20 characters.")
    }else if(password.value === 'password'){
        messages.push("Password can not be password.");
        
    }else if(numbers == null){
        messages.push("Password must contain at least 1 number.");
    }else if(specialChar == null){
        messages.push("Password must contain at least 1 special characher.");
    }else if(whiteSpace != null){
        messages.push("Password must not contain white space.")
    }

    e.preventDefault();
    errorElement.innerText = messages.join(", ")
       

    console.log(messages)

    password.value="";
    

})