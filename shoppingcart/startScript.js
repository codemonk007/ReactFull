var fs = require('fs');
path    = require('path');
let imagePaths = [];

function load(folderName) {
    if (!this.startFolder) this.startFolder = path.basename(folderName);

    fs.readdirSync(folderName).forEach((file) => {

        const fullName = path.join(folderName, file);
        const stat = fs.lstatSync(fullName);

        if (stat.isDirectory()) {
            //Recursively walk-through folders
            load(fullName);
        } else if (file.toLowerCase().indexOf('.jpeg')>-1) {           
            imagePaths.push(fullName.split('/').slice(1).join('/'));            
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
    return imagePaths;
}
const data = `module.exports = {
    carousal:{
        product:${JSON.stringify(load("./public/carousal/products"))}
    }
}
`
fs.writeFile("./assets/imageImportJson.js", data, 'utf8', (data)=> {
      console.log("The file was saved!");
    });
