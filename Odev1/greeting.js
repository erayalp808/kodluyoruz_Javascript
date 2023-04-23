let user = prompt("isminizi giriniz.")
let greeting = document.querySelector("#greeting")
greeting.innerHTML = `Merhaba, <b>${user}!</b> Hoşgeldin!`

function dayToTurkish(d) {
    let dayinTurkish;
    switch (d) {
        case 0:
            dayinTurkish = "Pazar"
            break;
        case 1:
            dayinTurkish = "Pazartesi"
            break;
        case 2:
            dayinTurkish = "Salı"
            break;
        case 3:
            dayinTurkish = "Çarşamba"
            break;
        case 4:
            dayinTurkish = "Perşembe"
            break;
        case 5:
            dayinTurkish = "Cuma"
            break;
        case 6:
            dayinTurkish = "Cumartesi"
            break;
    }
    return dayinTurkish;
}

function realtimeClock() {
    let rtClock = new Date();

    let hours = rtClock.getHours();
    let minutes = rtClock.getMinutes();
    let seconds = rtClock.getSeconds();
    let day = rtClock.getDay()

    //tek basamaklı değerlerin yanına sıfır koyup atama yapıyoruz
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);
    

    //saatin gösterimi
    document.querySelector("#clock").innerHTML =
        `${hours} : ${minutes} : ${seconds} ${dayToTurkish(day)}`;
    let t = setTimeout(realtimeClock, 500); 
}

document.querySelector("#description").innerHTML =`<u><b>Kodluyoruz Frontend Web Development Patikası</b></u>'nın Javascript 1. bölümü Ödevindesiniz`