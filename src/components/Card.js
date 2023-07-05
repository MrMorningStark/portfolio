const Card = (props) => {

    const { index, img, name, title, description, liveDemo, handleReadMore } = props;

    return (<>
        <div className={`card box btn btn-grad${index}`} >
            <img className="card-img" src={img} alt="img" />
            <div className="card-content">
                <h5>{name}</h5>
                <p>{title}</p>
                <p className="card-desc">{description}</p>
                <div className="card-bottom">
                    <p className="card-ld" onClick={() => {
                        if (liveDemo.length > 0) {
                            window.open(liveDemo, "_blank")
                        }
                        else {
                            alert("No live demo available")
                        }
                    }} >
                        LIVE DEMO
                    </p>
                    <p className="card-rm" onClick={() => { handleReadMore(props) }} >Read More</p>
                </div>

            </div>
        </div>
    </>
    )
}

export default Card;