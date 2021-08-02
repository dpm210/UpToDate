import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/signin';
import SignUp from './components/signup';
import ServicesContainer from './components/servicesContainer';
import 'semantic-ui-css/semantic.min.css';


function App() {
  const [user, setUser] = useState([])
  const [currentUser, setCurrentUser] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(userData => setUser(userData))
  }, [])

  return (
  <div className="App">
    <Router>
      <NavBar />
        <Switch>
          <Route exact path='/'>
            <ServicesContainer user={user} />
          </Route>
          {/* <Route path='/profile' component={()=><Profile />}/> */}
          <Route path='/Signup'>
            <SignUp />
          </Route>
          <Route path='/Signin'>
            <SignIn setCurrentUser={setCurrentUser} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

//     <div className="App">
//       <Router>
//       <NavBar />
//         <Switch>
//           <Route path='/' exact component={()=><ServicesContainer user={user} />}/>
//           {/* <Route path='/profile' component={()=><Profile />}/> */}
//           <Route path='/Signup' component={()=><SignUp />}/>
//           <Route path='/Signin' component={()=><SignIn setCurrentUser={setCurrentUser} />}/>
//         </Switch>
//       </Router>
//     </div>
//   );
// }

//   )
// }

export default App;
