console.log("this is my project 4");

const fname = document.getElementById("name");
const Lname = document.getElementById("Lname");
const email = document.getElementById("email");
// console.log(email)
const state = document.getElementById("state");
const city = document.getElementById("city");
const phone = document.getElementById("phone");

fname.addEventListener("blur"  , ()=>{
    console.log("bured fired")
    let regex = /^[a-zA-Z]([a-zA-Z]){2,10}$/;
    let str = fname.value;
    if(regex.test(str)){
        console.log("valid")
        fname.classList.remove('is-invalid')
        fname.classList.add('is-valid')
    }
    else{
    console.log("invalid")
    fname.classList.add('is-invalid')
            
    } } )


 

Lname.addEventListener("blur"  , ()=>{
    console.log("bured fired")
    let regex = /^[a-zA-z]([a-zA-Z]){2,10}$/;
    let str = Lname.value;
    if(regex.test(str)){
        // console.log("valid")
        Lname.classList.remove('is-invalid')
        Lname.classList.add('is-valid')
    }
    else{
    // console.log("invalid")
    Lname.classList.add('is-invalid');
}
})

email.addEventListener("blur"  , ()=>{
    console.log(email)
    console.log("bured fired")
    let regex = /^([/-_.a-zA-z0-9]+)@([-_.a-zA-z0-9+]+).([a-zA-z]){2,10}$/;
    let str = email.value;
    if(regex.test(str)){
        // console.log("valid")
        email.classList.remove('is-invalid')
    }
    else{
     console.log("invalid")
    email.classList.add('is-invalid');
}
})



state.addEventListener("blur"  , ()=>{
    console.log("bured fired")
    let regex = /""/;
    let str = state.value;
    if(regex.test(str)){
        // console.log("valid")
        state.classList.remove('is-invalid')
        state.classList.add('is-valid')
    }
    else{
    console.log("invalid")
    state.classList.add('is-invalid');
}
})

phone.addEventListener("blur"  , ()=>{
    console.log("bured fired")
    let regex = /^([0-9]){10}$/;
    let str = state.value;
    if(regex.test(str)){
        console.log("valid")
        phone.classList.remove('is-invalid')
        phone.classList.add('is-valid')
    }
    else{
    console.log("invalid")
    phone.classList.add('is-invalid');
}
})