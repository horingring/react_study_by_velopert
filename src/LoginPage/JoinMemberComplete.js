import React,{Component} from 'react';

class JoinMemberComplete extends Component{
    render(){
        return (
            <div>
                <h2>회원가입 완료</h2>
                <p>이제 로그인하실 수 있습니다!</p>
                <p>x 초 후 페이지가 전환됩니다.</p>
                <button 
                  onClick={function(){
                      this.props.onChangeContentMode('contentMode');
                  }.bind(this)}>초기화면으로</button>
            </div>
        );
    }
}

export default JoinMemberComplete;