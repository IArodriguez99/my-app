import './App.css';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Planets from './components/Planets'

function App() {
  return (
      <div className="App">
        <Nav />
        <div className="content">
            <Planets />   
        </div>
      </div>
  );
}

export default App;
