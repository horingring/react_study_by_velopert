import React, {Component} from 'react';
import facebookLogo from './HeaderImg/facebookLogo.jpg';

class HeaderLogo extends Component {
    render(){
        return (
            <div className="headerMember" id="headerLogoBox">
                <img 
                  src={facebookLogo} 
                  alt="페이스북 로고" 
                  className="headerFacebookLogo"></img>
            </div>
        );
    }
}

export default HeaderLogo;