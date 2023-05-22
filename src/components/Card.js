const Card = ({ index, img, name, title, description }) => {

    const gradients = {
        0: 'linear-gradient(to right, #2C5364, #203A43)',
        1: 'linear-gradient(to right, #eb5821, #e11b4b)',
        2: 'linear-gradient(to right, #636363, #a2ab58)',
        3: 'linear-gradient(to right, #4da0b0, #d39d38)',
        4: 'linear-gradient(to right, #ee0979, #ff6a00)',
    };

    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

    return (
        <div className="card" style={{ backgroundImage: gradients[index] }}>
            <img className="card-img" src={img} alt="img" />
            <div className="card-content">
                <h5>{name}</h5>
                <p>{title}</p>
                <p className="card-desc">{description}</p>
                <p className="card-rm">READ MORE</p>
            </div>
        </div>
    )
}

export default Card;