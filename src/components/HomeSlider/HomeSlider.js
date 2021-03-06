import React from 'react';
import './HomeSlider.css';
import {Link } from "react-router-dom";

function HomeSlider(props) {
    return (
        <div className="sliderComponent"
            style={{
                backgroundImage:`url(${props.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "auto",
                backgroundPosition: "center"
            }}
        >
            <Link to={props.linkTo}>
                <button className="button" >
                    {props.title}
                </button>
            </Link>
        </div>
    )
}

export default HomeSlider
