'use strict'

//config
const inputMessage = 'enter your pin';
let showInnered = true; //show or hide PIN (true = show)
const PINduration = 0; // how long to show PIN before hide (1000 = 1 second)
//config

let input = document.querySelector('#input-pin');
let keybords = document.querySelectorAll('.keybords button');
let controls = document.querySelectorAll('.kontrol-keys button');

let inneredPIN = '';
let hiddenPIN = '';

const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

// create array with random numbers from 0 to 9
const randomNums = () => {
  let randNums = [];
  randNums[0] = rand(0,10);

  while ( randNums.length < 10) {
    let newRandNum =  rand(0,10);
    let isRepeat = false;

    search: for (var j = 0; j < randNums.length; j++) {
      if (randNums[j] == newRandNum) {
        isRepeat = true;
        break search;
      }
    }

    if (isRepeat == false) {
      randNums.push(newRandNum);
    }
  }

  return randNums;
}

// give functions for aech buttons with numbers in keyboard
const upgradeNumButtons = () => {
  keybords = document.querySelectorAll('.keybords button');
  keybords.forEach((item) => {
    item.onclick = () => {
      inneredPIN += item.innerHTML;
      upgradePIN();
      upgradeKeybord();
      showHiddenPin(PINduration);
    }
  });
}
upgradeNumButtons();

// inserting new buttons with numbers in keyboard
const upgradeKeybord = () => {
  const keybord = document.querySelector('.keybords');
  let counter = 0;
  let randNumsArr = randomNums();

  keybord.innerHTML = '';
  for (var i = 0; i < 12; i++) {
      let num = (i != 9 && i != 11)? randNumsArr[counter++]: '';
      let innerButton = `<button type="button">${num}</button>`;
      keybord.insertAdjacentHTML('beforeend', innerButton);
  }
  upgradeNumButtons();
}
upgradeKeybord();

const upgradePIN = () => {
  if(!showInnered) input.value = inneredPIN;
}

const hidePIN = (str) => {
  for (var i = 0; i < str.length; i++) {
    hiddenPIN += '*';
  }
}

// show or hide PIN // optional (default - false)
const showHiddenPin = (duration) => {
  if (showInnered) {
    setTimeout(() => {
      hiddenPIN = '';
      hidePIN(inneredPIN);
      input.value = hiddenPIN;
    }, duration);
  }
}

// functions for controls buttons
controls.forEach((item, i) => {
  item.onclick = () => {
    switch(item.innerHTML) {
      case 'CANCEL':
        inneredPIN = inneredPIN.slice(0, -1);
        upgradePIN();
        showHiddenPin(PINduration);
      break;

      case 'CLEAR':
        showInnered = true;
        inneredPIN = '';
        input.value = inputMessage;
      break;

      case 'ENTER':
        alert(inneredPIN);
      break;

      case 'SHOW':
      case 'HIDE':
        showInnered?
        (showInnered = false, item.innerHTML = "HIDE"):
        (showInnered = true, item.innerHTML = "SHOW");

        upgradePIN();
        showHiddenPin(PINduration);
      break;
    }
  }
});
