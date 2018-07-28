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
        if (!el.contains('active')) {
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

/* Button constructor */
function Button(selector, options) {
    this.selector = document.querySelector(selector);
    this.properties = {
        background: 'green'
    };
    this.properties = Object.assign(this.properties, options);

    this.background();
    this.hover();
}
Button.prototype.background = function () {
    const el = this.selector;
    const value = this.properties.background;

    switch (value) {
        case 'green':
            el.style.backgroundColor = '#4CAF50';
            el.style.borderColor = '#4CAF50';
            el.style.color = '#ffffff';
            break;
        case 'blue':
            el.style.backgroundColor = '#008CBA';
            el.style.borderColor = '#008CBA';
            el.style.color = '#ffffff';
            break;
        case 'red':
            el.style.backgroundColor = '#f44336';
            el.style.borderColor = '#f44336';
            el.style.color = '#ffffff';
            break;
        case 'orange':
            el.style.backgroundColor = '#ffcc00';
            el.style.borderColor = '#ffcc00';
            el.style.color = '#ffffff';
            break;
        case 'gray':
            el.style.backgroundColor = '#e7e7e7';
            el.style.borderColor = '#e7e7e7';
            el.style.color = '#ffffff';
            break;
        case 'black':
            el.style.backgroundColor = '#555555';
            el.style.borderColor = '#555555';
            el.style.color = '#ffffff';
            break;
    }
    if (value.bgColor === undefined) {
        return false;
    } else {
        el.style.backgroundColor = value.bgColor;
        el.style.borderColor = value.bgColor;
    }
    if (value.fontColor === undefined) {
        return false;
    } else {
        el.style.color = value.fontColor;
    }
}
Button.prototype.hover = function () {
    const value = this.properties.hover;
    if (value === undefined) {
        return false;
    } else {
        this.selector.addEventListener('mouseover', function () {
            this.style.backgroundColor = value.bgColor;
            this.style.borderColor = value.bgColor;
        });
        this.selector.addEventListener('mouseout', () => {
            this.selector.style.backgroundColor = this.properties.background.bgColor;
            this.selector.style.borderColor = this.properties.background.bgColor;
        });
    }
    
}


/* test */
const btn = new Button('.przycisk', {
    background: 'gray'
});
const bt = new Button('.przycisk2', {
    background: {
        bgColor: '#333333',
        fontColor: '#ffffff'
    },
    hover: {
        bgColor: '#444444',
        fontColor: '#eeeeee'
    }
});
console.log(bt)
