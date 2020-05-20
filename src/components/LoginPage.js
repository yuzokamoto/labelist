import React from 'react';
import styled from 'styled-components';

const LoginSection = styled.section`
    background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
    width: 20vw;
    min-width: 250px;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    > header {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        > h2 {
            font-weight: normal;
            font-style: italic;
            font-size: 80%;
        }
    }
    > div {
        flex: 3;
        width: 100%;
        padding: 0 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        > * {
            margin: .45rem 0;
        }
        > label {
            font-weight: bold;
            font-size: 1.1rem;
            margin-right: auto;
            margin-bottom: 0;
        }
        > input {
            border-radius: 5px;
            font-size: 1.6rem;
            width: 100%;
            height: 100%;
            max-height: 2.7rem;
            padding: .5rem;
            border: none;
        }
        > p {
            cursor: pointer;
            font-weight: bold;
            font-size: 1rem;
            font-style: italic;
            margin-left: auto;
        }
        > button {
            font-weight: bold;
            font-size: 1.3rem;
            width: 100%;
            height: 100%;
            max-height: 2.7rem;
            padding: .5rem;
            border-radius: 5px;
            outline: none;
            border: none;
            transition: all .2s ease;
        }
        > button:hover {
            background: lightgrey;
        }
    }
`

export default class LoginPage extends React.Component {
    render() {
        return(
            <LoginSection>
                <header>
                    <h1>Labelist</h1>
                    <h2>Task Manager</h2>
                </header>
                <div>
                    <label>USERNAME</label>
                    <input />
                    <label>PASSWORD</label>
                    <input />
                    <p>Forgot Password?</p>
                    <button onClick={this.props.loginHandler}>LOGIN</button>
                </div>
            </LoginSection>
        );
    }
}