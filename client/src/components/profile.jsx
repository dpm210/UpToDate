import {useEffect, useState} from 'react'
import ServiceContainer from './servicesContainer';
import MySubscription from './MySubscription';

function Profile ({currentUser}){
    const [userProfile, setUserProfile] = useState([])

        useEffect(() => {
            const userId = localStorage.getItem('user_id')
            fetch(`http://localhost:3000/users/${userId}`)
            .then(res => res.json())
            .then(data => setUserProfile(data.subscriptions))
            }, []);


const serviceUserCards = userProfile.map(sub => <MySubscription
    sub={sub}
    key={sub.id}
    // logo={service.logo}
    // name={service.name}
    // description={service.description}
    // price={service.price}
    />)

    return(
        <div>
            <h1>hi</h1>
            {serviceUserCards}
            
        </div>
    )
}







export default Profile;
 