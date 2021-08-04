

function ServiceCard({service, handleAdd}){


    return(
    <div className="service-cards">
        <div id="id-card" className="ui card">
            <div className="image"><img id="img-div"src={service.logo} alt="image1"/></div>
            <div className="content">
                <div className="header">{service.name}</div>
                <div className="meta"> $ {service.price}</div>
                <div className="description">{service.description}</div>
                <br />
                <button onClick={() => handleAdd(service.id)}className="ui violet button">Add to My Subscriptions</button>
            </div>
        </div>
    </div>

        //  <div classNameName="ui red card">
        //      <img id='service-logo'src={service.logo} alt="service-logo" />
        //      <h1>name</h1>
        //      <h3>{service.name}</h3>
        //      <h1>description</h1>
        //      <h3>{service.description}</h3>
        //      <h1>price</h1>
        //      <h3>{service.price}</h3>
        //      <button onClick={handleAdd}>Add to My Subscriptions</button>
        //  </div>
    
    )
}






export default ServiceCard;
 