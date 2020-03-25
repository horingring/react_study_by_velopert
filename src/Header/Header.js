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
                <HeaderLogo></HeaderLogo>
                <HeaderSearchBar></HeaderSearchBar>
                <HeaderQuickBar></HeaderQuickBar>
                < HeaderSettingBox
                    mode={this.state.mode}
                    onChangeMode={function(_mode){
                        this.setState({
                            mode : _mode
                        });
                    }.bind(this)} 
                    onLogin={function(){
                        this.props.onLogin();
                    }.bind(this)}>
                </HeaderSettingBox>
            </div>
            <div className="testDivForScroll"></div>
            </Fragment>
        );
    }
}

export default Header;