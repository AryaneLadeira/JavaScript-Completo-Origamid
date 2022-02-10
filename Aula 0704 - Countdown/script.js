import Countdown from "./countdown.js";

const tempoParaONatal = new Countdown('24 December 2022 23:59:59 GMT-0300')
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

console.log(tempoParaONatal.total)

setInterval(() => {
    days.innerText = tempoParaONatal.total.days
    hours.innerText = tempoParaONatal.total.hours
    minutes.innerText = tempoParaONatal.total.minutes
    seconds.innerText = tempoParaONatal.total.seconds
    console.log(tempoParaONatal.total)
}, 1000)