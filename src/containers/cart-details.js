import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import neckless  from '../images/neckless.jpg';


import { editCart } from '../actions/index';
import EditModal from '../containers/edit-modal';

class CartDetails extends Component {
    
    constructor(props) {
        super(props);
        
        this.onOpenModal = this.onOpenModal.bind(this);        
        //this.setIsOpen = this.setIsOpen.bind(this);
    }
    onOpenModal(){      
        this.props.editCart();        
    }
    
    render(){ 
        let subtitle = '';
        console.log('---',this.props.modal.isModalOpen)
        let edit_modal;
        if (this.props.modal.isModalOpen) {
            edit_modal = <EditModal flag={this.props.modal.isModalOpen} />;
        } 
        return (            
            <div className="wrapper">
                {edit_modal}               
                <div className="box box1">
                    <h1>Your Shopping Cart</h1>
                    <p>If the cart is empty, we shall again add products back to you</p>
                    <h2>1 ITEMS</h2>
                </div>
                <div className="box box2">
                    <div className="item-box">
                        <a href="#"><img src={neckless} width="150" /></a>
                    </div>                
                </div>
                <div className="box box3">
                    <div className="item-desc">
                        <div className="item-name"><h1>ITEM 5</h1></div>
                        <div>
                            <p className="item-size">Style: <span>Small</span></p>
                            <p className="item-color">Color: <span>Red</span></p>
                        </div>                    
                        <div className="cart-action">
                            <a className="item-edit"  onClick={this.onOpenModal}>Edit</a>|
                            <a className="item-del" href="">Remove</a>|
                            <a className="item-save" href="">Save for later</a></div>
                    </div>
                </div>
                <div className="box box4">
                    <div className="contact-support">
                        <div className="help"><p>Need help or have question?</p></div>
                        <div className="service"><p>Call customer service at 1-800-555-555</p></div>
                        <div className="return"><a href="#">Return or exchange policy</a></div>
                        
                    </div>
                </div>
                <div className="box box5">
                    <div className="cart-details">
                        <div className="promo-code"><p>Enter promotion code or gift card</p></div>
                        <div className="subtotal"><p>Sub total - <span><b>$14</b></span></p></div>
                        <div className="apply-promo"><p>Promotion code AJ10 applied <b>$5.9</b> </p></div>
                        <div className="shipping">
                            <h3>Estimated shipping</h3>
                            <p>
                                Your quality for free shipping because your oder is over <b>$550</b>
                            </p>
                        </div>
                        <div className="total">
                            <h3>Estimate total</h3>
                            <p>Tax will be applied during checkout</p>
                        </div>
                        <div className="total"><p>Sub total - <span><b>$8.1</b></span></p></div>                    
                    </div>
                </div>
            </div> 
        );
    }
}

function mapStateToProps(state){
    console.log(state)
    return {
        modal: state.modal
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({editCart},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);