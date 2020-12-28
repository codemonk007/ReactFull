import React,{Component} from 'react';
import * as css from './Home.module.css';
import Axios from "axios";
import Modal from './../Modal/modal'
class Home extends Component{

    state = { pList: [],
        show: false,
    productDetails:{} };
    componentDidMount() {
      this.getData();
    }
    getData() {
      const endPoint =
        "https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json";
      Axios.get(endPoint)
        .then((res) => {
          this.setState({ pList: res.data });
          console.log("success", res.data);
        })
        .catch((err) => {
          console.log("error", err);
        });
    }
    ImageHandler(imageDetails){
        console.log(imageDetails);   
        this.setState({...this.state,show: true,productDetails:imageDetails });     
    }
    hideModal = () => {
        this.setState({...this.state,show: false });
      }
    render(){
        return(
            <div>
                <Modal show={this.state.show} productDetails={this.state.productDetails} handleClose={this.hideModal}>
                </Modal>
            {
                this.state.pList.map(element=>{
                    if(element.productImage){
                        return (
                            <span onClick={()=>this.ImageHandler(element)} key ={element.productId} className={css.elementstyle}>
                                <img className={css.imageind} src={element.productImage}></img>
                            </span>
                        )}
                        return null
                    })
            }  
            </div>
        )
    }
}
export default Home;