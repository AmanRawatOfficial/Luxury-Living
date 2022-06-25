import React from "react";
import { useParams } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import { FaMarker } from "react-icons/fa";

import { brand_data } from "../data";
import "./BrandData.css";
import HotelList from "./HotelList";

function BrandData() {
    // const hotelList = brand_data.brand.map((item) => (
    //     <HotelList Branch={item.branches}/>
    // ))

    /* Getting Brand Id from the Route */
    const currentLocation = useParams();
    const currentId = parseInt(currentLocation.id);
    const currentIdData = brand_data.brand[currentId];

    /* List of related hotels */
    const hotelListNumbers = currentIdData.branches.length;

    const hotelList = currentIdData.branches.map((items) => (
        <HotelList Branch={items} key={items} />
    ));

    return (
        <section>
            <div className="brand_info_container">
                <div className="brand_info_logo">
                    <img
                        src={currentIdData.brand_logo}
                        alt="brand logo"
                        width="200px"
                    />
                </div>
                <div className="brand_info_primary">
                    <div className="brand_info_primary_container">
                        <h2>{currentIdData.brand_name}</h2>
                        <div className="brand_info_primary_buttons">
                            <button type="button">
                                <FaMarker />
                                EDIT
                            </button>
                            <button type="button">
                                <IoTrashOutline />
                                DELETE
                            </button>
                        </div>
                    </div>
                    <h3>Description</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Provident reiciendis, eos expedita illo ad id
                        aperiam voluptate vel quia laboriosam adipisci facilis
                        fugiat asperiores quo repudiandae numquam, accusantium
                        tempore dolor!
                    </p>
                </div>
            </div>
            <h3 className="hotel_list_heading">HOTELS</h3>
            <p className="hotel_list_second_heading">
                About <span className="hotel_list_number">{hotelListNumbers}</span> hotels in {' '}
                <span className="hotel_list_brand">{currentIdData.brand_name}</span>
            </p>
            {hotelList}
        </section>
    );
}

export default BrandData;
