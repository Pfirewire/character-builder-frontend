import logo from './logo.svg';
import './App.css';
import Sitebar from "./layouts/sitebar/Sitebar";

function App() {
  return (
    <div className="App">
      <Sitebar />
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
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto corporis dignissimos dolorem doloremque ipsa itaque molestias nihil nulla numquam quidem, reiciendis rerum sit. Assumenda consequatur dolorem libero officia sint.</p>
    </div>
  );
}

export default App;
