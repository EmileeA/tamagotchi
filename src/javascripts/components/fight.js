import utilities from '../helpers/utilities';

const printFight = () => {
  let domString = '';
  domString += `
  <div class="fightContainer">
  <h2>Fight</h2>
  </div>
  <div id="fightProgress">
    <div id="fightBar"></div>
    </div>
  `;
  utilities.printToDom('fight', domString);
};

export default { printFight };
