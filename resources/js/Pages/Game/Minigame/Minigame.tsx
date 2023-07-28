import React from 'react'
import Guest from '@/Layouts/GuestLayout'
import { Link } from '@inertiajs/react'



function Card(props: any) {
    return (<div>
    </div>)
}

export default function Minigame() {
    return (
        <div>
            <h1>Mini Game</h1>
            <Link href="/game/minigames/eat">Eat</Link>
        </div>
    )
}



Minigame.layout = (page: any, logo: any) => <Guest>{page}</Guest>