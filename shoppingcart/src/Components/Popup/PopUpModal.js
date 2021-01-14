import React, { Component } from 'react';
import './popupmodal.css';
class PopupModal extends Component {
     checkModal = this.props.show ?'displayblock' : 'displaynone';
     constructor(props) {
        super(props);
    }
    render() {      
        this.checkModal = this.props.show ?'displayblock' : 'displaynone';
        return (
            <div className={this.checkModal}>
                <div id='modal' className="displayblock">
                    <section id='modalmain' className='modalmain padd'>
                        are you sure you want to proceed the order to checkout ?
           <div style={{ float: "right" }}>
                            <button className="btn btn-success">order</button>
                            <button className="btn btn-secondary" onClick={this.props.handleClose}>close</button>
                        </div>
                    </section>

                </div>
            </div>

        )
    }
}
export default PopupModal;