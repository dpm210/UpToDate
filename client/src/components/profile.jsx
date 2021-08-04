import {useEffect, useState} from 'react'
import ServiceContainer from './servicesContainer';
import MySubscription from './MySubscription';

function Profile ({currentUser}){
    const [userProfile, setUserProfile] = useState([])

        useEffect(() => {
            fetch(`http://localhost:3000/users/${currentUser.id}`)
            .then(res => res.json())
            .then(data => setUserProfile(data.services))
            }, []); 


const serviceUserCards = userProfile.map(service => <MySubscription
    service={service}
    key={service.id} 
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
 