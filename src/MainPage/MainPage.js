import React, {Component, Fragment} from 'react';
import Header from './Header/Header';
import GlobalContainer from './GlobalContainer/GlobalContainer';
import FriendList from './FriendList/FriendList';


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
                <FriendList></FriendList>
            </Fragment>
        );
    }
}

export default MainPage;