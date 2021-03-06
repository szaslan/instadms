import React, { Component } from 'react';
import css from './Modal.css';

class Modal extends Component {
  constructor(props){
    super(props);
  }
  render() {
     return (
      <div className="modal">
      <div className="modal__inner">{this.props.children}</div>
    </div>
     )
  }
}

export default Modal;
