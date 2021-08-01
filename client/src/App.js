// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/signin';
import SignUp from './components/signup';
import ServiceContainer from './components/servicesContainer';
import 'semantic-ui-css/semantic.min.css';
// import 'animate.compat.css';

function App() {

  return (
    <div className="App">
      <Router>
      <NavBar />
        <Switch>
          <Route path='/' exact component={()=><ServiceContainer />}/>
          {/* <Route path='/profile' component={()=><Profile />}/> */}
          <Route path='/Signup' component={()=><SignUp />}/>
          <Route path='/Signin' component={()=><SignIn />}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
