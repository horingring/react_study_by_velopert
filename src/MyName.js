import React, { Component } from 'react';

class MyName extends Component {
    // static defaultProps = {
    //     name : 'default Props 이름'
    // }
    render(){
        return (
            <div>
                안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
            </div>
        );
    }
}

MyName.defaultProps = {
    name : 'default Props 이름2'
};

export default MyName;