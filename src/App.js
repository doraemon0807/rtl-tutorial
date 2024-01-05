import logo from "./logo.svg";
import "./App.css";
import MyPage from "./component/MyPage";
import GetBy from "./component/GetBy";
import UserList from "./component/UserList";
import Login from "./component/Login";
import TodoList from "./component/ToDoList";

function App() {
  return (
    <div className="App">
      <MyPage user={{ name: "Kim" }} />
      <GetBy />
      <UserList users={["Tom", "Jane", "Mike"]} />
      <Login />
      <TodoList />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
