import React from "react";
import {useState, useEffect} from "react"
import ServiceCard from "./serviceCard";

function ServiceContainer (){
const serviceUrl = 'http://localhost:3000/services'
const [service, setService] = useState([])

useEffect(() => {
    fetch(serviceUrl)
    .then(res => res.json())
    .then(data => setService(data))
    }, []);

console.log(service);

    const serviceCards = service.map(service => {
     <ServiceCard 
        service={service}
        key={service.id} 
        service={service.name} 
        price={service.price} 
        logo={service.logo}
     />
})
    
    return(
        <div>
        {serviceCards}
        </div>
    )
}







export default ServiceContainer;
 