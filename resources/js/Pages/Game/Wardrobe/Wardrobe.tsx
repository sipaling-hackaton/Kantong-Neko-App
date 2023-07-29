import { Avatar } from "@/Components/Game/Avatar";
import React, { useEffect } from "react";
import Data from "./WardrobeData.json";
import "./Wardrobe.scss";
import WardrobeData from "./WardrobeData.json";
import WardrobeCard from "@/Components/Game/Wardrobe/WardrobeCard";
import Guest from "@/Layouts/GuestLayout";
import { router, useForm } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

export default function Wardrobe({ ItemData, activeAccount, avatar }: any) {
    const { data, setData, post } = useForm({
        hat_id: activeAccount.avatar.hat.id,
        ribbon_id: activeAccount.avatar.ribbon.id,
    });

    console.log(data);

    const handleWardrobeChange = (
        hat_id: any = null,
        ribbon_id: any = null
    ) => {
        if (hat_id != null) setData("hat_id", hat_id);
        if (ribbon_id != null) setData("ribbon_id", ribbon_id);
        post(route("wardrobe.update"));
    };

    return (
        <div id="Wardrobe_page">
            <Avatar
                ribbon={activeAccount.avatar.hat}
                hat={activeAccount.avatar.ribbon}
            />
            <div id="Wardrobe_list">
                {ItemData.map((item: any) => {
                    return (
                        <WardrobeCard
                            item={item}
                            handleWardrobeChange={handleWardrobeChange}
                        />
                    );
                })}
            </div>
        </div>
    );
}

Wardrobe.layout = (page: any, logo: any) => <AppLayout children={page} />;
