// let timerInput = document.getElementById("time"); // Берём строку
// let buttonRun = document.getElementById("button");// Берём кнопку запуска
// let timerShow = document.querySelector(".timer"); // Берём блок для показа времени



let buttonRun = document.querySelector('.button').onclick = () =>{
    let timerInput = Number(document.getElementById("time").value);
    let timerShow = document.querySelector(".timer");
    let timeMinute = timerInput * 60
/*********************************************************/
    let timer = setInterval(function () {
        let seconds = timeMinute%60
        let minutes = timeMinute/60%60
        let hour = timeMinute/60/60%60
        if (timeMinute < 0) {
            clearInterval(timer);
            timerShow.innerHTML = 'Время закончено'
            document.querySelector(".wave").innerHTML = "<audio src=\"https://dwweb.ru/__a-data/mp3/windows_xp_start.mp3\" autoplay></audio>"
            // alert("Время закончилось");
        } else {
            let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
            timerShow.innerHTML = strTimer;
            console.log(strTimer)

        }
        --timeMinute;
    }, 1000)

};

const right = document.querySelector(".right");
const container = document.querySelector(".wrapper");

right.addEventListener("mouseenter", () => {
    container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
    container.classList.remove("hover-right");
});





