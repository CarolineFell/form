'use strict';

const header = document.getElementsByTagName('header');
let contactsHTML = document.createElement('div');
contactsHTML.className = 'contacts';
contactsHTML.innerHTML = 'Веб-интегратор "Компот"</br>+7(499)685-19-29</br>info@kompot.bz';
contactsHTML.setAttribute('style', 'text-align: right');
header.body.insertBefore(contactsHTML);