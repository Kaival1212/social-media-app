import { Tab } from '@headlessui/react'
import {useState} from "react";
import {Head} from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import Edit from "@/Pages/Profile/Edit.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import Guest from "@/Layouts/GuestLayout.jsx";

export default function View({auth,mustVerifyEmail , status}) {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <Authenticated header={'Profile'} user={auth.user}>
            <Head title={`${auth.user?.name || 'User'}'s Profile`} inertia={true}/>

            <div className={' w-[768px] mx-auto bg-white'}>

                <div className={'relative'}>
                    <img src={'https://www.trendycovers.com/covers/1322932923.jpg'}
                         className={'h-[200px] w-full object-cover shadow-xl'}/>
                    <img className={'absolute rounded-full -bottom-[68px] left-[48px] w-[128px] h-[128px] shadow-xl'}
                         src={'https://randomuser.me/api/portraits/med/men/70.jpg'}/>
                </div>

                <div className={'ml-[190px] w-[65vw] md:w-auto mt-3 flex justify-between items-center'}>
                    <h2 className={'font-bold text-lg'}>{auth.user?.name}</h2>
                    <PrimaryButton className={'mr-10'}>Edit Profile</PrimaryButton>
                    </div>

                <div className="pt-8">
                    <Tab.Group>
                        <Tab.List className="flex bg-white">
                            <Tab className={({selected}) => classNames('px-3 py-2.5 text-sm',selected ? 'bg-white text-blue-500 border-b-2 border-blue-500' : 'text-gray-700')}>
                                {'About'}
                            </Tab>
                                <Tab className={({selected}) => classNames('px-3 py-2.5 text-sm',selected ? 'bg-white text-blue-500 border-b-2 border-blue-500' : 'text-gray-700')}>
                                    {'Posts'}
                                </Tab>
                            <Tab className={({selected}) => classNames('px-3 py-2.5 text-sm',selected ? 'bg-white text-blue-500 border-b-2 border-blue-500' : 'text-gray-700')}>
                                {'Followers'}
                            </Tab>
                            <Tab className={({selected}) => classNames('px-3 py-2.5 text-sm',selected ? 'bg-white text-blue-500 border-b-2 border-blue-500' : 'text-gray-700')}>
                                {'Following'}
                            </Tab>
                            <Tab className={({selected}) => classNames('px-3 py-2.5 text-sm',selected ? 'bg-white text-blue-500 border-b-2 border-blue-500' : 'text-gray-700')}>
                                {'Photos'}
                            </Tab>

                        </Tab.List>

                        <Tab.Panels className="mt-2">
                            <Tab.Panel className={''}>
                                <Edit auth={auth} mustVerifyEmail={mustVerifyEmail} status={status}/>
                            </Tab.Panel>
                                <Tab.Panel className={' bg-white p-3 shadow'}>
                                    <h1>
                                        Post Content
                                    </h1>
                                </Tab.Panel>

                            <Tab.Panel  className={' bg-white p-3 shadow'}>
                                <h1>
                                    Followers
                                </h1>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </Authenticated>
    )
}
