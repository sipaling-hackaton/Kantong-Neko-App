import React from "react";
import { motion, useDragControls } from "framer-motion"
import "./Object.scss"
import Sparkles from "@/Components/General/Sparkle/Sparkle";

export class Object extends React.Component<{ ObjectRef?: any, Eaten?: any, Image?: any }, {}>{
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
        const { ObjectRef, Eaten, Image } = this.props;
        return (
            // <Sparkles>
            <motion.img
                onDragEnd={(e) => {
                    setTimeout(() => {
                        Eaten(false)
                    }, 1000);
                    Eaten(true)
                }}
                id="Object"
                ref={ObjectRef}
                drag
                dragSnapToOrigin
                src={Image} alt="" />
            // </Sparkles>
        )
    }
}