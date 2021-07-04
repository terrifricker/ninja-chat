// references needed
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

// listen to chatroom buttons
buttons.addEventListener('click', e => {
    let currentChatroom = e.target.id;

    // reference to background-color of message window
    let color = document.querySelector('#message-window');
    // reference to span which indicates room choice
    let room = document.querySelector('#room span');

    // for each button click ..
    switch (currentChatroom) {
        case 'web-development':
            // update the room shown in the 'You are in room ...'
            room.innerHTML = 'Web Development';
            // change background color of message window
            color.className = webDevColor;
            break;
        case 'html':
            room.innerHTML = 'HTML';
            color.className = htmlColor;
            break;
        case 'css':
            room.innerHTML = 'CSS';
            color.className = cssColor;
            break;
        case 'javascript':
            room.innerHTML = 'JavaScript';
            color.className = javascriptColor;
            break;
        default:
            room.innerHTML = 'Web Development';
            color.className = webDevColor;
    }

 



});

messageButton.addEventListener('click', e => {
    console.log(e.target.id);
})
usernameButton.addEventListener('click', e =>{
    console.log(e.target.id);
})