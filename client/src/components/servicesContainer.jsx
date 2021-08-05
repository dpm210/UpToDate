import React from "react";
import ServiceCard from "./serviceCard"

function ServiceContainer ({user, currentUser, setFilter, filter, services, setServices}){

        // console.log(services)
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
     
    const catg = services.map(serviceobj => {
        return(serviceobj.description)}
    )

//    const a = catg.map(n => n == "Movies");

// console.log(a);
// console.log(catg);

    return(
        <div>    
            <div className="h2-text"> 
            <h1 id="h2">Filter by Category</h1>
            </div> 
             <div>
            <select id="drop-down"className="ui simple dropdown item"
             onChange={(e) => setFilter(catg)}>

            {/* onChange={(e) => {
                const selectedItem = e.target.value;
                setFilter(aa)
            }}> */}

             {/* onChange={(e) => setSearch(filteredservice)}> */}
                    <option value="All"> All </option>
                    <option value="Movie"> Movie </option>
                    <option value="Music"> Music </option>
                    <option value="Games"> Games </option>
            </select>
            {serviceCards}
            </div>
    </div>
    )
}






export default ServiceContainer;








