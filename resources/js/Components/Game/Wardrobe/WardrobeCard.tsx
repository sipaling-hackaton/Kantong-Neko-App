import React from 'react'
import './WardrobeCard.scss'

export default function WardrobeCard(item: any) {
    // localStorage.setItem('wardrobe', JSON.stringify(item.image));
    // console.log(item.asset_url);
    // console.log(item);
    return (
        <div
            onClick={() => {
                // localStorage.setItem('wardrobe', JSON.stringify(item));
            }}
            id='WardrobeCard'>
            <img src={item.asset_url} alt="" />
        </div>
    )
}