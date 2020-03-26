import React,{Component} from 'react';
import SideBar1 from './SideBar/SideBar1';
import './GlobalContainer.css'

class GlobalContainer extends Component {
    render(){
        return(
            <div id="globalContainer">
                <SideBar1></SideBar1>
            </div>
        );
    }
}

export default GlobalContainer;