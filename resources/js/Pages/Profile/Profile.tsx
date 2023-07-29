import { Avatar } from '@/Components/Game/Avatar';
import Guest from '@/Layouts/GuestLayout';
import React from 'react'
import './Profile.scss'
import { router } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';


const Card = ({ merchant }: any) => {
    return (
        <div id='merchant'>
            <img src={merchant.image} alt="" />
            <div id="text">
                <h1>{merchant.name}</h1>
                <h2>{merchant.end_date}</h2>
            </div>
        </div>
    )
}

export default function Profile({ activeAccount, merchantData }: any) {
    console.log(merchantData);
    console.log(activeAccount);
    const logout = () => {
        router.post('/logout');
    }

    return (
        <div id='Profile'>
            <h1 id='title'>Profile</h1>
            <div id="top">
                <div id="profile_avatar">
                    <Avatar size='0.2' ribbon={activeAccount.avatar.hat} hat={activeAccount.avatar.ribbon} />
                </div>
                <div id="profile_user">
                    <h2>{activeAccount.accountName}</h2>
                    <h3 id='accountNo'>{activeAccount.accountNo}</h3>
                </div>
            </div>
            <div id='account'>
                <h1>Coupon Kamu</h1>
                {
                    merchantData.map((merchant: any) => {
                        return (
                            <Card merchant={merchant} />
                        )
                    }
                    )
                }
            </div>
            {/* <h2>{activeAccount.email}</h2> */}
            <button id='logout' onClick={logout}>
                Log out <img src="https://www.svgrepo.com/show/521734/log-out.svg" alt="" />
            </button>
        </div>
    )
}


Profile.layout = (page: any, logo: any) => <AppLayout>{page}</AppLayout>;