import React from "react";
import {useState, useEffect} from "react"
import ServiceCard from "./serviceCard"



function ServiceContainer ({user}){
const serviceUrl = 'http://localhost:3000/services'
const [services, setServices] = useState([])

    useEffect(() => {
        fetch(serviceUrl)
        .then(res => res.json())
        .then(data => setServices(data))
        }, []);
    // console.log(services);
// let subList = services.map(service => {return name={service.name}})

const [added, setAdded] = useState([])
    function handleAdd(){
        let addSubData = {
            "user_id": user.id,
            "service_id": services.id,
        }
        // console.log(added)
        fetch('http://localhost:3000/subscriptions',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(addSubData)
        }).then(res => res.json())
        .then(console.log(addSubData))
}
    // function handleClick(){
    //     handleAdd()
    // }
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








