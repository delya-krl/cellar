function setCookie(name, value, options = {}) {
    options = {
        path: '/',
        // при необходимости добавьте другие значения по умолчанию
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
    if (value == 'false') {        
        document.getElementsByTagName('body')[0].classList.add('hidden');
    }
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function checkCookie() {
    console.log(document.cookie);
    const isAdult = getCookie('isAdult');
    console.log(isAdult, isAdult == 'false');
    if (isAdult === undefined) {
        showModal();
    } else if (isAdult == 'false') {
        document.getElementsByTagName('body')[0].classList.add('hidden');
    }
}

function showModal() {
    document.getElementById('adult-modal').classList.add('show');
}

function hideModal() {
    document.getElementById('adult-modal').classList.remove('show');
}
