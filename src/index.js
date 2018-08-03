import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Modal from './components/Modal';


function addDMIcon() {

  const navElm = document.getElementById('react-root').querySelector('section > nav').lastChild.lastChild.lastChild
    .lastChild.lastChild;
    if (navElm.children.length < 4) {
      const dmElm = navElm.lastChild.cloneNode(true);
      dmElm.addEventListener("click", handleClick)
      dmElm.lastChild.style.backgroundPosition = '-413px -181px';
      dmElm.lastChild.href="#";
      navElm.appendChild(dmElm);
      console.log(navElm)
      console.log(dmElm)
    }
}

const rootElm = document.createElement('div');
console.log(rootElm)
rootElm.addEventListener('click', closeModal)

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.text === 'report_back') {
      addDMIcon();
    }
});


document.body.appendChild(rootElm);

function closeModal(e) {
  if (e.target.className == "modal")
    ReactDOM.render(<App modalIsOpen={false}/>, rootElm);

}

function handleClick(e){
  ReactDOM.render(<App modalIsOpen={e}/>, rootElm);
}






module.hot.accept();
