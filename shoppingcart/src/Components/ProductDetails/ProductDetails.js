import React,{Component} from 'react';
import Modal from '../Modal/modal';
class ProductDetails extends Component{
    state = {
        show: false
    }
    hideModal = () => {
        this.setState({...this.state,show: false });
      }
    render(){
        console.log("Hello");
        
       return <Modal show={this.state.show}  handleClose={this.hideModal}>
       </Modal>
    }
}

export default ProductDetails;