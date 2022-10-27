let input = document.querySelector('#input-pin');
let keybords = document.querySelectorAll('.keybords button');
let inneredPIN = '';
let hiddenPIN = '';

const savePin = () => input.value = inneredPIN;

const hidePIN = (str) => {
  for (var i = 0; i < str.length; i++) {
    hiddenPIN += '*';
  }
}

const showHiddenPin = () => {
  setTimeout(() => {
    hiddenPIN = '';
    hidePIN(inneredPIN);
    input.value = hiddenPIN;
  }, 500);
}

function rand(min, max) {
  return Math.random() * (max - min) + min;
}


// const randomNums = () => {
//   let str = '';
//   let isRepeat = false;
//
//   for (var i = 0; i < 10; i++) {
//     let newRandNum =  rand(0,9);
//
//     for (var num of str) {
//       if (num == newRandNum) {
//
//       }
//     }
//
//   }
// }



keybords.forEach((item, i) => {
  //item.innerHTML = 1;

  item.onclick = () => {
    console.log(item.innerHTML);


    inneredPIN += item.innerHTML;
    savePin();
    showHiddenPin();
  }
});

let controls = document.querySelectorAll('.kontrol-keys button')

controls.forEach((item, i) => {
  item.onclick = () => {
    console.log(item.innerHTML);

    switch(item.innerHTML) {
      case 'CANCEL':  // if (x === 'value1')
        inneredPIN = inneredPIN.slice(0, -1);
        savePin();
        showHiddenPin();
      break;

      case 'CLEAR':  // if (x === 'value2')
        inneredPIN = '';
        savePin
      break;

      case 'ENTER':  // if (x === 'value2')
        alert(inneredPIN);
      break;
    }
  }
});
