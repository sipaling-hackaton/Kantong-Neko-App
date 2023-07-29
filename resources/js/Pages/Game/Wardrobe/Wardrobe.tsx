import { Avatar } from '@/Components/Game/Avatar'
import React, { useEffect } from 'react'
import Data from './WardrobeData.json'
import './Wardrobe.scss'
import WardrobeData from './WardrobeData.json'
import WardrobeCard from '@/Components/Game/Wardrobe/WardrobeCard'
import Guest from '@/Layouts/GuestLayout'
import { router } from '@inertiajs/react'



export default function Wardrobe({ ItemData, activeAccount, avatar }: any) {
    useEffect(() => {
        console.log(activeAccount);
    }, [])
    return (
        <div id='Wardrobe_page'>
            <Avatar ribbon={activeAccount.avatar.hat} hat={activeAccount.avatar.ribbon} />
            <div id='Wardrobe_list'>
                {
                    ItemData.map((item: any) => {
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