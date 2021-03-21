import audio from './audio/1.mp3';

export let starttimer = document.querySelector('.button').onclick = () =>{
    let timerInput = Number(document.getElementById("time").value);
    let timerShow = document.querySelector(".timer");
    let stop  = document.querySelector('.stop');
    let reset  = document.querySelector('.reset');
    let timeMinute = timerInput * 60 - 1
/*********************************************************/
        let timer = setInterval(function () {
            let seconds = timeMinute%60
            let minutes = timeMinute/60%60
            let hour = timeMinute/60/60%60
            if (timeMinute < 0) {
                clearInterval(timer);
                timerShow.innerHTML = 'Время закончено'
                document.querySelector(".wave").innerHTML = `<audio src=${audio} autoplay></audio>`
                // alert("Время закончилось");
            } else {
                let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
                timerShow.innerHTML = strTimer;
                console.log(strTimer)

            }
            --timeMinute;

        }, 1000)


        //стоп
    stop.addEventListener('click', function() {
        clearInterval(timer);
    });

        //сброс
    reset.addEventListener('click', function() {
        clearInterval(timer);
        timerShow.innerHTML = 'Время закончено'
    })

};