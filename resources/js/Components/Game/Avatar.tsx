import React from "react";
import "./Avatar.scss"
import { motion } from "framer-motion";
import AvatarImg from "./Assets/Avatar.svg";
import Sparkles from "../General/Sparkle/Sparkle";

export class Avatar extends React.Component<{ Characterref?: any, jump?: string, AnimationEnd?: any, happy?: boolean, size?: string, feeling?: string, open?: boolean }, {}>{
    intervalId: NodeJS.Timeout | null = null;
    constructor(props: any) {
        super(props);
        this.state = {
            wardrobe: {
                head: {
                    color: "red",
                    eyes: "blue",
                    mouth: "green",
                    frown: "yellow"
                }
            }
        };
    }

    render() {
        const { Characterref, jump, happy, feeling, open } = this.props;
        return (<>
            <div id="Avatar">
                {/* <img src="https://freesvg.org/img/1634560776baseball-cap-hat.png" alt="" /> */}
                <motion.div
                    id="character"
                >
                    <div className="">
                        <div className=" ears"></div>
                        <div className=" head">
                            <div className=" face"
                                ref={Characterref}
                            >
                                <div className="stripes">
                                    <div className="left">
                                        <div className="stripe"></div>
                                        <div className="stripe"></div>
                                        <div className="stripe"></div>
                                    </div>
                                    <div className="right">
                                        <div className="stripe"></div>
                                        <div className="stripe"></div>
                                        <div className="stripe"></div>
                                    </div>
                                </div>
                                {
                                    happy ? <>
                                        <div className={`eyes happy`}></div>
                                        <div className="absolute top-0 left-0">
                                            <Sparkles>
                                                <div className="h-[100px] w-[100px]" >
                                                </div>
                                            </Sparkles>
                                        </div>
                                    </>
                                        :
                                        <div className={`eyes`}></div>
                                }
                                <div className=" nose"></div>
                                {!open &&
                                    <div className=" mouth">
                                    </div>
                                }
                                <div className={open ? "mouth_ open" : "mouth_ close "}></div>

                            </div>
                        </div>
                        <div className=" body">
                            <div id="collar"></div>
                        </div>
                        <div className="frontleg"></div>
                        <div className="backleg"></div>
                        <div className="tail"></div>
                    </div>
                </motion.div>
            </div>
        </>)
    }
}