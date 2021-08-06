// import e from "cors";
import React from "react";
import ServiceCard from "./serviceCard"
// import {useState} from "react"

function ServiceContainer ({currentUser, services, setServices}){
    // document.title = "Home"
        // console.log(services)
//    const [filter, setfilter] = useState([])
   

    function handleAdd(service_id){
        let addSubData = {
            "user_id": currentUser.id,
            "service_id": service_id,
            "period": "monthly"
        }
        fetch('http://localhost:3000/subscriptions',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(addSubData)
        }) 
             .then(res => res.json())
            .then(console.log(addSubData))
}
    const serviceCards = services.map(service =>
     <ServiceCard
        service={service}
        key={service.id}
        handleAdd={handleAdd}
     />)

    const filterServices = (e) => {
        let newFilteredItems = [...services]
        newFilteredItems = newFilteredItems.filter(subs =>{
            console.log(subs)
            return subs.description === e.target.value
        })
            setServices(newFilteredItems)
            console.log(newFilteredItems);
       }

    return(
        <div>    
            <div className="h2-text"> 
            <h1 id="h2">Filter by Category</h1>
            </div> 
             <div>
            <select 
            onChange={filterServices} 
            id="drop-down"
            className="ui simple dropdown item">
                    <option 
                    onChange={filterServices} value="All">All</option>
                    <option onChange={filterServices} 
                    value="Movies">Movies</option>
                    <option onChange={filterServices} 
                    value="Music">Music</option>
                    <option onChange={filterServices} 
                    value="Games">Games</option>
            </select>
                {serviceCards}
            </div>
    </div>
    )
}






export default ServiceContainer;








