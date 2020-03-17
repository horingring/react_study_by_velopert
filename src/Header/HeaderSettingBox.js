import React, {Component} from 'react';
import triangle from './HeaderImg/triangle.png'

class HeaderSettingBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            mode : 'off'
        }
    }

    render(){
        let settingBox = null;
        if(this.state.mode === 'on'){
            settingBox = (
                <div id="headerSettingBox">
                    <div class="headerSettingBoxMember">내 그룹</div>
                    <hr class="hrLine"></hr>
                    <div class="headerSettingBoxMember">Facebook에서 광고하기</div>
                    <hr class="hrLine"></hr>
                    <div class="headerSettingBoxMember">활동로그</div>
                    <div class="headerSettingBoxMember">뉴스피드 기본설정</div>
                    <div class="headerSettingBoxMember">설정</div>
                    <hr class="hrLine"></hr>
                    <div class="headerSettingBoxMember">로그아웃</div>
                </div>
            );
        }else if(this.state.mode === 'off'){
            settingBox = null;
        }
        return (
            <div 
              className="headerMember" 
              id="headerSettingBoxBtn" 
              onClick={function(){
                this.setState({
                    mode : 'on'
                });
              }.bind(this)}>
                <img src={triangle} alt="셋팅박스 아이콘"></img>
                {settingBox}
            </div>
        );
    }
}

export default HeaderSettingBox;