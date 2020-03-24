import React,{Component} from 'react';

class JoinMemberArea extends Component{
    render(){
        return(
            <div>
                <h1>새 계정 만들기</h1>
                <p>빠르고 쉽습니다.</p>
                <form
                    action="./"
                    method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        //form의 ID, PW, NICK을 넘겨주는 로직
                        this.props.onChangeContentMode('joinMemberCompleteMode');
                    }.bind(this)}>
                    <p>
                        <label>ID
                        <input type="text" name="id" placeholder="ID를 입력하세요"></input>
                        </label>
                    </p>
                    <p>
                        <label>PW
                        <input type="password" name="pw" placeholder="PW를 입력하세요"></input>
                        </label>
                    </p>
                    <p>
                        <label>닉네임
                        <input type="text" name="nick" placeholder="닉네임을 입력하세요"></input>
                        </label>
                    </p>
                    <p>
                        <input type="submit" value="회원가입"></input>
                    </p>
                </form>
            </div>
        );
    }
}

export default JoinMemberArea;