import utilities from '../helpers/utilities';

// Progress Bar
let eat = 50;

const eatHealthyProgress = () => {
  document.getElementById('healthyButton').addEventListener('click', () => {
    if (eat > 100) {
      eat = 100;
    } else {
      eat += 10;
    }
    document.getElementById('eatProgress').value = eat;
  });
};

const eatTreatProgress = () => {
  document.getElementById('treatButton').addEventListener('click', () => {
    if (eat < 0) {
      eat = 0;
    } else {
      eat -= 3;
      document.getElementById('eatProgress').value = eat;
    }
  });
};


const printEat = () => {
  let domString = '';
  domString += `
  <div class='eatContainer'>
    <h2>Eat</h2>
    </div>
    <div>
    <progress value="50" max="100" id='eatProgress'></progress>
    <button id='healthyButton' class='button'>Chipotle</button>
    <button id='treatButton' class='button'>McDonald's</button>
    </div>
    `;
  utilities.printToDom('eat', domString);
  eatHealthyProgress();
  eatTreatProgress();
};

export default { printEat };
