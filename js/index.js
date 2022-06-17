(function () {
    let timer = document.querySelector('#timer');
    let timerCards = document.querySelectorAll('.timer-card');
    timerCardsArray = [];

    let defaults = {
        container: '#timer',
        time: '1440' * 60,
        cards: timerCardsArray,
    }

    timerCards.forEach(e => {
        timerCardsArray.push(e);
        return timerCardsArray;
    });

    const zeroLength = 2;

    setInterval(() => {
        let s = defaults.time % 60;
        let m = defaults.time / 60 % 60;
        let h = defaults.time / 60 / 60 % 60;
        let d = defaults.time / 60 / 60 % 60 % 24;

        timerCards[0].innerHTML = "<span>" + String(Math.floor(h)).padStart(zeroLength, '0') + "</span>";
        timerCards[1].innerHTML = "<span>" + String(Math.floor(m)).padStart(zeroLength, '0') + "</span>";
        timerCards[2].innerHTML = "<span>" + String(Math.floor(s)).padStart(zeroLength, '0') + "</span>";

        --defaults.time;
    }, 1000);
}())