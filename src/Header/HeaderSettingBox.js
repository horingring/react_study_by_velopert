import React, {Component, Fragment} from 'react';
import triangle from './HeaderImg/triangle.png'

class HeaderSettingBox extends Component {
    render(){

        let settingBox = null;
        if(this.props.mode === 'on'){
            settingBox = (
                <div id="headerSettingBox">
                    <div className="headerSettingBoxMember">내 그룹</div>
                    <hr className="hrLine"></hr>
                    <div className="headerSettingBoxMember">Facebook에서 광고하기</div>
                    <hr className="hrLine"></hr>
                    <div className="headerSettingBoxMember">활동로그</div>
                    <div className="headerSettingBoxMember">뉴스피드 기본설정</div>
                    <div className="headerSettingBoxMember">설정</div>
                    <hr className="hrLine"></hr>
                    <div className="headerSettingBoxMember">로그아웃</div>
                </div>
            );
        }else if(this.props.mode === 'off'){
            settingBox = null;
        }

        return (
            <Fragment>
                <div 
                className="headerMember" 
                id="headerSettingBoxBtn" 
                onClick={function(){
                    let _mode = null;
                    this.props.mode === 'on'
                        ? _mode = 'off'
                        : _mode = 'on' 
                    this.props.onChangeMode(_mode);
                }.bind(this)}>
                    <img src={triangle} alt="셋팅박스 아이콘"></img>
                    
                </div>
                {settingBox}
            </Fragment>
        );
    }
}

export default HeaderSettingBox;