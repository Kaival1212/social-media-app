import TextInput from "@/Components/TextInput.jsx";
import GroupItem from "@/Components/app/GroupItem.jsx";
import {useRef, useState} from "react";

export function GroupsTab() {

    const [groupsHandler,setGrouprsHandler] = useState(true);
    const searchValue = useRef('')


    return (
        <div className={'px-3 bg-white rounded border py-3 '}>
            <h2 className={'text-xl font-bold mb-4'}>
                My Groups
            </h2>
            <TextInput ref={searchValue} placeholder={'type to search'} className={'w-full'}/>
            <div className={'py-8'}>
                {!groupsHandler ?
                    (<div className={'text-gray-400 flex text-center px-3'}>
                        You are not joined to any groups
                    </div>)
                    :
                    (<div className={'max-h-[150px] overflow-auto md:max-h-[200px] lg:max-h-[300px]'}>
                        <GroupItem name={'hello'} description={'hellllll'} imageLink={'https://picsum.photos/100'}/>
                        <GroupItem name={'hello'} description={'hellllll'} imageLink={'https://picsum.photos/101'}/>

                    </div>)}
            </div>
        </div>
    )
}
