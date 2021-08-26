import logo from './logo.svg';
import './App.css';
import CNavbar from './components/CNavbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Expense from './pages/Expense';
import {
  Switch,Route,
  BrowserRouter as Router,
  Redirect
  
} from "react-router-dom";

const authentication={
  isLoggedIn:false,
  Auth:()=>{
    this.isLoggedIn=true
  },
  getLoginStatus(){
    return this.isLoggedIn;
  }
}


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
  {...rest}
  render={props =>
  authentication.getLoginStatus() ? (
  <Component {...props} />
  ) : (
  <Redirect
  to={{
  pathname: "/login"
  }}
  />
  )
  }
  />
  );
function App() {
  return (
    <Router>

<CNavbar />
      <Switch>
      
        <Route path="/login" component={Login} />
         
        
        <Route path="/reg" component={Register} />

        <PrivateRoute path="/" component={Expense } />

        </Switch>
      

    </Router>
  );
}

export default App;
