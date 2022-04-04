import './App.css';

import {createBrowserHistory} from "history";
import {Router} from "react-router-dom";/* 1 */
import Routes from "./Routes";



const browserHistory = createBrowserHistory()

function App() {
  return (

      <Router history={browserHistory}>
        <Routes/>
      </Router>

    
   
  );
}

export default App;
