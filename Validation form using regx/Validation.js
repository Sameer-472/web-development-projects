console.log("this is my project 4");

const fname = document.getElementById("name");
const Lname = document.getElementById("Lname");
const email = document.getElementById("email");
// console.log(email)
const state = document.getElementById("state");
const city = document.getElementById("city");
const phone = document.getElementById("phone");

let namevalid = false
let lnamevalid = false;
let emailvalid = false
let cityvalid = false;
let statevalid = false;
let phonevalid = false

fname.addEventListener("blur", () => {
    console.log("bured fired")
    let regex = /^[a-zA-Z]([a-zA-Z]){2,10}$/;
    let str = fname.value;
    if (regex.test(str)) {
        console.log("valid")
        fname.classList.remove('is-invalid')
        fname.classList.add('is-valid')
        namevalid = true;
    }
    else {
        console.log("invalid")
        fname.classList.add('is-invalid')
        namevalid = false;

    }
})




Lname.addEventListener("blur", () => {
    console.log("bured fired")
    let regex = /^[a-zA-z]([a-zA-Z]){2,10}$/;
    let str = Lname.value;
    if (regex.test(str)) {
        // console.log("valid")
        Lname.classList.remove('is-invalid')
        Lname.classList.add('is-valid')
        lnamevalid = true;
    }
    else {
        // console.log("invalid")
        Lname.classList.add('is-invalid');
        lnamevalid = false;
    }
})

email.addEventListener("blur", () => {
    console.log(email)
    console.log("bured fired")
    let regex = /^([/-_.a-zA-z0-9]+)@([-_.a-zA-z0-9+]+).([a-zA-z]){2,10}$/;
    let str = email.value;
    if (regex.test(str)) {
        // console.log("valid")
        email.classList.remove('is-invalid')
        emailvalid = true;
    }
    else {
        console.log("invalid")
        email.classList.add('is-invalid');
        emailvalid = false;
    }
})



// state.addEventListener("blur"  , ()=>{
//     console.log("bured fired")
//     let regex = /"Pakistan"/;
//     let str = state.value;
//     if(regex.test(str)){
//         // console.log("valid")
//         state.classList.remove('is-invalid')
//         state.classList.add('is-valid')
//         statevalid = true
//     }
//     else{
//     console.log("invalid")
//     state.classList.add('is-invalid');
//     statevalid = false;
// }
// })

phone.addEventListener("blur", () => {
    console.log("bured fired")
    let regex = /^([0-9]){11}$/;
    let str = phone.value;
    if (regex.test(str)) {
        console.log("valid")
        phone.classList.remove('is-invalid')
        phone.classList.add('is-valid')
        phonevalid = true;
    }
    else {
        console.log("invalid")
        phone.classList.add('is-invalid');
        phonevalid = false;
    }
})


city.addEventListener("blur", () => {
    console.log("bured fired")
    let regex = /^([a-zA-Z]{0,15}$)/;
    let str = city.value;
    if (regex.test(str)) {
        console.log("valid")
        city.classList.remove('is-invalid')
        city.classList.add('is-valid')
        cityvalid = true;
    }
    else {
        console.log("invalid")
        city.classList.add('is-invalid');
        cityvalid = false;
    }
})

let sumbit = document.getElementById("sumbit");
sumbit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("you have sumbit the button")
    console.log(namevalid, lnamevalid, emailvalid, statevalid, cityvalid, phonevalid)

    if (namevalid && lnamevalid && emailvalid && cityvalid && phonevalid) {
        // let faliure = document.getElementById('failure');
        // let success = document.getElementById('success');
        let alert = document.getElementById('alert');
        let success = `<div id="success" class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Success!</strong> Your travel request has been successfully submitted
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>`
        alert.innerHTML = success;

        //     success.classList.add('show')
        //     $('#failure').hide();
        //     $('#success').show();
        // }
        // else{
        //     let faliure = document.getElementById('failure');
        //     faliure.classList.add('show');
        //     $('#faliure').show();
        //     $('#success').hide();
        setTimeout(() => {
            alert.innerHTML = "";
        }, 3000);
    }
    else {
        let alert = document.getElementById('alert');
        let danger = `<div id="danger" class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Success!</strong> Your travel request has not been sent due to some errors!
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>`
        alert.innerHTML = danger;
        // $('#faliure').show();
        setTimeout(() => {
            alert.innerHTML = "";
        }, 5000);
    }
})