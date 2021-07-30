import React from "react";
import {useState, useEffect} from "react"
import ServiceCard from "./ServiceCard";

function ServiceContainer (){
const serviceUrl = 'http://localhost:3000/services'
const [services, setServices] = useState([])

useEffect(() => {
    fetch(serviceUrl)
    .then(res => res.json())
    .then(data => setServices(data))
    }, []);

console.log(services);

// let subList = services.map(service => {return name={service.name}})

const [added, setAdded] = useState([])
    function handleAdd(services){
        let addSub = {
            name: services,
            price: services.price,
            description: services.description,
            logo: services.logo
        }
        setAdded(addSub)
        console.log(added)   
}

    function handleClick(){
        handleAdd()
    }

    const serviceCards = services.map(service => 
     <ServiceCard 
        service={service}
        handleClick={handleClick}
        handleAdd = {handleAdd}
        // key={service.id} 
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
 