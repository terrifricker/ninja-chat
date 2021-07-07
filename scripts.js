// references needed
const buttons = document.querySelector('.buttons');
const sendMessage = document.querySelector('#send-message');
const updateUsername = document.querySelector('#update-username');


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

sendMessage.addEventListener('submit', e => {
    e.preventDefault();
    console.log(e.target.id);
    console.log(sendMessage.message.value);

    const now = new Date();
    const newMessage = {
        chatroom: currentChatroom,
        message: sendMessage.message.value,
        time: firebase.firestore.Timestamp.fromDate(now),
        username: currentUsername,
    };

    db.collection('messages').add(newMessage).then( () => {
        console.log('message added to database');
        sendMessage.reset();
    }).catch(err => console.log(err));
});


updateUsername.addEventListener('submit', e => {
    e.preventDefault();
    console.log(e.target.id);
    console.log(updateUsername.username.value);

    const now = new Date();
    const newUsername = {
        username: updateUsername.username.value,
    };

    db.collection('users').add(newUsername).then( () => {
        console.log('username added to database');
        updateUsername.reset();
    }).catch(err => console.log(err));
})