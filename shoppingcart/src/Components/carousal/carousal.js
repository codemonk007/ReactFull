
import React, { Component } from 'react';
import * as json from './../../../assets/imageImportJson';

import './carousal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faArrowRight } from '@fortawesome/fontawesome-free-solid';

class Carousal extends Component {
    index =0;
    state ={
        imgSrc:this.props.imageImports[0]
    }
    rotateLeft(){
        if(this.index > 0){
        this.index = this.index-1;
        this.setState({...this.state, imgSrc:this.props.imageImports[this.index]})
    }
    }
    rotateRight(){
        console.log(this.index);      
        console.log(this.props.imageImports);          
        if(this.index < this.props.imageImports.length-1){
            this.index = this.index+1;
            this.setState({...this.state, imgSrc:this.props.imageImports[this.index]})
            console.log(this.props.imageImports[this.index]);  
        }
    }
   
    render() {      
        console.log(this.props.imageImports);

        return (
            <div>
                <button type="button" 
                onClick={()=>this.rotateLeft()}
                className="btn btn-danger" id="buttonleft">
                    <FontAwesomeIcon icon={faArrowLeft} /></button>
                    <button type="button" 
                     onClick={()=>this.rotateRight()}
                    className="btn btn-danger" id="buttonRight">
                    <FontAwesomeIcon icon={faArrowRight} /></button> 
                 <img style={{"height": '350px',
                "width": '100%'}} src={`./${this.state.imgSrc}`} alt="no"></img>
            </div>
        )
    }
}
export default Carousal;