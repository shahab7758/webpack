 import _ from 'lodash';
import './style.css';
import Pet from './pet.jpeg'

 function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // add image 

  const myPet = new Image()
  myPet.src = Pet
  element.appendChild(myPet)

   return element;
 }

 document.body.appendChild(component());