import React, {Component} from 'react';
import triangle from './HeaderImg/triangle.png'

class HeaderSettingBox extends Component {
    render(){
        return (
            <div className="headerMember" id="headerSettingBox">
                <img src={triangle} alt="셋팅박스 아이콘"></img>
            </div>
        );
    }
}

export default HeaderSettingBox;