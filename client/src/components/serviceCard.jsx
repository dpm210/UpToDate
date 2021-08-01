

function ServiceCard({service, handleClick, handleAdd}){


    return(
        <div>
            <img id='service-logo'src={service.logo} alt="service-logo" />
            <h1>name</h1>
            <h3>{service.name}</h3>
            <h1>description</h1>
            <h3>{service.description}</h3>
            <h1>price</h1>
            <h3>{service.price}</h3>
            <button onClick={handleAdd}>Add to My Subscriptions</button>
        </div>
    )
}







export default ServiceCard;
 