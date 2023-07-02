import React, { useEffect } from 'react';

const ProjectReadMore = ({ readMoreData }) => {
    const { index, img, name, title, description, liveDemo, handleReadMore } = readMoreData;

    return (
        <div className='project-read-more-backdrop'>
            <div className={`project-read-more btn-grad${index}`}>
                <i className='close fa fa-xmark fa-lg' onClick={() => { handleReadMore(false); }} />
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
