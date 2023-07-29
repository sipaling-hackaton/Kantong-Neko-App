import React from "react";
import Layout from "@/Layouts/GuestLayout";
import TaskCard from "@/Components/Task/TaskCard";

export default function Task() {
    let i = 5;

    return (<>
        <h1> Tugas</h1>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
        }}>
            {
                Array.from(Array(i).keys()).map((i) => {
                    return <TaskCard key={i} />
                }
                )
            }
        </div>
    </>);

}


Task.layout = (page: any, logo: any) => <Layout children={page} />;