import { Avatar } from '@/Components/Game/Avatar'
import React, { useEffect } from 'react'
import Data from './WardrobeData.json'
import './Wardrobe.scss'
import WardrobeData from './WardrobeData.json'
import WardrobeCard from '@/Components/Game/Wardrobe/WardrobeCard'
import Guest from '@/Layouts/GuestLayout'



export default function Wardrobe() {

    const wardrobe = WardrobeData[1 ];
    // useEffect(() => {
    //     wardrobe = localStorage.getItem('wardrobe');
    //     // console.log("this")
    //     // console.log(wardrobe.id);
    // }, [])

    // console.log(wardrobe);
    return (
        <div id='Wardrobe_page'>
            <Avatar outfit={wardrobe} />
            <div id='Wardrobe_list'>
                {
                    Data.map((item: any) => {
                        return (
                            <WardrobeCard {...item} />
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}



Wardrobe.layout = (page: any, logo: any) => <Guest children={page} />;