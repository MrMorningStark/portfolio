import React, { useEffect } from 'react';

const ProjectReadMore = ({ readMoreData }) => {
    const { index, img, name, title, description, liveDemo, handleReadMore } = readMoreData;

    return (
        <div className='project-read-more-backdrop'>
            <div id="particle-container">
                {
                    [...Array(20)].map((e, i) => {
                        return <div key={i} className="particle"></div>
                    })
                }
            </div>
            <div className={`project-read-more btn-grad${index}`}>
                <i className='close fa fa-xmark fa-lg' onClick={() => { handleReadMore(false); }} />
                <div id="particle-container">
                    {
                        [...Array(10)].map((e, i) => {
                            return <div key={i} className="particle"></div>
                        })
                    }
                </div>
                <img className="card-img" style={{ height: "300px" }} src={img} alt="img" />
                <div className="card-content">
                    <h5>{name}</h5>
                    <p>{title}</p>
                    <p className="card-desc">{description}</p>
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
                </div>
            </div>
        </div>
    );
}

export default ProjectReadMore;
