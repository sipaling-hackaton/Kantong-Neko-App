import React from 'react'
import './WardrobeCard.scss'

export default function WardrobeCard(item: any) {
    // localStorage.setItem('wardrobe', JSON.stringify(item.image));
    console.log(item.image);
    console.log(item);
    return (
        <div
            onClick={() => {
                localStorage.setItem('wardrobe', JSON.stringify(item));
            }}
            id='WardrobeCard'>
            <img src={item.image} alt="" />
        </div>
    )
}