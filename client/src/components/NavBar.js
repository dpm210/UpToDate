import React from "react";
import {Link} from 'react-router-dom';
import image from '../images/up.png'
import {useHistory} from 'react-router-dom'


function NavBar({currentUser, setCurrentUser, handleSignOut, search, setSearch, filteredservice}){
    
    const history = useHistory();
    
    function handleSignOut(){
        fetch(`http://localhost:3000/signout`, {
        method: "DELETE",
    })
    localStorage.removeItem("user_id")
     setCurrentUser([]);
     history.push('/signin')
 }

    return(
        <div>
            <nav id="navbar" className="ui inverted segment">
            {Object.keys(currentUser).length > 0 ? ( 
                <> 
                <Link to='/'>
                    <div className='logo-div'>
                        <img src={image} className='logo' alt='logo'></img>
                        <h3 className='logo-name'>UPtoDate</h3>
                    </div>
                </Link>
                <Link to='/'>
                <button id="nav-button"className='ui violet button'>Home</button>
                </Link>
               
                <Link to='/profile'>
                <button id="nav-button"className='ui violet button'>Profile</button>
              
                </Link>
                <button onClick={handleSignOut} id="nav-button" className='ui violet button'>Sign Out</button>
               
                <div id="searchbar" className='ui input'> 
                <input onChange={(e) => setSearch(e.target.value)} 
                type="text" 
                value={search}
                placeholder="Search..."/>
                </div>
                <div>
                <h3 id="welcome">Hi,</h3>
                </div>
                 </>
                ) :  ( 
                  <>  
                  <Link to='/signin'>
                    <div className='logo-div'>
                        <img src={image} className='logo' alt='logo'></img>
                        <h3 className='logo-name'>UPtoDate</h3>
                    </div>
                </Link>
                <Link to='/signin'>
                <button id="nav-button"className='ui violet button'>Signin</button>
                </Link>

                <Link to='/signup'>
                <button id="nav-button"className='ui violet button'>Signup</button>
                </Link>
            </>
             )} 
                <div> 
                    <div className="current-name">
                        {currentUser.username}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar