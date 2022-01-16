function triggerMenu() {
    if (document.getElementById('mobile-Menu-Items').style = 'display: none;') {
        document.getElementById('mobile-Menu-Items').style = 'display: block;';
        document.getElementById('close-Hamburger-Icon').style = 'display: block;';
        document.getElementById('hamburger-Icon').style = 'display: none;';
    }
}

function closeMenu() {
    if (document.getElementById('mobile-Menu-Items').style = 'display: block;') {
        document.getElementById('mobile-Menu-Items').style = 'display: none;';
        document.getElementById('close-Hamburger-Icon').style = 'display: none;';
        document.getElementById('hamburger-Icon').style = 'display: block;';
    }
}

function headerPopupClose() {
    document.getElementById('header-Popup').style = 'display: none;';
}

function popupClose() {
    document.getElementById('popup').style = 'display:none;';
}