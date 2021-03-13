let timeS = "0.00";
let time = 0.0;

function tick() {
    timeS = (Math.round(time * 100) / 100).toFixed(2);;

    const timer = <span class="time text-light align-middle">{timeS}</span>;
    ReactDOM.render(timer, document.getElementById('time'));

  }
  
  setInterval(tick, 1000);