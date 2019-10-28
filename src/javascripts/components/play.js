import utilities from '../helpers/utilities';

let play = 50;

const playExerciseProgress = () => {
  document.getElementById('exerciseButton').addEventListener('click', () => {
    if (play > 100) {
      play = 100;
    } else {
      play += 10;
    }
    document.getElementById('playProgress').value = play;
  });
};

const playMarathonProgress = () => {
  document.getElementById('marathonButton').addEventListener('click', () => {
    if (play < 0) {
      play = 0;
    } else {
      play -= 3;
      document.getElementById('playProgress').value = play;
    }
  });
};
const printPlay = () => {
  let domString = '';
  domString += `
  <div class="playContainer">
  <h2>Play</h2>
  </div>
  <progress value="50" max="100" id="playProgress"></progress>
  <button id='exerciseButton' class='button'>Exercise</button>
  <button id='marathonButton' class='button'>Marathon</button>
  </div>
  `;
  utilities.printToDom('play', domString);
  playExerciseProgress();
  playMarathonProgress();
};

export default { printPlay };
