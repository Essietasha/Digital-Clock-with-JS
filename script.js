var message;

const form = document.getElementById('form');



function navToWelcome (e) {
    e.preventDefault();
    const firstName = document.getElementById('nameInput');
    const passwrd = document.getElementById('passwordInput');
    const userName = firstName.value;
    const passwordLimit = passwrd.value;
    localStorage.setItem('user-name', userName);
    localStorage.setItem('pass-word', passwordLimit);
    const err = document.getElementById('errorMessage');
    if (userName < 1 || passwordLimit < 4) {
        err.classList.add('errorMessage');
        err.innerHTML = 'Please input a valid name and at least a 4 digit password!!'
    } else{
        window.location.href = "welcome.html"
    }
}
form.addEventListener('submit', navToWelcome);


    function runDate () {
        const userName = localStorage.getItem('user-name');

        setInterval(() => {
        let thisDate = new Date();
        const currentDate = thisDate.toLocaleString('default', {
            weekday: 'long',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        });

        if (currentDate.hour < 11){
            message = 'Good Morning!'
        }else if( currentDate.hour >= 12 && currentDate.hour <= 18){
            message = 'Good Afternoon!'
        }else{
            message = 'Good Day!!!'
        }
        document.getElementById('time').textContent = `Hello, ${userName}, Today is ${currentDate}`;
        document.getElementById('greeting').textContent = message;
        document.getElementById('rtn').classList.add('ml');
    }, 1000);
    }
    
    function returnToHome (){
        window.location.href = "index.html";
    }




