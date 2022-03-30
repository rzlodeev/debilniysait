let button = document.querySelector('button');
let id = setInterval(frame, 30);
let posX = 300;
let posY = 150;
let buttonWidth = button.offsetWidth;
let buttonHeight = button.offsetHeight;
let chgX = setInterval(changeDirectionX, 1000);
let chgY = setTimeout(setInterval(changeDirectionY, 1000), 500);
let xSpeed = 0;
let ySpeed = 0;
let speeds = [-6, -5, -4, 4, 5, 6, 6]
let speed = 5;

function changeDirectionX() {
    xSpeed = speeds[Math.floor(Math.random() * speeds.length)];
}

function changeDirectionY() {
    ySpeed = speeds[Math.floor(Math.random() * speeds.length)];
}

function frame() {
    if (posX < (window.innerWidth - buttonWidth) && posX >= 0) {
        posX += speed * xSpeed;
        if (posX < (window.innerWidth - buttonWidth) && posX >= 0) {
        button.style.left = posX + 'px';
        }
    } else if (posX > window.innerWidth - buttonWidth) {
        posX -= speed * xSpeed;
        changeDirectionX();
    } else if (posX < 0) {
        posX += speed * xSpeed;
        changeDirectionX();
    }   
    
    if (posY < (window.innerHeight - buttonHeight) && posY >= 0) {
        posY += speed * ySpeed;
        if (posY < (window.innerHeight - buttonHeight) && posY >= 0) {
        button.style.top = posY + 'px';
        }
    } else if (posY > window.innerHeight - buttonHeight) {
        posY -= speed * ySpeed;
        changeDirectionY();
    } else if (posY < 0) {
        posY += 5 * ySpeed;
        changeDirectionY();
    }
}

let text = document.querySelector('h1');
let a = setTimeout(() => {text.innerHTML = 'Даша та май бога в серці'}, 4000);
let b = setTimeout(() => {text.innerHTML = 'та йоб'}, 8000);
let c = setTimeout(() => {text.innerHTML = 'Даша блять'}, 12000);
let d = setTimeout(() => {text.innerHTML = 'ойоооо'}, 15000);
let f = setTimeout(() => {text.innerHTML = 'ти як сюди си добрала опше'}, 100000);