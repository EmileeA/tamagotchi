import utilities from '../helpers/utilities.js';

const printSleep = () => {
  let domString = '';
  domString += `
  <div class="sleepContainer">
  <h2>Sleep</h2>
  </div>
  `;
  utilities.printToDom('sleep', domString);
};

export default { printSleep };
