import React, {Component} from 'react';
import manIcon from './HeaderImg/manIcon.jpg';

class HeaderQuickBar extends Component {
    render(){
        return (
            <div className="headerMember" id="headerQuickBar">
                <div className="headerMemberVerticalPosition" id="headerMyPage">
                    <span><img src={manIcon} alt="내 얼굴" id="headerMyPageFace"></img></span>
                    <span id="headerMyPageName">horingring</span>
                </div>
                <div className="headerDivisionBar">|</div>
                <div className="headerMemberVerticalPosition" id="headerHomeBtn">홈</div>
            </div>
        );
    }
}

export default HeaderQuickBar;