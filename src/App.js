import logo from './logo.svg';
import './App.css';
import {Link, Outlet} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <h1>Users App </h1>
      <nav
        style={{
          display:'flex',
          border:'2px solid black'
        }}
        >
          <Link to='/Users'>Users</Link> - {' '}
          <Link to='/About'>About</Link> - {' '}
          <Link to='/NewUser'>New Users</Link> - {' '}
          <Link to='/Contact'>Contact</Link> - {' '}
          <Link to='/FAQ'>FAQ</Link> - {' '}
        </nav>
        <Outlet />  
    </div>
  );
}

export default App;
