import React, {Component} from 'react';
import magnifier from './HeaderImg/magnifier.jpg';

class HeaderSearchBar extends Component {
    render(){
        return (
            <div className="headerMember" id="headerSearchBox">
                <div id="headerSearchBar">검색창</div>
                <div><img src={magnifier} alt="돋보기" id="headerMagnifierIcon"></img></div>
            </div>
        );
    }
}

export default HeaderSearchBar;