import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { UserProvider } from './contexts/user.context';

function App() {
  return (
    // <UserProvider>
    <div className="App">
      <Navbar />
      <Outlet />

      {/* <footer>Copyright 2022</footer> */}
    </div>
    // </UserProvider>
  );
}

export default App;
