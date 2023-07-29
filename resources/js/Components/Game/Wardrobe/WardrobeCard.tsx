import React from "react";
import "./WardrobeCard.scss";

export default function WardrobeCard({ item, handleWardrobeChange }: any) {
    // localStorage.setItem('wardrobe', JSON.stringify(item.image));
    // console.log(item.asset_url);
    // console.log(item);

    const handleOnClick = () => {
        if (item.type == "hat") handleWardrobeChange(item.id, null);
        else handleWardrobeChange(null, item.id);
    };

    return (
        <div onClick={handleOnClick} id="WardrobeCard">
            <img src={item.asset_url} alt="" />
        </div>
    );
}
