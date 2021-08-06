import {useEffect, useState} from 'react'
import MySubscription from './mySubscription';

function Profile (){
    const [userProfile, setUserProfile] = useState([])
    const [render, setRender] = useState(false)

        useEffect(() => {
            const userId = localStorage.getItem('user_id')
            fetch(`http://localhost:3000/users/${userId}`)
            .then(res => res.json())
            .then(data => setUserProfile(data.subscriptions))
            }, []);

    const sum = userProfile.map(serviceobj => {
        return(serviceobj.service.price)}
    )

    const removeItem = (id) => {
        let newProfile = [...userProfile]
        newProfile = newProfile.filter((subs)=>{
            console.log(subs);
            return subs.id !== id
         })
         setUserProfile(newProfile)
    //    console.log(description);
       console.log(userProfile);
    }

    let add = 0
    for (let i = 0; i < sum.length; i++) {
        add += sum[i];
    }
    // console.log(add);

    const serviceUserCards = userProfile.map(sub => 
        <MySubscription
            sub={sub}
            key={sub.id}
            userProfile={userProfile}
            setUserProfile={setUserProfile}
            render={render}
            setRender={setRender}
            removeItem={removeItem}
    />)


    // const test = currentUser.map(sub => 
    //     <MySubscription
    //         sub={sub}
    //         key={sub.id}
    // />)
    
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
 