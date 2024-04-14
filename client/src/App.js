// import logo from './logo.svg';
import './App.css';
import Header from './comps/header/Header';
import Nav from './comps/nav/Nav';

export default function App({inner}) {
  return (
    <div className="page">
      <Header/>
      <Nav/>
        {inner && <div className='centercontent'>{inner}</div>}
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}
