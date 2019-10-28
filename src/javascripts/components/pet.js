import pet from '../../images/pngguru.com-id-lgfjp.png';
import utilities from '../helpers/utilities';

const printPet = () => {
  let domString = `<img src=${pet} alt="picture of your pet"/>`;
  domString += `
        `;
  utilities.printToDom('pet', domString);
};

export default { printPet };
