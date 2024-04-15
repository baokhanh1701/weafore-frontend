// import React from "react";
// import { useNavigate } from "react-router";

// import React from "react";
// import { useNavigate } from "react-router";

export default function Content1() {
    return (
        <>
            <div
                className="jsx-3325839890 jsx-4002731451 hero"
                style={{ position: 'relative', zIndex: 0, backgroundColor: '#000' }}
            >
                <video autoPlay loop muted playsInline style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                    objectFit: 'cover'
                }}>
                    <source src="../public/landing_house1.mp4" type="video/mp4" />
                </video>
                <div
                    className="jsx-3325839890 jsx-4002731451 hero-text"

                >
                    <h1
                        className="jsx-3325839890 jsx-4002731451"

                    >
                        Weafore
                    </h1>
                    <div
                        className="jsx-3325839890 jsx-4002731451 hero-subtitle"
                        style = {{color: 'white'}}
                    >
                        The best way to protect your home from harsh weather
                    </div>
                    <a
                        className="jsx-3325839890 jsx-4002731451 btn cta-btn"
                        href="/signin"

                    >
                        Join with us
                    </a>
                </div>
                <br></br>
<br></br>
<br></br>
<br></br>
            </div>

        </>
    );
}