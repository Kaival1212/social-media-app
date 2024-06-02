const FollowerItem = ({imageLink,name}) => {
    return (
            <div className={'mb3 cursor-pointer hover:bg-gray-100'}>
                <div className={'flex items-center gap-2 py-2 px-2'}>
                <img alt={'not found'} src={imageLink} className={'w-[32px] rounded-full'}/>
                <div>
                    <h3 className={'font-black'}>{name}</h3>
                </div>
            </div>
            </div>
    )
}


export default FollowerItem;
