function MySubscription ({service}){

    return(
        <div className="service-cards">
        <div id="id-card" className="ui card">
            <div className="image"><img id="img-div"src={service.logo} alt="image1"/></div>
            <div className="content">
                <div className="header">{service.name}</div>
                <div className="meta"> $ {service.price}</div>
                <div className="description">{service.description}</div>
                <br />
                <button className="ui violet button" >Remove from My Subscriptions</button>
            </div>
        </div>
    </div>
    )
}

export default MySubscription; 