import { useState } from "react";

const RoundButton = ({ title, url, icon, iconColor }) => {

    const [hover, setHover] = useState(false);

    return (
        <button
            title={title ?? ""}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ borderRadius: "50%", width: "45px", height: "45px", margin: "0 14px 0 0", background: "transparent", border: "1px solid #3D3C42", color: "#3D3C42",backgroundColor:"#FEFBF6", cursor: "pointer" }}
            onClick={() => { if (url) window.open(url) }}
        >
            <i style={{ color: iconColor ?? "black" }} className={`fa ${icon} ${hover ? 'fa-bounce' : ''}`} />
        </button>
    )
}

export default RoundButton;