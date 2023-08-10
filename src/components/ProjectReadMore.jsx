import React, { useEffect } from 'react';

const ProjectReadMore = ({ readMoreData }) => {

    useEffect(() => {
        let socialsEle = document.querySelector('#home .home-scials .socials');
        let darkModeElem = document.getElementById("darkMode");
        setTimeout(() => {
            socialsEle.style.left = '-100px';
            darkModeElem.style.opacity = '0';
            darkModeElem.style.visibility = 'hidden';
        }, 2000)
        return () => {
            darkModeElem.style.opacity = '1';
            darkModeElem.style.visibility = 'visible';
        }
    }, [])

    const { index, img, gif, name, title, description, liveDemo, handleReadMore } = readMoreData;
console.log(gif)
    return (
        <div className='project-read-more-backdrop' onBlur={()=>{ handleReadMore(false);}}>
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
                <img className="card-img-readMore" style={{ height: "300px" }} src={gif ?? img} alt="img" />
                <div className="card-content" style={{ textAlign: "center" }}>
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
                    </div>
                    <h5>{name}</h5>
                    <p>{title}</p>
                    <p className="card-desc">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectReadMore;
