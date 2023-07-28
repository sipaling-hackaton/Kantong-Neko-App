import React from "react";
import "./Avatar.scss"
import { motion } from "framer-motion";
import AvatarImg from "./Assets/Avatar.svg";
import Sparkles from "../General/Sparkle/Sparkle";

interface outfit {
    type: string,
    image: string
}

export class Avatar extends React.Component<{ Characterref?: any, jump?: string, AnimationEnd?: any, happy?: boolean, size?: string, feeling?: string, open?: boolean, outfit?: outfit }, {}>{
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
        const { Characterref, jump, happy, feeling, open, outfit } = this.props;
        console.log("outfit");
        console.log(outfit);
        var hat;
        var mask;
        var shirt;
        if (outfit !== null && outfit !== undefined) {
            if (outfit.type === "hat") {
                hat = outfit.image;
            } else if (outfit.type === "mask") {
                mask = outfit.image;
            } else if (outfit.type === "shirt") {
                shirt = outfit.image;
            }
        }
        return (<>
            <div id="Avatar">
                <motion.div
                    id="character"
                >
                    <div className="">
                        <div className=" ears"></div>
                        <div className=" head">
                            <img className="hat" src={hat} alt="" />

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
                            <img id="ribbon" src="https://www.svgrepo.com/show/423813/ribbon-origami-paper.svg" alt="" />
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