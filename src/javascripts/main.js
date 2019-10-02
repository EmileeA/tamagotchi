import '../styles/main.scss';
import eat from './components/eat.js';
import play from './components/play.js';
import fight from './components/fight.js';
import sleep from './components/sleep.js';

const init = () => {
  eat.printEat();
  play.printPlay();
  fight.printFight();
  sleep.printSleep();
};

init();
