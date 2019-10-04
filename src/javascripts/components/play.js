import utilities from '../helpers/utilities';

const printPlay = () => {
  let domString = '';
  domString += `
  <div class="playContainer">
  <h2>Play</h2>
  </div>
  <div id="playProgress">
    <div id="playBar"></div>
    </div>
  `;
  utilities.printToDom('play', domString);
};

export default { printPlay };
