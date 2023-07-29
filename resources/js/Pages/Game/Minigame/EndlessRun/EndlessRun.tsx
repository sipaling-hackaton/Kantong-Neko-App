import React from 'react'
import EndlessRunComponent from '@/Components/Game/Minigames/EndlessRun/EndlessRun'

export default function EndlessRun({ activeAccount }: any) {
    return (
        <div>
            <EndlessRunComponent activeAccount={activeAccount} />
        </div>
    )
}