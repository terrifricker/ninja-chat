const buttons = document.querySelector('.buttons');
const messageButton = document.querySelector('#send-message');
const usernameButton = document.querySelector('#update-username');


// default values
let currentChatroom='web-development';
let currentUsername='anonymous';
let webDevColor = 'teal';
let htmlColor = 'purple';
let cssColor = 'red';
let javascriptColor = 'green';


buttons.addEventListener('click', e => {
    let currentChatroom = e.target.id;
    let color = document.querySelector('#message-window');
    switch (currentChatroom) {
        case 'web-development':
            color.className = webDevColor;
            break;
        case 'html':
            color.className = htmlColor;
            break;
        case 'css':
            color.className = cssColor;
            break;
        case 'javascript':
            color.className = javascriptColor;
            break;
        default:
            color.className = webDevColor;
    }

});

messageButton.addEventListener('click', e => {
    console.log(e.target.id);
})
usernameButton.addEventListener('click', e =>{
    console.log(e.target.id);
})