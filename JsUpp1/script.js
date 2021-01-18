$(document).ready(function() {

    
    $("#flip").click(function() {
        $("#panel").slideToggle("slow");
    });


    


    $("#email").keyup(function(){
        let email = $("#email").val();
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test(email)) {
            document.getElementById('button').disabled = true
          

          $("#email-error").text(email+" is not a valid email");
          email.focus;
          


       } else {
           $("#email-error").text("");
           document.getElementById('button').disabled = false
       }
    });

})

let users = [];
console.log(users)




const addUser = (e) => {
    e.preventDefault(); 

    let user = {
        id: Date.now(),
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        adress: document.getElementById('adress').value,
        city: document.getElementById('city').value,
        zipCode: document.getElementById('zipCode').value,
        email: document.getElementById('email').value,
    }

    users.push(user);

   
    document.forms[0].reset(); 
    document.querySelector('form').reset();


    
    console.warn('added' , {users} );

    
    
    let flip = document.querySelector('#flip');
    flip.textContent = `${user.firstName } ` + `${ user.lastName}`;


    
    let userId = document.querySelector('#userId')
    userId.textContent = user.id;
    let userFirstName = document.querySelector('#userFirstName')
    userFirstName.textContent = user.firstName;
    let userLastName = document.querySelector('#userLastName')
    userLastName.textContent = user.lastName;
    let userEmail = document.querySelector('#userEmail')
    userEmail.textContent = user.email;
    let userAdress = document.querySelector('#userAdress')
    userAdress.textContent = user.adress;
    let userCity = document.querySelector('#userCity')
    userCity.textContent = user.city;
    let userZipCode = document.querySelector('#userZipCode')
    userZipCode.textContent = user.zipCode;
}




document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('button').addEventListener('click', addUser);
  });






let inputs = document.getElementsByTagName('input')

for (let input of inputs) {
    input.addEventListener('keyup', (e) => {
        if(e.target.value.length < 2) {
            document.getElementById(`${e.target.id}-error`).innerText = 'Not enough characters'
            document.getElementById('button').disabled = true
            }
        else {
        document.getElementById(`${e.target.id}-error`).innerText = ''
        document.getElementById('button').disabled = false
        }
    })
}


    


    document.getElementById('zipCode').addEventListener('keyup', (e) => {
    if(e.target.value.length !== 5) {
        document.getElementById(`${e.target.id}-error`).innerText = 'Enter a valid Zip Code'
        document.getElementById('button').disabled = true
    }
    else {
        document.getElementById(`${e.target.id}-error`).innerText = ''
        document.getElementById('button').disabled = false
    }
    
})