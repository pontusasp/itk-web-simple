function coinClick() {
    var elem = document.getElementById('content');
    var cf = document.getElementById('coin-front');
    var cb = document.getElementById('coin-back');

    if(elem.classList.contains('flip')) {
        window.location.href = 'start.html';
    } else {
        elem.classList.add('flip');
        cf.classList.add('back');
        cb.classList.add('front');
    }
}