import React, {Component, Fragment} from 'react';
import Header from './Header/Header';
import GlobalContainer from './GlobalContainer/GlobalContainer';
import FriendCategory from './FriendCategory/FriendCategory';


class MainPage extends Component{
    render(){
        return(
            <Fragment>
                <Header
                    onLogin={function(){
                        this.props.onLogin();
                    }.bind(this)}>
                </Header>
                <GlobalContainer></GlobalContainer>
                <FriendCategory></FriendCategory>
            </Fragment>
        );
    }
}

export default MainPage;