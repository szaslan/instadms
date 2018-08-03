import React, { Component } from 'react';
import Modal from './components/Modal';


 

class App extends Component {

  constructor(props){
    super();
    this.state = {
      modalIsOpen: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }
  
  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.modalIsOpen !== prevState.modalIsOpen){
      return({modalIsOpen: nextProps.modalIsOpen})
    }else return null;
      
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if(prevProps.modalIsOpen!==this.props.modalIsOpen){
  //     //Perform some operation here
  //     this.setState({modalIsOpen: this.props.modalIsOpen});
  //   }
  // }

  handleClick(e){
    e.preventDefault();
    if (e.target.className === "modal")
      this.setState({modalIsOpen: false})
  }
  
  render() {
    return (
      <div>
        {this.state.modalIsOpen ?
          <div onClick={this.handleClick}>
            <Modal >Test</Modal>
          </div>
        :
          null
        }
      </div>
    )
  }
}


export default App;
