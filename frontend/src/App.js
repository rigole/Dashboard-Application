import logo from './logo.svg';
import './App.css';
import NavBar from './Layout/NavBar';
import HomePage from './Pages/HomePage';
import AddUser from './Users/AddUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/adduser" element={<AddUser/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
