setInterval(() => {
    const buttons = [...document.getElementsByTagName('button')];
    buttons.forEach((button) => {
        if (button.disabled && button.innerText === '.com') {
            button.parentNode.parentNode.remove()
        }
    });
    const divs = [...document.querySelectorAll('div[data-page]')];
    divs.forEach((div) => {
        if (div.innerText.trim() === '') {
            div.remove();
        }
    });
}, 1000);