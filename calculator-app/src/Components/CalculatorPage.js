import React, { Component } from 'react';
import AdditionPage from './AdditionPage';
import SubtractionPage from './SubtractionPage';
import MultiplicationPage from './MultiplicationPage';
import DivisionPage from './DivisionPage';
import FinalAnswer from './FinalAnswer';


class CalculatorPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h1>addition</h1>
              <AdditionPage></AdditionPage>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
            <h1>subtraction</h1>
            <SubtractionPage/>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
            <h1>multiplication</h1>
            <MultiplicationPage/>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
            <h1>division</h1>
            <DivisionPage/>
            </div>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="card">
            <div className="card-body">
            <h1>Final Answer</h1>
            <FinalAnswer/>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default CalculatorPage;
