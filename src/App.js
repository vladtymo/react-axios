import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div>Logo</div>
        <nav>
          <Link to="/home" className="menu-item">Home</Link>
          <Link to="/users" className="menu-item">Users</Link>
          <Link to="/about" className="menu-item">About</Link>
        </nav>
      </header>

      <Outlet />

      {/* <footer>Copyright 2022</footer> */}
    </div>
  );
}

export default App;
