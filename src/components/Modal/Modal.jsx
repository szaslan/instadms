import React, { Component } from 'react';
import css from './Modal.css';

class Modal extends Component {
  constructor(props){
    super(props);
  }
  render() {
   if (this.props.modalIsOpen) {
     return (
      <div className="modal">
      <div className="modal__inner">{this.props.children}</div>
    </div>
     )
   }
     else return null;
  }
}

export default Modal;
