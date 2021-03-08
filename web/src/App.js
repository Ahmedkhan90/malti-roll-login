// import logo from './logo.svg';
import './App.css';
// import axios from "axios";
// import ReactDom from "react-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Signup from './component/signup/signup';
import Login from './component/login/login';
import Forget1 from './component/forget1/forget1';
import Forget2 from './component/forget2/forget2';

function App() {
  return (<>
    <Router>

    <nav>
      <ul>
        <li>
          <Link to="/">login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/forget1">Forget Password Step 1</Link>
        </li>
        <li>
          <Link to="/forget2">Forget Password Step 2</Link>
        </li>
      
      </ul>
    </nav>
    <Switch>
    <Route exact={true} path="/">
            <Login />
          </Route>

          

          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/forget1">
            <Forget1 />
          </Route>
          <Route path="/forget2">
            <Forget2 />
          </Route>

        </Switch>

    </Router>
  </>);
}

export default App;
