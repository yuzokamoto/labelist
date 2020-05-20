import React from 'react';
import styled from 'styled-components';

export default class LoggedPage extends React.Component {
    render() {
        return(
            <div>
                logged
                <button onClick={this.props.loginHandler}>logoff</button>
            </div>
        );
    }
}