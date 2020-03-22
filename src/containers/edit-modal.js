import React, { Component } from 'react';
import Modal from 'react-modal';

import neckless  from '../images/neckless.jpg';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '50%'
    }
  };
Modal.setAppElement("#root")

export default class EditModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen:false
        }
        this.myRef = React.createRef();

        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        console.log('Modal--->',this.props.flag)
        //this.toggle_modal = this.props.modal.flag;
    }
    afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }
    
    closeModal(){
        this.setState({modalIsOpen:!this.props.flag});
    }
    render(){
        return (
            <Modal
                isOpen={this.props.flag}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >        
                <button onClick={this.closeModal}>close</button>
                <div className="product-details">
                    <div className="item-box">
                        <p>ITEM 5</p>
                        <p>$14</p>
                        <p>Small</p>
                        <p>
                            <a className="btn btn-default first"></a>
                            <a className="btn btn-default second"></a>
                            <a className="btn btn-default third"></a>
                        </p>
                        <p>Red</p>
                        <p>
                            <a className="btn btn-default">Edit</a>
                        </p>
                    </div>
                    <div className="product-image">
                        <a href="#"><img src={neckless} width="200" /></a>
                    </div>
                </div>
            </Modal>
        )
    }
}