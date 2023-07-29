import React from "react";
import "./Avatar.scss"
import { motion } from "framer-motion";
import AvatarImg from "./Assets/Avatar.svg";
import Sparkles from "../General/Sparkle/Sparkle";
import { Howl } from "howler";
import MeowSfx from "@/Pages/Game/Minigame/Assets/Sounds/meow.mp3";

interface outfit {
    id: number,
    type: string,
    asset_url: string,
}
interface MyComponentProps {
    meow: boolean,
    wardrobe: {
        head: {
            color: string,
            eyes: string,
            mouth: string,
            frown: string
        }
    }

}


export class Avatar extends React.Component<{ Characterref?: any, jump?: string, AnimationEnd?: any, happy?: boolean, size?: string, feeling?: string, open?: boolean, hat?: outfit, ribbon?: outfit }, MyComponentProps, {}>{
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
            },
            meow: false
        };
    }


    getMeow = () => {
        return this.state.meow;
    }

    sound: any = null;
    playSound = (SFX: any) => {
        //check if sound is null, if not stop previous sound and unload it
        if (this.sound != null) {
            this.sound.stop();
            this.sound.unload();
            this.sound = null;
        }
        this.sound = new Howl({
            src: [SFX]
        });
        // this.setState.meow = true;
        this.setState({ meow: true });
        this.sound.play();
        setTimeout(() => {
            this.setState({ meow: false });
            // this.meow = false;
        }, 1000);
    }

    render() {
        const { Characterref, jump, happy, feeling, open, hat, ribbon } = this.props;
        console.log(hat);
        // console.log(outfit);
        // var hat;
        // var mask;
        // var shirt;


        // if (outfit !== null && outfit !== undefined) {
        //     if (outfit.type === "hat") {
        //         hat = outfit.image;
        //     } else if (outfit.type === "mask") {
        //         mask = outfit.image;
        //     } else if (outfit.type === "shirt") {
        //         shirt = outfit.image;
        //     }
        // }

        return (<>
            <motion.div
                id="character"
                onClick={() => this.playSound(MeowSfx)}
                style={{
                    scale: this.props.size ? this.props.size : "1",
                }}
            >
                <div id="Avatar"
                >
                    <div className="">
                        <div className=" ears"></div>
                        <div className=" head">
                            <img className="hat" src={this.props.hat?.asset_url} alt="" />
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
                                    happy || this.getMeow() ? <>
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
                                    <div className={`mouth ${this.props.happy && "meow"}`}>
                                        {this.getMeow() &&
                                            <div className="tongue"></div>
                                        }
                                    </div>
                                }
                                <div className={open ? "mouth_ open" : "mouth_ close "}></div>

                            </div>
                        </div>
                        <div className=" body">
                            <div id="collar"></div>
                            {/* <img id="ribbon" src={this.props.ribbon?.asset_url} alt="" /> */}
                            <img id="ribbon" src="https://www.svgrepo.com/show/423813/ribbon-origami-paper.svg" alt="" />
                        </div>
                        <div className="frontleg"></div>
                        <div className="backleg"></div>
                        <div className="tail"></div>
                    </div>
                </div>
            </motion.div>
        </>)
    }
}