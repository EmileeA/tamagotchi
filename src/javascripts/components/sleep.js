import utilities from '../helpers/utilities';

let sleep = 50;

const sleepBedtimeProgress = () => {
  document.getElementById('bedtimeButton').addEventListener('click', () => {
    if (sleep > 100) {
      sleep = 100;
    } else {
      sleep += 10;
    }
    document.getElementById('sleepProgress').value = sleep;
  });
};

const sleepMorningProgress = () => {
  document.getElementById('morningButton').addEventListener('click', () => {
    if (sleep < 0) {
      sleep = 0;
    } else {
      sleep -= 3;
      document.getElementById('sleepProgress').value = sleep;
    }
  });
};

const printSleep = () => {
  let domString = '';
  domString += `
  <div class="sleepContainer">
  <h2>Sleep</h2>
  </div>
  <progress value="50" max="100" id="sleepProgress"></progress>
  <button id='bedtimeButton' class='button'>Bedtime</button>
  <button id='morningButton' class='button'>Morning</button>
    </div>
  `;
  utilities.printToDom('sleep', domString);
  sleepBedtimeProgress();
  sleepMorningProgress();
};

export default { printSleep };
