import React, { Component } from 'react';
import "./modal.css";
class Modal extends Component {
  constructor(props){
    super(props);
  }

  render(){
    
    if(this.props.imageCSS){
      this.section="";
      this.showHideClassName = this.props.show ? "modalImage display-block" : "modalImage display-none";
    }
    else{
      this.section="modal-main";
      this.showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
    }
    return (
      <div className={this.showHideClassName}>
        <section className={this.section}>
          {this.props.children}
          
        </section>
      </div>
    );
  }
};
export default Modal;