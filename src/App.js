import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Router> 
        <Header />
        <Main />
        <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
