import logo from './logo.svg';
import './App.css';
import NavBar from './Layout/NavBar';
import HomePage from './Pages/HomePage';
import AddUser from './Users/AddUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import EditUser from './Users/EditUser';
import UserDetail from './Users/UserDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/adduser" element={<AddUser/>}/>
          <Route exact path='/edituser/:id' element={<EditUser/>} />
          <Route exact path='/userdetail/:id' element={<UserDetail/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
