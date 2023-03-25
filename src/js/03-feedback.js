import throttle from "lodash.throttle";
const formRef = document.querySelector(".feedback-form");
const emailRef = document.querySelector(".feedback-form input");
const messageRef = document.querySelector(".feedback-form textarea");

formRef.addEventListener('submit', onFormSubmit);
emailRef.addEventListener('input', throttle(onEmailInput, 500));
messageRef.addEventListener('input', throttle(onMessageInput, 500));

insertInput()

function onFormSubmit(e){
e.preventDefault();
e.currentTarget.reset();
localStorage.removeItem('email');
localStorage.removeItem('message');
console.log(email, localStorage.getItem('email').value)
};

function onEmailInput(e){
const email = e.currentTarget.value
localStorage.setItem('email', email)

};

function onMessageInput(e){
    const message = e.currentTarget.value
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