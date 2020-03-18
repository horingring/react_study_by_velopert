import React, {Component,Fragment} from 'react';
import './Header.css';
import HeaderLogo from './HeaderLogo';
import HeaderSearchBar from './HeaderSearchBar';
import HeaderQuickBar from './HeaderQuickBar';
import HeaderSettingBox from './HeaderSettingBox';


class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            mode : 'off'
        }
    }

    render(){
        return (
            <Fragment>
            <div className="headerMain">
                <div className="div100"></div>
                <HeaderLogo></HeaderLogo>
                <div className="div100"></div>
                <HeaderSearchBar></HeaderSearchBar>
                <div className="div400"></div>
                <HeaderQuickBar></HeaderQuickBar>
                <div className="div300_right"></div>
                <HeaderSettingBox 
                    mode={this.state.mode}
                    onChangeMode={function(_mode){
                        this.setState({
                            mode : _mode
                        });
                    }.bind(this)}> 
                </HeaderSettingBox>
            </div>
            <div className="testDivForScroll"></div>
            </Fragment>
        );
    }
}

export default Header;