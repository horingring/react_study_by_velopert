import React,{Component} from 'react';
import FacebookBanner from './FacebookBanner';
import LoginArea from './LoginArea';
import LoginPageContent from './LoginPageContent';
import JoinMemberArea from './JoinMemberArea';
import JoinMemberComplete from './JoinMemberComplete';
import './LoginPage.css';

class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            contentMode : 'contentMode'
        };
    }

    render(){
        var contentPage = null;
        if(this.state.contentMode === 'contentMode'){
            contentPage = (
                <LoginPageContent></LoginPageContent>
            );
        }else if(this.state.contentMode === 'joinMemberMode'){
            contentPage = (
                <JoinMemberArea
                    onChangeContentMode={function(_contentMode){
                        this.setState({
                            contentMode : _contentMode
                        });
                    }.bind(this)}></JoinMemberArea>
            );
        }else if(this.state.contentMode === 'joinMemberCompleteMode'){
            contentPage = (
                <JoinMemberComplete 
                    onChangeContentMode={function(_contentMode){
                        this.setState({
                            contentMode : _contentMode
                        });
                    }.bind(this)}></JoinMemberComplete>
            );
        }
        return(
            <div>
                <FacebookBanner></FacebookBanner>
                <div className="exceptBannerArea">
                    <LoginArea 
                        onChangeContentMode={function(_contentMode){
                            this.setState({
                                contentMode : _contentMode
                            });
                        }.bind(this)}></LoginArea>
                    {contentPage}
                </div>
            </div>
        );
    }
}

export default LoginPage;