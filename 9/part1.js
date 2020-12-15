import puzzleData from './puzzleData.js';

const XMSCode = puzzleData.split('\n');

const checkIfXMSCodeIsValid = (code, listOfPreviousCodes) => {
  for (let i = 0; i < listOfPreviousCodes.length - 1; i++) {
    for (let y = 1; y < listOfPreviousCodes.length; y++) {
      if (parseInt(listOfPreviousCodes[i]) + parseInt(listOfPreviousCodes[y]) === parseInt(code)) {
        return true;
      }
    }
  }
  return false;
}

XMSCode.some((code, index) => {
  if (index > 24) {
    if (!checkIfXMSCodeIsValid(code, XMSCode.slice(index - 25, index))) {
      console.warn(`The first number that breaks the rule is ${code}`);
      return null;
    }
  }
});