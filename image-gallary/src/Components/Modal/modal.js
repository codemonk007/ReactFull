import React from 'react'; 
import * as css from './modal.module.css'
const Modal = ({ handleClose, productDetails, show, children }) => {
    const showHideClassName = show ? css.displayblock :css.displaynone;
  
    return (
      <div id={css.modal} className={showHideClassName}>
        <section id={css.modalmain} className={css.modalmain}>
          <div>
            <div className={css["padding-left"]}>
              <img src={productDetails.productImage}/>
            </div>
            <div className={css["padding-left"]}>
            <pre><label>Product Name : </label><strong>{productDetails.productName}</strong></pre>
            </div>
            <div className={css["padding-left"]}>
            <pre><label>Product Catagory : </label><strong>{productDetails.productCategory}</strong></pre>
            </div>
            <div className={css["padding-left"]}>
            <pre><label>Product Price : </label><strong>{productDetails.productPrice}</strong></pre>
            </div>
            <button className={css.marginleft} onClick={handleClose}>Close</button>
          </div>
        </section>
      </div>
    );
  };

  export default Modal;