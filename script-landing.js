function coinClick() {
    var elem = document.getElementById('content');
    var cf = document.getElementById('coin-front');
    var cb = document.getElementById('coin-back');

    if(elem.classList.contains('flip')) {
        setTimeout(function () {
            window.location.href = 'home.html';
        }, 300);
        document.getElementById('overlay').classList.add('flash');
    } else {
        elem.classList.add('flip');
        cf.classList.add('back');
        cb.classList.add('front');
    }
}