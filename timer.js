const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const millisec = document.querySelector(".millisec");
const start_btn = document.querySelector(".start");
const pause_btn = document.querySelector(".pause");
const reset_btn = document.querySelector(".reset");
let minute_count = Number(localStorage.getItem("minute") || 0);
let second_count = Number(localStorage.getItem("second") || 0);
let millisec_count = Number(localStorage.getItem("millisec") || 0);
let interval = null;


start_btn.addEventListener("click", () => {
    start_btn.style.display = "none";
    pause_btn.style.display = "block";
    interval = setInterval(() => {
        millisec_count++;
        if (millisec_count === 99) {
            millisec_count = 0;
            second_count += 1;
            if (second_count === 60) {
                second_count = 0;
                minute_count += 1;
            }
        }

        minute.textContent = (minute_count < 10) ? `0${minute_count}` : minute_count;
        second.textContent = (second_count < 10) ? `0${second_count}`: second_count;
        millisec.textContent = (millisec_count < 10) ? `0${millisec_count}`: millisec_count;

        localStorage.setItem("minute", minute_count);
        localStorage.setItem("second", second_count);
        localStorage.setItem("millisec", millisec_count);
    }, 10);
})

pause_btn.addEventListener("click", () => {
    pause_btn.style.display = "none";
    start_btn.style.display = "block";
    clearInterval(interval);
})

reset_btn.addEventListener("click", () => {
    minute_count = 0;
    second_count = 0;
    millisec_count = 0;
    clearInterval(interval);
    localStorage.clear();
    minute.textContent = "00";
    second.textContent = "00";
    millisec.textContent = "00";
    pause_btn.style.display = "none";
    start_btn.style.display = "block";
})
