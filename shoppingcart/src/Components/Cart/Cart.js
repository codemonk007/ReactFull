import React,{Component} from 'react';
import { connect } from 'react-redux';
class Cart extends Component{
    constructor(props) {
        super(props);
      }
    render(){
        console.log("[inside cart]",this.props.cartDetails);
      return <h1>Hi</h1>
    }
}
function mapStateToProps(state) {
    console.log("[Cart Details]",state);
    return {
        cartDetails: {...state.cartDetails}
    };
  }

  export default connect(
    mapStateToProps)(Cart);
