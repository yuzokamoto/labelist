import React from 'react';
import styled from 'styled-components';

const LoggedSection = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    > * {
        flex: 1;
    }
    > nav {
        max-width: 20vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        > * {
            margin: 1rem;
        }
        > img {
            border-radius: 50%;
            width: 150px;
            height: auto;
            object-fit: cover;
        }
        > h2 {
            color: white;
        }
        > button {
            color: white;
            background: #f24429;
            font-size: 1rem;
            font-weight: bold;
            border-radius: 5px;
            border: none;
            padding: .3rem .6rem;
        }
    }
    > main {
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        > h1 {
            font-style: italic;
            margin: 4vh;
        }
        > div {
            width: 300px;
            display: flex;
            flex-direction: column;
            margin-top: 2vh;
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
            > select {
                font-size: 1.6rem;
                padding: .3rem 0;
            }
            > hr {
                margin: 2rem 0;
            }
            li {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 1rem 0;
                padding: .5rem;
                border-bottom: 1px solid white;
                > p {
                    cursor: pointer;
                    padding: 0 .4rem;
                }
                > span {
                    cursor: pointer;
                    padding: .1rem .4rem;
                }
            }
        }
    }
`;

const TaskItem = styled.li`
    > p {
        text-decoration: ${props => (props.completed? 'line-through' : 'none')};
    }
`;

export default class LoggedPage extends React.Component {
    
    state = {
        taskInput: ""
    }

    taskInputChange = (e) => {
        this.setState({taskInput: e.target.value});
    }

    taskInputEnter = (e) => {
        if (e.key === "Enter") {
            this.props.addTaskHandler(this.state.taskInput);
            this.setState({taskInput: ""})
        }
    }

    render() {

        const taskList = this.props.taskList.map((task) => {
            let taskListContent;
            switch (this.props.taskFilter) {
                case "in progress":
                    if (task.completed === false) {
                        taskListContent = (
                            <TaskItem id={task.id} key={task.id} completed={Number(task.completed)}>
                                <p onClick={this.props.crossTaskHandler}>{task.name}</p>
        
                                <span onClick={this.props.removeTaskHandler}>x</span>
                            </TaskItem>
                        );
                    } else { taskListContent = ""; }
                    break;
                case "completed":
                    if (task.completed === true) {
                        taskListContent = (
                            <TaskItem id={task.id} key={task.id} completed={Number(task.completed)}>
                                <p onClick={this.props.crossTaskHandler}>{task.name}</p>
        
                                <span onClick={this.props.removeTaskHandler}>x</span>
                            </TaskItem>
                        )
                    } else { taskListContent = ""; }
                    break;
                default:
                    taskListContent = (
                        <TaskItem id={task.id} key={task.id} completed={Number(task.completed)}>
                            <p onClick={this.props.crossTaskHandler}>{task.name}</p>
    
                            <span onClick={this.props.removeTaskHandler}>x</span>
                        </TaskItem>
                    )
            }
            return taskListContent;
        });

        return(
            <LoggedSection>
                <nav>
                    <img src="https://picsum.photos/200" alt="profile"/>
                    <h2>Username</h2>
                    <button onClick={this.props.logInOutHandler}>LOGOUT</button>  
                </nav>
                <main>
                    
                    <h1>Labelist Task Manager</h1>
                    <div>
                        <label>TASK</label>
                        <input onChange={this.taskInputChange} onKeyDown={this.taskInputEnter} value={this.state.taskInput}/>
                        <button onClick={() => {
                            this.props.addTaskHandler(this.state.taskInput);
                            this.setState({taskInput: ""});
                        }}>Add</button>
                        <label>FILTER</label>
                        <select onChange={this.props.changeFilterHandler} value={this.props.taskFilter}>
                            <option value="none">None</option>
                            <option value="in progress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                        <hr />
                        <ul>
                            {taskList}
                        </ul>
                    </div>
                </main>
            </LoggedSection>
        );
    }
}