import {useEffect, useState} from 'react'
import ServiceContainer from './servicesContainer';
import ServiceCard from './serviceCard';

function Profile ({setCurrentUser, currentUser}){
// const serviceUrl = `http://localhost:3000/users/${currentUser.id}`
    // const [userProfile, setUserProfile] = useState([])

    //     useEffect(() => {
    //         fetch(serviceUrl)
    //         .then(res => res.json())
    //         .then(data => setCurrentUser(data))
    //         }, []);

// console.log(currentUser.services);   

// const currentuserServices = currentUser.services
// console.log(currentuserServices);   
// console.log(currentuserServices[0]);   
// console.log(currentuserServices[0].name);   

const test = currentUser.services[0]
console.log(test);

// const serviceUserCards = currentUser.services[0].map(service=> <ServiceCard
//     key={service.id} 
//     logo={service.logo}
//     name={service.name}
//     description={service.description}
//     price={service.price}
//     />)

    return(
        <div>
            <h1>hi</h1>
            {/* {serviceUserCards} */}
            {/* {currentuserServices} */}
        </div>
    )
}







export default Profile;
 