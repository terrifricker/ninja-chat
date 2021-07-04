const buttons = document.querySelector('.buttons');
const messageButton = document.querySelector('#send-message');
const usernameButton = document.querySelector('#update-username');


// default values
let currentChatroom='web-development';
let currentUsername='anonymous';


buttons.addEventListener('click', e => {
    console.log(e.target.id);
    let currentChatroom = e.target.id;
    console.log(currentChatroom);
});

messageButton.addEventListener('click', e => {
    console.log(e.target.id);
})
usernameButton.addEventListener('click', e =>{
    console.log(e.target.id);
})