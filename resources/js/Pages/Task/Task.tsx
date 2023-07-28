import React from "react";
import Layout from "@/Layouts/GuestLayout";

export default function Task() {
    return (<>
        This task
    </>);

}


Task.layout = (page: any, logo: any) => <Layout children={page} />;