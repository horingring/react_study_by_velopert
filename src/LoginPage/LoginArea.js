import React,{Component} from 'react';
import './LoginArea.css';

class LoginArea extends Component{
    render(){
        return(
            <div className="loginArea">
                <div className="loginFormBox">
                    <form 
                      action="./"
                      method="post"
                      onSubmit={function(e){
                          e.preventDefault();
                          this.props.onLogin('login');
                      }.bind(this)}>
                        <div className="floatBox">
                            <p>아이디 또는 이메일</p>
                            <input type="text" name="id" placeholder="ID를 입력하세요"></input>
                        </div>
                        <div className="floatBox">
                            <p>비밀번호</p>
                            <input type="password" name="pw" placeholder="PW를 입력하세요"></input>
                        </div>
                        <div className="floatBox">
                            <p style={{color:'#4267b2'}}>block</p>
                            <input type="submit" value="로그인"></input>
                        </div>
                    </form>
                </div>
                <div 
                  className="joinMemberBtn"
                  onClick={function(){
                      this.props.onChangeContentMode('joinMemberMode');
                  }.bind(this)}
                  >회원가입</div>
            </div>
        );
    }
}

export default LoginArea;