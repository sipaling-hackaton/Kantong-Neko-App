import React from 'react'
import Guest from '@/Layouts/GuestLayout'
import { Link } from '@inertiajs/react'
import './Minigame.scss'


function Card(props: any) {
    return (<div>
    </div>)
}

export default function Minigame() {
    return (
        <>
            <div id='MiniGame-Page'>
                <h2>Mini Games</h2>
                <div id="Minigamelist">
                    <Link className='Card' href="/game/minigames/eat">
                        <img src="https://www.svgrepo.com/show/429377/bibimbub-cooking-food.svg" alt="" />
                        Lunch</Link>

                    <Link className='Card' href="/game/minigames/run">
                        <img src="https://www.svgrepo.com/show/412803/run.svg" alt="" />
                        Endless Run</Link>
                </div>
            </div>
        </>
    )
}



Minigame.layout = (page: any, logo: any) => <Guest>{page}</Guest>