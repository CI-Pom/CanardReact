function Canard(props)
{
    return(
        <article>
            <h2>
                { props.data.lastName } <br/>
                { props.data.firstName }
            </h2>
            <img src={ "avatars/" + props.data.avatar } />
            <p className="buttons">
                <button onClick={ () => props.addCallback(props.data.id) } className={(props.list == "users" ? "adopt" : "abandon")}>
                    <i className={(props.list == "users" ? "far fa-heart" : "fas fa-heart-broken")}></i>
                </button>
            </p>
        </article>
    )
}