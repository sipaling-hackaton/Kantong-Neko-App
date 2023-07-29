import React from "react";
import { Link } from "@inertiajs/react";
import {
    homeIcon,
    homeIconActive,
    listIcon,
    lsitIconActive,
    pointIcon,
    pointIconActive,
    profileIcon,
    profileIconActive,
} from "./Assets/Icons";

export default function BottomNav() {
    return (
        <div>
            <div
                id="Nav"
                style={{
                    padding: "1rem",
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
                <Link
                    href="/"
                    style={{
                        height: "100%",
                        color: "black",
                    }}
                >
                    <img
                        className="w-1/2"
                        src={
                            window.location.pathname == "/"
                                ? homeIconActive
                                : homeIcon
                        }
                    />
                </Link>
                <Link
                    href="/quest"
                    style={{
                        height: "100%",
                        color: "black",
                    }}
                >
                    <img
                        className="w-1/2"
                        src={
                            window.location.pathname == "/quest"
                                ? lsitIconActive
                                : listIcon
                        }
                    />
                </Link>
                <Link
                    href="/game"
                    style={{
                        height: "100%",
                        color: "black",
                    }}
                >
                    <img
                        className="w-1/2"
                        src={
                            window.location.pathname == "/game"
                                ? pointIconActive
                                : pointIcon
                        }
                    />
                </Link>
                <Link
                    href="/profile"
                    style={{
                        height: "100%",
                        color: "black",
                    }}
                >
                    <img
                        className="w-1/2"
                        src={
                            window.location.pathname == "/profile"
                                ? profileIconActive
                                : profileIcon
                        }
                    />
                </Link>
            </div>
        </div>
    );
}
