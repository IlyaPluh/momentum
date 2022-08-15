const setting = document.querySelector('.settings');
const languageshow = document.querySelector('.selectlanguage');
const backimgshow = document.querySelector('.selectbackimg');

setting.addEventListener('change', function() {
    if (this.checked) {
        languageshow.style.visibility = 'visible';
        languageshow.style.opacity = '1';
        backimgshow.style.visibility = 'visible';
        backimgshow.style.opacity = '1';
    } else {
        languageshow.style.visibility = 'hidden';
        languageshow.style.opacity = '0';
        backimgshow.style.visibility = 'hidden';
        backimgshow.style.opacity = '0';
    }
})