import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function addDMIcon() {
  const navElm = document.getElementById('react-root').querySelector('section > nav').lastChild.lastChild.lastChild
    .lastChild.lastChild;
    if (navElm.children.length < 4) {
      const dmElm = navElm.lastChild.cloneNode(true);
      dmElm.addEventListener('click', console.log('clicked DM icon'), false)
      dmElm.lastChild.style.backgroundPosition = '-413px -181px';
      navElm.appendChild(dmElm);
    }
}

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.text === 'report_back') {
      addDMIcon();
      // <DMIcon />
    }
});

const rootElm = document.createElement('div');

document.body.appendChild(rootElm);

ReactDOM.render(<App />, rootElm);

module.hot.accept();
