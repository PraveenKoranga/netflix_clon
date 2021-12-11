import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });

        return () => {
            window.removeEventListener("scroll");
        };

    }, []);

    return (
        <div className={ `nav ${show && "nav_black"}`}>
            <img
                className="nav_logo"
                src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png"
                alt="Netflix_Logo"
            />
            <img className="nav_avtar" src="https://cdn.shopify.com/s/files/1/0076/4103/8906/products/transformers-war-for-cybertron-trilogy-netflix-walmart-voyager-optimus-prime-3pack-robot-render_160x160.jpg?v=1598681854" alt="Netflix_Logo" />
        </div>
    );
}
export default Nav;