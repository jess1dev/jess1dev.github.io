let timeS = "0.00";
let time = 1.0;
let counting = false;
let waiting = false;

function tick() {
    timeS = time.toFixed(2);;

    const timer = <span class="time text-light align-middle">{timeS}</span>;
    ReactDOM.render(timer, document.getElementById('time'));

  }
  
  setInterval(tick, 1000);

  document.addEventListener('keydown', function(event) {
    if(event.key == " ") {
        alert('Space was pressed');
    }
});