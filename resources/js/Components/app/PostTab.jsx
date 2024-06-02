import PostItem from "@/Components/app/PostItem.jsx";

export function PostTab() {

    const post1 ={
        user:{
            id:1,
            avatar: 'https://randomuser.me/api/portraits/med/men/75.jpg',
            name: 'John smith'
        },
        group: null,
        attachments:[
            {
            id:1,
                name: 'test.png',
                mime: 'image/png',
                url: 'https://picsum.photos/1000'
        },
            {
                id:2,
                name: 'test.png',
                mime: 'image/png',
                url: 'https://picsum.photos/1001'
            },
            {
                id:3,
                name: 'Hello.docx',
                mime: 'application/word',
                url: '#'
            }
        ],
        body:`<p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum Lorem ipsum dolor sit amet comes from a line in section 1.10.32. </p>`,
        created_at: '2023-11-19 15:12'
    }

    const post2 ={
        user:{
            id:1,
            avatar: 'https://randomuser.me/api/portraits/med/men/76.jpg',
            name: 'sadasd sada'
        },
        group: {
            name : 'ssas'
        },
        body:`<p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum Lorem ipsum dolor sit amet comes from a line in section 1.10.32. </p>`,
        created_at: '2023-11-19 15:12'
    }

    return (
        <div className={'lg:max-h-[82.5vh] lg:overflow-auto'} >

            <PostItem post={post1}/>
            <PostItem post={post1}/>
            <PostItem post={post1}/>
            <PostItem post={post2}/>

        </div>
    )
}
