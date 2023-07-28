import React from 'react'

export default function TopNav() {
    return (
        <>
            <div
                style={{
                    border: "1px solid black",
                    height: "10vh",
                    width: "100%",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 1000,
                    color: "white",
                    backgroundColor: "white",
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                TopNav
            </div>
            <div id='save-zone'
                style={{
                    height: "10vh",
                    width: "100%",
                }}>

            </div>
        </>

    )
}