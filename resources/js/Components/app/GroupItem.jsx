const GroupItem = ({imageLink,name,description}) => {
    return (
            <div className={'mb3 cursor-pointer hover:bg-gray-100'}>
                <div className={'flex items-start gap-1 py-2 px-2'}>
                <img alt='not found' src={imageLink} className={'w-[32px] rounded-full'}/>
                <div>
                    <h3 className={'font-black text-lg'}>{name}</h3>
                    <div className={'text-xs text-gray-500'}>
                        {description}
                    </div>
                </div>
            </div>
            </div>
    )
}


export default GroupItem;
