import {useEffect, useState} from 'react'
import MySubscription from './MySubscription';

function Profile (){
    const [userProfile, setUserProfile] = useState([])

        useEffect(() => {
            const userId = localStorage.getItem('user_id')
            fetch(`http://localhost:3000/users/${userId}`)
            .then(res => res.json())
            .then(data => setUserProfile(data.subscriptions))
            }, []);

            // console.log(currentUser);
            // console.log(userProfile);
            // console.log(userProfile[0]);
            // console.log(userProfile[0].service);
            // console.log(userProfile[0].service.price);

    const sum = userProfile.map(serviceobj => {
        return(serviceobj.service.price)}
    )

    let add = 0
    for (let i = 0; i < sum.length; i++) {
        add += sum[i];
    }
    // console.log(add);

    const serviceUserCards = userProfile.map(sub => 
        <MySubscription
            sub={sub}
            key={sub.id}
            setUserProfile={setUserProfile}
            userProfile={userProfile}
    />)

    return(
       <div>
       <br />
       <br />
        <div className="ui cards">
        <div id="spent" className="ui card">
            <p>Monthly Spend</p>
            $ {add}
        <br />
        <br />
        </div> 
         </div>
        <br />
        <br />
        <div>
            <h1 id="h1">My Subscriptions</h1>
         <div>{serviceUserCards} </div>
        </div>
      </div>
    )
}







export default Profile;
 