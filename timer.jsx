let timeS = "0.00";
let time = 1.0;
let prvTimer = 0.0;
let counting = false;
let waiting = true;

function tick() {
    timeS = time.toFixed(2);;

    const timer = <span class="time text-light align-middle">{timeS}</span>;
    ReactDOM.render(timer, document.getElementById('time'));
    if(counting)
    {
        time += 0.05;
    }
  }
  
  setInterval(tick, 50);

  document.addEventListener('keydown', function(event) {
    if(event.key == " ") {
        if(counting)
        {
            counting = false;
            return;
        }
        if(prvTimer > 1.0)
        {
            waiting = false;
        }

    }
});

//
document.addEventListener('keyup', function(event) {
    if(event.key == " ") {
        if(!waiting)
        {
            prvTimer = 0;
            waiting = true;
            counting = true;
        }
    }
});