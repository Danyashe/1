import throttle from "lodash.throttle";
const formRef = document.querySelector(".feedback-form");
const emailRef = document.querySelector(".feedback-form input");
const messageRef = document.querySelector(".feedback-form textarea");
const formData = {};


formRef.addEventListener('submit', onFormSubmit);
emailRef.addEventListener('input', throttle(onEmailInput, 500));
messageRef.addEventListener('input', throttle(onMessageInput, 500));
formRef.addEventListener('input', e => {formData[e.target.name] = e.target.value

})

insertInput()

function onFormSubmit(e){
e.preventDefault();
console.log(formData)
e.currentTarget.reset();
localStorage.removeItem('email');
localStorage.removeItem('message');
};

function onEmailInput(e){
const email = e.target.value
localStorage.setItem('email', email)

};

function onMessageInput(e){
    const message = e.target.value
    localStorage.setItem('message', message)
};

function insertInput(){

    const saveEmail = localStorage.getItem('email');
    const saveMessage = localStorage.getItem('message');

    if(saveEmail){
        emailRef.value = saveEmail
    }

    if(saveMessage){
        messageRef.value = saveMessage
    }
 }