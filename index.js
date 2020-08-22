(function updateClock() {
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes() + sec / 60;
  const hour = now.getHours() + min / 60;

  const secAngle = sec * 6;
  const minAngle = min * 6;
  const hourAngle = hour * 30;
  
  let secondHand = document.querySelector('#clock .second-hand');
  let minHand = document.querySelector('#clock .minute-hand');
  let hourHand = document.querySelector('#clock .hour-hand');

  secondHand.setAttribute('transform', `rotate(${secAngle}, 50, 50)`);
  minHand.setAttribute('transform', `rotate(${minAngle}, 50, 50)`);
  hourHand.setAttribute('transform', `rotate(${hourAngle}, 50, 50)`);

  setTimeout(updateClock, 1000);
}());