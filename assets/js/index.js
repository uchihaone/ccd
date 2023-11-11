// common style


// const scrollUp = document.querySelector("#scroll-up");

// scrollUp.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth",
//   });
// });
let newVal = 0;

function divideByTen(val) {
  if (val < 10) {
    return val;
  } else {
    newVal = parseInt(val) / 10;
    return divideByTen(newVal);
  }
}

document.addEventListener("mousemove", castLight);
function castLight(event) {
  const innerWidth = parseInt(window.innerWidth) / 2;
  const innerHeight = parseInt(window.innerHeight) / 2;
  const clientX = parseInt(event.clientX);
  const clientY = parseInt(event.clientY);
  
  let signX = 1
  let signY = 1
  let shadowX = 1;
  let shadowY = 1;

  if (clientX <= innerWidth) {
    // console.log('less width');
    signX = 1
    shadowX = divideByTen(clientX);
  } else if (clientX > innerWidth) {
    // console.log('more width');
    signX = -1
    shadowX = divideByTen(clientX);
  }

  if (clientY <= innerHeight) {
    // console.log('less height');
    signY = 1
    shadowY = divideByTen(clientY);
  } else if (clientY > innerHeight) {
    // console.log('more height');
    signY = -1
    shadowY = divideByTen(clientY);
  }

  document.documentElement.style.setProperty('--shadow-x', (shadowX * signX) + 'px');
  document.documentElement.style.setProperty('--shadow-y', (shadowY * signY) + 'px');
  
  // console.log('lower ', shadowX, shadowY);
}
