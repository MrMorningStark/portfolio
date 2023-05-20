const Card = ({ img, name, title, description }) => {

    const gradients = [
        'linear-gradient(to right, #2C5364, #203A43)',
        'linear-gradient(to right, #eb5821, #e11b4b)',
        'linear-gradient(to right, #636363, #a2ab58)',
        'linear-gradient(to right, #ee0979, #ff6a00)',
        'linear-gradient(to right, #4da0b0, #d39d38)',
    ];

    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

    return (
        <div className="card" style={{ backgroundImage: randomGradient }}>
            <img className="card-img" src={img} alt="img" />
            <div className="card-content">
                <h5>{name}</h5>
                <p>{title}</p>
                <p className="card-desc">{description}</p>
            </div>
        </div>
    )
}

export default Card;