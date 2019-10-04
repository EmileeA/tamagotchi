import utilities from '../helpers/utilities';

const printEat = () => {
  let domString = '';
  domString += `
  <div class='eatContainer'>
    <h3>Eat</h3>
    </div>
    <div id="eatProgress">
    <div id="eatBar"></div>
    </div>
    `;
  utilities.printToDom('eat', domString);
};

// Progress Bar
let eat = 50;

const eatProgress = () => {
  document.getElementById('engergyButton').addEventListener('click', () => {
    const addingEnergy = eat + 2;
    if (addingEnergy > 100) {
      eat = 100;
    } else {
      eat = addingEnergy;
    }
    document.getElementById('eatProgress').value = eat;
  });
};

export default { printEat, eatProgress };
