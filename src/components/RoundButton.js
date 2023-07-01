import { useState } from "react";

const RoundButton = ({ title, url, icon, iconColor }) => {

    const [hover, setHover] = useState(false);

    return (
        <button
            title={title ?? ""}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ borderRadius: "50%", width: "45px", height: "45px", margin: "0 14px 0 0", background:"var(--bg-color)",border:"none", color: "#3D3C42", cursor: "pointer",boxShadow:" 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)" }}
            onClick={() => { if (url) window.open(url) }}
        >
            <i style={{ color: iconColor ?? "var(--color)" }} className={`fa ${icon} ${hover ? 'fa-beat-fade' : ''}`} />
        </button>
    )
}

export default RoundButton;