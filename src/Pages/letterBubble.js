import React, { Component } from 'react';

class LetterBubble extends Component {
    render() {
    const { data } = this.props;
    return (
        <div>
        <span>{data.nickName}</span>
        <span>{data.letter}</span>
        </div>
    );
    }
}

export default LetterBubble;