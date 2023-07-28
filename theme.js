var isDark = true;

const lightTHeme = () => {
    document.documentElement.style.setProperty('--bgColor', 'rgba(255, 255, 255)');
    document.documentElement.style.setProperty('--sBgColor', 'rgba(255, 255, 255, 0.8)');
    document.documentElement.style.setProperty('--txtColor', 'black');
    isDark = false;
}

const darkTHeme = () => {
    document.documentElement.style.setProperty('--bgColor', 'black');
    document.documentElement.style.setProperty('--sBgColor', 'rgba(0, 0, 0, 0.8)');
    document.documentElement.style.setProperty('--txtColor', 'white');
    isDark = true;
}

const lightChanger = document.querySelector('.light');
lightChanger.addEventListener('click', () => {
    if (isDark) {
        lightTHeme();
    }
    else {
        darkTHeme();
    }
})