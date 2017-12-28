import _ from 'lodash';
import './style.css';
import Icon from './city.jpg';

function component() {
    var element = document.createElement('div');

    // lodash is not imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    //add image to existing div
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}
document.body.appendChild(component());