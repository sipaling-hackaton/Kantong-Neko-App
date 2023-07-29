import Eatgame from '@/Components/Game/Minigames/Eatgame/Eatgame'
import React from 'react'

export default function Eat({ activeAccount} : any) {
    return (
        <div>
            <h1>Give Eat</h1>
            <Eatgame activeAccount={activeAccount}/>
        </div>
    )
}
