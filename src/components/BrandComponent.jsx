import React from "react";
import { Link } from "react-router-dom";

import "./BrandComponent.css";

function BrandComponent(props) {
    return (
        <Link className="none" to={`brand/${props.id}`}>
            <div className="brand">
                <p>{props.brandName}</p>
                <div className="brand_info">
                    <img
                        className="brand_logo"
                        width="200px"
                        src={props.brandLogo}
                    />
                </div>
            </div>
        </Link>
    );
}

export default BrandComponent;
