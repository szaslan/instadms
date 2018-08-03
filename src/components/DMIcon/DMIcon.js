function DMIcon() {
    const navElm = document.getElementById('react-root').querySelector('section > nav').lastChild.lastChild.lastChild
      .lastChild.lastChild;
      if (navElm.children.length < 4) {
        const dmElm = navElm.lastChild.cloneNode(true);
        // dmElm.addEventListener('click', console.log('clicked DM icon'))
        dmElm.lastChild.style.backgroundPosition = '-413px -181px';
        navElm.appendChild(dmElm);
      }
  }


  export default DMIcon;
  