import React, { Component } from 'react';
import Modal from './components/Modal';


class App extends Component {

  constructor(props){
    super();
    this.state = {
      modalIsOpen: true,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    if (e.target.className == "modal")
      this.setState({modalIsOpen: false})
  }
  
  render() {
    return (
      <div onClick={this.handleClick}>
        <Modal modalIsOpen={this.state.modalIsOpen}>Test</Modal>
      </div>
    )
  }
}


export default App;
