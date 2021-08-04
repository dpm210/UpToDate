import React from "react";
import {useState, useEffect} from "react"
import ServiceCard from "./serviceCard"



function ServiceContainer ({user, currentUser}){
    const serviceUrl = 'http://localhost:3000/services'
    const [services, setServices] = useState([])
    
    useEffect(() => {
        fetch(serviceUrl)
        .then(res => res.json())
        .then(data => setServices(data))
        }, []);

        // const [serviceObj, description, logo, name] = services
        console.log(services)
    // const addService = services.map((blah) => console.log(blah.id))
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
        })  .then(res => res.json())
            .then(console.log(addSubData))
}

    const serviceCards = services.map(service =>
     <ServiceCard
        service={service}
        // handleClick={handleClick}
        handleAdd = {handleAdd}
        key={service.id}
        // name={service.name}
        // price={service.price}
        // logo={service.logo}
     />
    )
    return(
        <div>
        {serviceCards}
        </div>
    )
}
export default ServiceContainer;








