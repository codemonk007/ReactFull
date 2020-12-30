import React from 'react'; 
import './modal.css';
import { connect } from 'react-redux';

const Modal = ({ handleClose, productDetails, show }) => {
    const showHideClassName = show ? 'displayblock' :'displaynone';
  console.log("Hello");
  console.log(productDetails);      
  if(productDetails){
    return (
      <div id='modal' className={showHideClassName}>
        <section id='modalmain' className='modalmain'>
          <div>
            <div className="padding-left margin-bottom-15">
              <img style={{width:'28em'}} src={productDetails.imageurl}/>
            </div>
            <div className="padding-left">
            <label>Product Name : </label><strong>{productDetails.name}</strong>
            </div>
            <div className="padding-left">
            <label>Product Catagory : </label><strong>{productDetails.catagory}</strong>
            </div>
            <div className="padding-left">
            <label>Product Price : </label><strong>{productDetails.Price}</strong>
            </div>
            <button className="btn btn-danger buttonDetails" onClick={handleClose}>Close</button>
            <button className="btn btn-success buttonDetails" onClick={handleClose}>Add</button>
          </div>
        </section>
      </div>
    );
  }  
  return null;
  };
  function mapStateToProps(state) {
    console.log("[Modal]", state);
    return {
      productDetails: state.productDetails
    };
}
export default connect(
  mapStateToProps)(Modal);
