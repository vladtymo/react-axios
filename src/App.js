import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />

      {/* <footer>Copyright 2022</footer> */}
    </div>
  );
}

export default App;
