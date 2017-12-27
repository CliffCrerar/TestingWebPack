import _ from 'lodash';



function component() {
    var element = document.createElement('div');


    // lodash is not imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());