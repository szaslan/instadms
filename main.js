const parent = document.querySelector("body").children[0].children[1].children[1].children[1].children[0].children[0].children[2].children[0];
const elm = parent.lastChild.cloneNode(true);
elm.children[0].style.backgroundPosition = '-413px -181px';
parent.appendChild(elm);