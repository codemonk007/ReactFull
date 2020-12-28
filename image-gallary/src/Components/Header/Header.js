import React,{Component} from 'react';
import * as css from './Header.module.css';
import Axios from "axios";

class Header extends Component{
    state = { pList: [] };
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
render(){
    return(
        <div>
            <ul className={css.ullist}>
                <li className={css.liList}>Home</li>
                <li className={css.liList}>Specific</li>
            </ul>
        </div>
    )
}

}
export default Header;