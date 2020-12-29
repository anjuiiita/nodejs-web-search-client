
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';


function App() {
  
  return (
    <div className="App">
      <div>
      <h1>Registration</h1>
            <Registration />
      </div>
      <div>
      <h1>Login</h1>
            <Login />
      </div>
     
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <h1>Login</h1>
            <Login />
          </Route>

          <Route path="/registration">
            <h1>Registration</h1>
            <Registration />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
