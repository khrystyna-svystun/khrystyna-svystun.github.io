try {
    tns({
        container: '.my-slider',
        items: 1,
        center: false,
        mouseDrag: true,
        navPosition: "bottom",
        autoplay: true,
        controlsContainer: "#customize-controls",
    });
} catch (e) {
    console.error('Couldn\'t initialize slider', e);
}

try {
    ScrollReveal().reveal('.reveal', {
        duration: 2000,
        viewFactor: 0.5,
        easing: 'cubic-bezier(0,.87,0,.99)',
        distance: '150%',
        origin: 'bottom',
        opacity: null
    });
} catch (e) {
    console.error('Couldn\'t initialize ScrollReveal', e);
}

var menu = document.getElementById('menu');

function onMenuButtonClick() {
    if(menu) {
        if(menu.style.display === 'none') {
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none';
        }
    } else {
        console.error('menu is not found');
    }
}