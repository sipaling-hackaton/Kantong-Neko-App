import React from 'react';
import { Link } from '@inertiajs/react';


export default function BottomNav() {
    return (
        <div>
            <div id='Nav'
                style={{
                    borderTop: "3px solid #e3e3e3",
                    height: "10vh",
                    width: "100%",
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    zIndex: 1000,
                    color: "white",
                    backgroundColor: "white",
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {/* menu nav */}
                <Link href="/" style={{
                    height: "100%",
                    color: "black",
                }}

                >Home</Link>
                <Link href="/task"
                    style={{
                        height: "100%",
                        color: "black",
                    }}

                >Task</Link>
                <Link href="/game"
                    style={{
                        height: "100%",
                        color: "black",
                    }}

                >Game</Link>
            </div>
        </div>
    )
}