import React, { Component } from 'react';
import { connect } from 'react-redux';

class FinalAnswer extends Component {
  render() {
    return (
      <div>
          <h1>Sample Redux Application</h1>
          <p>{this.props.TotalSum}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
    console.log("[FinalReview]",state);
    
    return {
        TotalSum: state.TotalSum
    };
  }
  
  
  export default connect(
    mapStateToProps)(FinalAnswer);
