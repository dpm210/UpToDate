import {Link} from 'react-router-dom';


function NavBar(){


    return(
        <div>
            <nav className='NavBar'>
                <Link to='/'>
                <button className='button'>Home</button>
                </Link>

                <Link to='/profile'>
                <button className='button'>Profile</button>
                </Link>

                <Link to='/signin'>
                <button className='button'>Signin</button>
                </Link>
                
                <Link to='/signup'>
                <button className='button'>Signup</button>
                </Link>
            </nav>
        </div>
    )
}

export default NavBar