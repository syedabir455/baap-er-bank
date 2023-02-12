//step-1: add event handler with the submit button

document.getElementById('btn-submit').addEventListener('click',function(){
   
    //step-2: get the email address inside the email input field
    //always remember to use .value to get text from input field
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    //step-3 : get the password
    //3.A : get id in the html element
    //3.B : get the id
    //3.C : get the value from the element
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    console.log(email,password)
    //Danger : Do not verify email password on the client side
    //step-4 : Verify email & password and check whether valid user or not
    if(email == 'syedabir455@gmail.com' && password == 'syedabir'){
       window.location.href='bank.html';
    }
    else{
        alert('invalid user')
    }

})
