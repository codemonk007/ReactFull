
import React, { Component } from 'react';
import * as fs from 'browserify-fs';
import './carousal.css';
var path = require('path');
class Carousal extends Component {
    state ={
        imagePaths:[]
    }
    LoadImages(folderName){
        let imagePaths =[];
        this.load(folderName);
        this.setState(
            {...this.state,imagePaths:imagePaths},
            () => console.log(this.state)
            )
    }
    load(folderName) {
        if (!this.startFolder) this.startFolder = path.basename(folderName);
        fs.readdirSync(folderName).forEach((file) => {
    
            const fullName = path.join(folderName, file);
            const stat = fs.lstatSync(fullName);
    
            if (stat.isDirectory()) {
                //Recursively walk-through folders
                this.load(fullName);
            } else if (file.toLowerCase().indexOf('.js')) {
                console.log(fullName);
                this.imagePaths.push(fullName);            
                //Grab path to JavaScript file and use it to construct the route
                // let dirs = path.dirname(fullName).split(path.sep);
                // const baseRoute = '/' + dirs.join('/');
                // console.log(dirs);  
                // console.log('Created route: ' + baseRoute + ' for ' + fullName);
                  
                // if (dirs[0].toLowerCase() === this.startFolder.toLowerCase()) {
                //     dirs.splice(0, 1);
                // }
            }
        });
    }
    render() {
        this.LoadImages("./public/carousal");
        console.log(this.state);
        
        return (
            <div className="footer">
                <p>hello</p>
            </div>
        )
    }
}
export default Carousal;