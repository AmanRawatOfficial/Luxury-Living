import React from "react";
import { IoTrashOutline } from "react-icons/io5"
import { FaMarker } from "react-icons/fa"
import { IoGiftOutline } from "react-icons/io5";

import "./HotelList.css"

function HotelList(props) {
    return (
        <div className="hotel_list">
            
            <div className="list_item">
                <div className="list_item_info">
                    <img src={require("../images/starbucks.webp")} height="60px" alt="Destination Image"/>
                    <div>
                        <h4 className="list_item_info_heading">{props.Branch}</h4>
                        <p className="list_item_info_description">description</p>
                    </div>
                </div>
                <div className="list_icons">
                    <IoGiftOutline />
                    <FaMarker />
                    <IoTrashOutline className="red" />
                </div>
            </div>
        </div>
    );
}

export default HotelList;
