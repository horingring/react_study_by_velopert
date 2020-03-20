import React,{Component} from 'react';
import bigFacebookLogo from './LoginPageImg/facebook_wordmark.gif';

class FacebookBanner extends Component{
    render(){
        return(
            <div className="facebookBanner">
                <div className="bannerImgBlock">
                    <img 
                      src={bigFacebookLogo} 
                      alt="로그인페이지 facebook 로고"></img>
                </div>
                <div className="bannerBlock"></div>
            </div>
        );
    }
}

export default FacebookBanner;