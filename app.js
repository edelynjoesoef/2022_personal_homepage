'use strict'
//queryselector is basically saying if we do something to that button which in this case
// is the button with the id= dark-mode, it will do something 
// however it only resturns the first element within that document that matches 
// the specified selector, or group of slectors
// so if we put another tag with the same id/selector, this fucntion will not apply
// unless you use querySelectorAll or querySelector

$(window).on('load', () => {
    //const switchButton = document.querySelector('.btn') //this refers to the one in about section 
    const switchButton = document.getElementById('dark-mode'); /*both code works*/

    //console.log(switchButton);

    switchButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        //toggle is basically going back and forth from the class or id specified in html doc/css to another class or id
        //basically we want that class to toggle whenever that button (switchButton) is clicked

        //we're creating conditional statements so that it can toggle between light and dark mode
        let currentClassName = document.body.className;

        console.log(this.textContext);

        if (currentClassName == 'dark-mode') {
            switchButton.innerText='Let there be light'}
        else {switchButton.innerText='Let there be dark'} //inner text or HTML both work, HTML works because there is no HTML other than the text
    });
});