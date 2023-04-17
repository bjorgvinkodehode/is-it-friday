
function isItFiday() {
    let today = new Date();
    let dayOfWeek = today.getDay();
    let body = document.querySelector('body');
    let message;
    
    
    if (dayOfWeek ===5){
        message = document.createElement('h1')
        message.textContent = "FRIDAY!"
    } else {
        message = document.createElement('h2')
        message.textContent = "NO"
    }
    body.appendChild(message);
}

window.addEventListener('load', isItFiday);
