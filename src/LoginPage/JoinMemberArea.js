import React,{Component} from 'react';

class JoinMemberArea extends Component{
    render(){
        return(
            <div>
                <h2>회원가입</h2>
                <form
                    action="./"
                    method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        //form의 ID, PW, NICK을 넘겨주는 로직
                        this.props.onChangeContentMode('joinMemberCompleteMode');
                    }.bind(this)}>
                    <input type="text" name="id" placeholder="ID를 입력하세요"></input>
                    <input type="password" name="pw" placeholder="PW를 입력하세요"></input>
                    <input type="text" name="nick" placeholder="닉네임을 입력하세요"></input>
                    <input type="submit" value="회원가입"></input>
                </form>
            </div>
        );
    }
}

export default JoinMemberArea;