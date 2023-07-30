import logo from './logo.svg';
import './App.css';
import NavBar from './Layout/NavBar';
import HomePage from './Pages/HomePage';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePage/>
    </div>
  );
}

export default App;
