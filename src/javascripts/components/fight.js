import utilities from '../helpers/utilities.js';

const printFight = () => {
  let domString = '';
  domString += `
  <div class="fightContainer">
  <h2>Fight</h2>
  </div>
  `;
  utilities.printToDom('fight', domString);
};

export default { printFight };
