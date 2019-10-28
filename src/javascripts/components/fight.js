import utilities from '../helpers/utilities';

let fight = 50;

const fightPowProgress = () => {
  document.getElementById('powButton').addEventListener('click', () => {
    if (fight > 100) {
      fight = 100;
    } else {
      fight += 10;
    }
    document.getElementById('fightProgress').value = fight;
  });
};

const fightBlockProgress = () => {
  document.getElementById('blockButton').addEventListener('click', () => {
    if (fight < 0) {
      fight = 0;
    } else {
      fight -= 3;
      document.getElementById('fightProgress').value = fight;
    }
  });
};

const printFight = () => {
  let domString = '';
  domString += `
  <div class="fightContainer">
  <h2>Fight</h2>
  </div>
  <div>
  <progress value="50" max="100" id="fightProgress"></progress>
  <button id='powButton' class='button'>Pow</button>
  <button id='blockButton' class='button'>Block</button>
    </div>
  `;
  utilities.printToDom('fight', domString);
  fightPowProgress();
  fightBlockProgress();
};

export default { printFight };
