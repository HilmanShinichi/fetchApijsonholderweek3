import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Redux from './Container/Redux'
import Home from './Container/Home';
import EditUsersComp from './components/EditUsersComp/EditUsersComp';

function App() {
  return (
     <Router>
    <Routes>
      <Route path='/redux' element={<Redux/>} />
      <Route path='/edit' element={<EditUsersComp/>} />
      <Route path='/' element={<Home/>} />
      </Routes>
  </Router>
  );
}

export default App;
