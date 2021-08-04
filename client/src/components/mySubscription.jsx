function MySubscription ({sub}){

    function removeSub(){
        fetch(`http://localhost:3000/subscriptions/${sub.id}`, {
            method: "DELETE",
        })

        // update state
    }

    return(
        <div className="service-cards">
        <div id="id-card" className="ui card">
            <div className="image"><img id="img-div"src={sub.service.logo} alt="image1"/></div>
            <div className="content">
                <div className="header">{sub.service.name}</div>
                <div className="meta"> $ {sub.service.price}</div>
                <div className="description">{sub.service.description}</div>
                <br />
                <button className="ui violet button" onClick={removeSub}>Remove from My Subscriptions</button>
            </div>
        </div>
    </div>
    )
}

export default MySubscription; 