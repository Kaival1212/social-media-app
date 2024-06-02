import {useState} from "react";

export function CreatePost() {

    const [postCreating, setpostCreating] = useState(false);

    return (
        <div className={'p-4 bg-white rounded-lg border mb-3 '}>
            <div onClick={()=>{setpostCreating((ref)=>!ref)}} className={'py-3 px-2 text-gray-200 border border-gray-200 rounded mb-3'}>
                Click here to create new post
            </div>

            {postCreating ?
                (<div className={'flex gap-2 justify-between'}>
                <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative" >
                    Attach files
                    <input type={'file'} className={'absolute left-0 top-0 right-0 bottom-0 opacity-0'}/>
                </button>
                <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Submit
                </button>
            </div>) : null
            }


        </div>
    )
}
