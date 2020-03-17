import React, {Component} from 'react';
import './Header.css';
import HeaderLogo from './HeaderLogo';
import HeaderSearchBar from './HeaderSearchBar';
import HeaderQuickBar from './HeaderQuickBar';
import HeaderSettingBox from './HeaderSettingBox';


class Header extends Component {
    render(){
        return (
            <div className="headerMain">
                <div className="div100"></div>
                <HeaderLogo></HeaderLogo>
                <div className="div100"></div>
                <HeaderSearchBar></HeaderSearchBar>
                <div className="div400"></div>
                <HeaderQuickBar></HeaderQuickBar>
                <div className="div100"></div>
                <HeaderSettingBox></HeaderSettingBox>
            </div>
        );
    }
}

export default Header;