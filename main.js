// tabs 
let tabsGroup = document.querySelectorAll('.tab');
let loginDiv = document.querySelector('#login');
let signUp = document.querySelector('#signup');

for (let i = 0; i < tabsGroup.length; i++) {
    tabsGroup[i].onclick = function (e) {
        let current = document.getElementsByClassName("tab-active");
        current[0].className = current[0].className.replace(" tab-active", "");
        this.className += " tab-active";
        e.preventDefault();

        let target = e.target;
        let attr = target.getAttribute('href');

        if (attr.includes('signup')) {
            signUp.style.display = "block";
            loginDiv.style.display = "none";
        } else {
            signUp.style.display = "none";
            loginDiv.style.display = "block"
        }
    };
}
//email verification
let email = document.querySelector('.email__input');
let emailLabel = document.querySelector('.email__label');
let mailPatt = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

email.onkeyup = function () {
    if (mailPatt.test(email.value)) {
        emailLabel.innerHTML = '';
    } else {
        emailLabel.innerHTML = 'Please enter a valid email adress';
    }
}
// phone verification
let phone = document.querySelector('.phone__input');
let phoneLabel = document.querySelector('.phone__label');
let phonePatt = /^[\d,s,\+,\-]{5,20}/;

phone.onkeyup = function () {
    if (phonePatt.test(phone.value)) {
        phoneLabel.innerHTML = '';
    } else {
        phoneLabel.innerHTML = 'Please enter a valid phone number';
    }
}
// label movement
email.onblur = function () {
    if (email.value.length !== 0) {
        emailLabel.classList.add('label-active');
    } else if (email.value.length == 0) {
        emailLabel.classList.remove('label-active');
    }
}

phone.onblur = function () {
    if (phone.value.length !== 0) {
        phoneLabel.classList.add('label-active');
    } else if (phone.value.length == 0) {
        phoneLabel.classList.remove('label-active');
    }
}

// modal
let modal = document.getElementById("myModal");
let register = document.querySelectorAll(".button");
let close = document.querySelector(".modal__close");
let loader = document.querySelector('.modal__loader');
let text = document.querySelector('.modal__text');

// modal openening
for (let i = 0; i < register.length; i++) {
    (register[i]).onclick = () => {
        modal.style.display = "block";
        setTimeout(function () {
            loader.style.display = 'none';
            let randomNumber = Math.floor(Math.random() * 2);
            if (randomNumber == 1) {
                text.innerHTML = ('There was an error processing the request');
            } else if (randomNumber == 0) {
                text.innerHTML = ('The form has been successfully submitted');
            }
        }, 2000);
    }
}
// When the user clicks on <close> (x), close the modal
close.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}