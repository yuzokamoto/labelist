import React from 'react';
import styled from 'styled-components';

import LoginPage from './components/LoginPage';
import LoggedPage from './components/LoggedPage';

const Labelist = styled.div`
  background: #323B3F;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

class App extends React.Component {

  state = {
    taskList: [],
    taskFilter: "none",
    isLoggedIn: false
  }

  componentDidMount = () => {
    let loginStatus = localStorage.getItem('isLoggedIn')
    if (loginStatus) {
      this.setState({isLoggedIn: JSON.parse(loginStatus)});
    }

    let taskListStatus = localStorage.getItem('taskList');
    if (taskListStatus) {
      this.setState({taskList: JSON.parse(taskListStatus)})
    }

    let taskFilterStatus = localStorage.getItem('taskFilter');
    if (taskFilterStatus) {
      this.setState({taskFilter: taskFilterStatus});
    }
  }

  componentDidUpdate = () => {
    localStorage.setItem('isLoggedIn', JSON.stringify(this.state.isLoggedIn));
    localStorage.setItem('taskList', JSON.stringify(this.state.taskList));
    localStorage.setItem('taskFilter', this.state.taskFilter);
  }

  logInOut = () => {
    this.setState({isLoggedIn: !this.state.isLoggedIn});
  }

  addTask = (taskInput) => {
    if (taskInput !== "") {
      const newTask = {
        id: Date.now(),
        name: taskInput,
        completed: false
      };

      const newTaskList = [...this.state.taskList, newTask];

      this.setState({taskList: newTaskList});
    } else {
      alert("Erro: informe um nome para a tarefa antes de adicioná-la.");
    }
  }

  crossTask = (e) => {
    const id = Number(e.target.parentElement.id);
    const newTaskList = this.state.taskList.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    })

    this.setState({taskList: newTaskList});
  }

  removeTask = (e) => {
    const id = Number(e.target.parentElement.id);
    const newTaskList = this.state.taskList.filter((task) => {
      return task.id !== id;
    });

    this.setState({taskList: newTaskList});
  }

  changeFilter = (e) => {
    this.setState({taskFilter: e.target.value});
  }

  render() {
    return (
      <Labelist>
          {this.state.isLoggedIn
          ? <LoggedPage
            logInOutHandler={this.logInOut}
            taskList={this.state.taskList}
            addTaskHandler={this.addTask}
            crossTaskHandler={this.crossTask}
            removeTaskHandler={this.removeTask}
            taskFilter={this.state.taskFilter}
            changeFilterHandler={this.changeFilter}
          />
          : <LoginPage
            logInOutHandler={this.logInOut}
          />}
      </Labelist>
    );
  }
}

export default App;
