import React from 'react'
import './TaskCard.scss'


export default function TaskCard(props: any) {
    return (
        <div id='TaskCard'>
            <h1 id='title'>Top up Saldo 10k</h1>
            <div id="left">
                <p id='desc'>Available until</p>
                <p id='point'>+20 points</p>
            </div>
            <button id='btn'>Claim</button>
        </div>
    )
}
