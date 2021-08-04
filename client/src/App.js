import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/signin';
import SignUp from './components/signup';
import ServicesContainer from './components/servicesContainer';
import 'semantic-ui-css/semantic.min.css';
import Profile from './components/profile';

function App() {
  const [user, setUser] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [newUser, setNewUser] = useState({})
  // const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(userData => setUser(userData))
  }, [])

  useEffect(() => {
    const userId = localStorage.getItem("user_id")
    fetch(`http://localhost:3000/me?user_id=${userId}`)
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((newUser => setCurrentUser(newUser)))
      }
    })
  },[])


  return (
  <div className="App">
    <Router>
      <NavBar 
      setCurrentUser={setCurrentUser} 
      currentUser={currentUser} 
      />
        <Switch>
          <Route exact path='/'>
            <ServicesContainer user={user} currentUser={currentUser} />
          </Route>
          <Route path='/profile'>
          <Profile 
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          />
          </Route>
          <Route path='/Signup'>
            <SignUp setCurrentUser={setCurrentUser}/>
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
