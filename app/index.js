

"use strict"
/* Menu constructor */
function Menu(selector, options) {
    this.selector = selector;
    /* Default values */
    this.properties = {
        effect: 'noEffect',
        changeIcon: true
    }
    this.properties = Object.assign(this.properties, options);
    this.navList = document.querySelector(this.selector + ' .navbar-list');
    this.button = document.querySelector(this.selector + ' .hamburger');
    
    this.hamburgerEvent(); // run hamburgerEvent() method
    this.effect();
}
/* Proto methods */
Menu.prototype.hamburgerEvent = function () {
    
    const el = this.navList.classList;
    this.button.addEventListener('click', () => {     
        el.toggle('active');
        if(!el.contains('active')) {
            el.add('unactive');
        } else if (el.contains('unactive')) {
            el.remove('unactive')
        }
        this.changeIcon();
    });
}
Menu.prototype.effect = function () {
    if (this.properties.effect === 'slideDown') {
        this.navList.classList.add('slideDown')
    } else if (this.properties.effect === 'slideLeft') {
        this.navList.classList.add('slideLeft')
    }
    if (this.properties.effect === 'noEffect') {
        this.navList.classList.add('noEffect')
    }
};
Menu.prototype.changeIcon = function () {
    if (this.properties.changeIcon === true) {
        this.button.firstElementChild.classList.toggle('fa-times');
    } else if (this.properties.changeIcon === false) {
        return false;
    };
};

const ob = new Menu('.navbar', {
    effect: 'slideDown',
    changeIcon: false
});

