import React,{Component} from 'react';
import './Home.css';
import { connect } from 'react-redux';
class Home extends Component{
    constructor(props) {
        super(props);
      }

    productHandler(){
      this.props.history.push("/productlist");
    }
    render(){
                let types = Object.keys(this.props.product);
        console.log("types",types);
        return (<div>
           {
               this.props.product.books.map((element)=>{  
                return (<img onClick={()=> this.productHandler()} className="product" style={{height: '20em'}} key={element.id} src={element.imageurl}/>)})
           }
           {
               this.props.product.mobiles.map((element)=>{  
                return (<img onClick={this.productHandler} className="product" style={{height: '20em'}} key={element} src={"./mobile/"+element+".jpg"}/>)})
           }
           {
              this.props.product.vegitables.map((element)=>{  
                return (<img onClick={this.productHandler} className="product" style={{height: '20em'}} key={element} src={"./vegitables/"+element+".jpg"}/>)})
           }
        </div>)
    }
}
function mapStateToProps(state) {
    console.log("[FinalReview]",state);
    
    return {
        product: state.product
    };
  }

  export default connect(
    mapStateToProps)(Home);
