import { Disclosure } from '@headlessui/react'
import {useState} from "react";
const PostItem = ({post}) => {

    const [isOpen , setIsOpen] = useState(false)

    function isImage(attachment){
        const mime = attachment.mime.split('/')
        return mime[0].toLocaleLowerCase() === 'image'
    }

    return (
        <div className={'bg-white border rounded p-4'}>
            <div className={'flex items-center gap-2 mb-3'}>
                <a href={void(0)}>
                <img alt={'image not found'} src={post.user.avatar} className={'w-[40px] rounded-full  border-2 transition-all  hover:border-blue-500 cursor-pointer'}/>
                </a>
                <div>

                    <h4 className={'font-bold cursor-pointer'}>
                        <a href={void (0)} className={"hover:underline"}>
                            {post.user.name}
                        </a>
                        {post.group?.name &&
                            (
                        <a href={void (0)}>
                            <span> {'> '}</span>
                            <span className={"hover:underline"}>
                            {post.group.name}
                            </span>
                        </a>)
                        }
                    </h4>

                    <small className={'text-gray-400'}>{post.created_at}</small>
                </div>

            </div>
            <div className={'mb-3'}>
                <Disclosure as="div" className="p-6" >
                    {!isOpen && <div dangerouslySetInnerHTML={{__html: post.body.substring(0,100)}}/>}
                    <Disclosure.Panel className="">
                        <div dangerouslySetInnerHTML={{__html: post.body}}/>
                    </Disclosure.Panel>
                    <div className={'flex justify-end'}>
                    <Disclosure.Button className={'text-blue-500 hover:underline'} onClick={()=>{setIsOpen((v)=>!v)}}>
                        { isOpen ? 'Read Less' : 'Read More'}
                    </Disclosure.Button>
                    </div>
                </Disclosure>
            </div>
            <div className={'grid grid-cols-1 lg:grid-cols-3 gap-3 md:grid-cols-2 mb-3'}>
                {post.attachments?.map((attachment)=>{
                    return(
                        <div key={attachment.id}>
                            <div
                                className={'group bg-blue-100 text-gray-500 flex flex-col aspect-square justify-center items-center relative'}>
                                <button className={'opacity-0 group-hover:opacity-80 transition-all w-6 h-6 bg-gray-600 hover:bg-gray-700 flex items-center justify-center text-gray-100 rounded absolute right-2 top-2 cursor-pointer'}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-4 h-4 ">
                                    <path
                                        d="M12 1.5a.75.75 0 0 1 .75.75V7.5h-1.5V2.25A.75.75 0 0 1 12 1.5ZM11.25 7.5v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z"/>
                                </svg>
                                </button>
                            {isImage(attachment) ?
                                <img alt={'image not found'} src={attachment.url} className={'object-cover aspect-square'}/>
                                :

                                (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                         className=" w-12 h-12">
                                        <path
                                            d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625Z"/>
                                        <path
                                            d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"/>
                                    </svg>

                                        <small>{attachment.name}</small>
                                    </>)

                            }
                            </div>
                        </div>
                    )
                    }
                )}
            </div>
            <div className={'flex gap-2'}>
                <button className={'flex gap-1 items-center justify-center bg-green-100 hover:bg-green-200 py-2 px-4 flex-1 rounded-lg'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path
                            d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z"/>
                    </svg>
                    Like
                </button>
                <button className={'flex gap-1 items-center justify-center bg-green-100 hover:bg-green-200 py-2 px-4 flex-1 rounded-lg'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd"
                              d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z"
                              clipRule="evenodd"/>
                    </svg>
                    Comment
                </button>
            </div>

        </div>
    )
}


export default PostItem;
