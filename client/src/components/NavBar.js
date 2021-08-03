import React from "react";
import {Link} from 'react-router-dom';
import image from '../images/up.png'

function NavBar({currentUser, handleSignOut}){


    return(
        <div>
            <nav id="navbar" className="ui inverted segment">
                <Link to='/'>
                    <div className='logo-div'>
                    <img src={image} className='logo' alt='logo'></img>
                    <h3 className='logo-name'>UPtoDate</h3>
                    </div>
                </Link>
   {/* //todo to display what the user sees if login              
                {currentUser ? ( 
                <> */}

                <Link to='/'>
                {/* <h1 className="nav-button">Home</h1> */}
                <button id="nav-button"className='ui violet button'>Home</button>
                </Link>

                <Link to='/profile'>
                {/* ui violet button id="nav-button"*/}
                <button id="nav-button"className='ui violet button'>Profile</button>
                {/* <h1 className="nav-button">Profile</h1> */}
                </Link>
{/* 
   //todo to display what the user sees if login              
                </>
                ) : ( 
                <> */}

                <Link to='/signin'>
                <button id="nav-button"className='ui violet button'>Signin</button>
                {/* <h1 className="nav-button">Signin</h1> */}
                </Link>
                <Link to='/signup'>
                <button id="nav-button"className='ui violet button'>Signup</button>
                {/* <h1 className="nav-button">Signup</h1> */}
                </Link>

                <button onClick={handleSignOut} id="nav-button" className='ui violet button' >Sign Out</button>
{/* 
//todo to display what the user sees if login              
                </>
                )} */}
            <div>{currentUser.username}</div>
            </nav>
        </div>
    )
}

export default NavBar