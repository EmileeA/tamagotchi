import utilities from '../helpers/utilities.js';

const printEat = () => {
  let domString = '';
  domString += `
  <div class='eatContainer'>
    <h3>Eat</h3>
    </div>
    `;
  utilities.printToDom('eat', domString);
};

export default { printEat };
