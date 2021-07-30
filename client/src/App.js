// import logo from './logo.svg';
import './App.css';
import ServiceContainer from './components/ServicesContainer'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/Signin'
import SignUp from './components/Signup'


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
