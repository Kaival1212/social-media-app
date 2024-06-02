import { Head } from '@inertiajs/react';
import {Fragment} from "react";
import {GroupsTab} from "@/Components/app/GroupsTab.jsx";
import {FollowerTab} from "@/Components/app/FollowerTab.jsx";
import {PostTab} from "@/Components/app/PostTab.jsx";
import {CreatePost} from "@/Components/app/CreatePost.jsx";
import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";

export default function Home({ auth }) {

    // const handleImageError = () => {
    //     document.getElementById('screenshot-container')?.classList.add('!hidden');
    //     document.getElementById('docs-card')?.classList.add('!row-span-1');
    //     document.getElementById('docs-card-content')?.classList.add('!flex-row');
    //     document.getElementById('background')?.classList.add('!hidden');
    // };

    return (
        <>
           <Head title={'Social Media Website'}/>
            <Authenticated
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Social Media</h2>}
            >
                <div className={'p-4'}>
                    <div className={'grid lg:grid-cols-12 gap-3'}>
                <div className={'col-span-3 lg:order-1'}>
                    <GroupsTab/>
                </div>
                <div className={'col-span-3 lg:order-3'}>
                    <FollowerTab/>
                </div>
                <div className={'col-span-6 lg:order-2'}>
                    <CreatePost/>
                    <PostTab/>
                </div>

            </div>
            </div>
            </Authenticated>
        </>
    );
}
