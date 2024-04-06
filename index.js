
const main = document.querySelector('main#main');
if (main) {
  main.remove();
}

const newHeader = document.createElement('h1');


newHeader.id = 'victory';


const yourName = 'Your Name';
newHeader.textContent = `${yourName} is the champion`;


document.body.appendChild(newHeader);

