import React from "react";
import CreatePost from "../../components/CreatePost";
import PostSort from "../../components/Posts";
import PostItem from "../../components/Posts/PostItem";
import ProfilePhotoPost from "../../imgs/profilePhoto-post.png";
import PostImg from "../../imgs/post-img.png";

const users = [{
    id: 0,
    last_name: 'Kotel',
    first_name: 'Andrii',
    position: 'Junior Front-end',
    photo: ProfilePhotoPost
}
,{
    id: 1,
    last_name: 'Kovalskiy',
    first_name: 'Roma',
    position: 'Middle Front-end',
    photo: ProfilePhotoPost
},
    {
    id: 2,
    last_name: 'Krishka',
    first_name: 'Vasa',
    position: 'Senior Front-end',
    photo: ProfilePhotoPost
}
,{
    id: 3,
    last_name: 'Kokes',
    first_name: 'Misha',
    position: 'Team-lead',
    photo: ProfilePhotoPost
}];

const Feed = () => {
    const[feedList, setFeedList] = React.useState([
        {
            last_actions: {
                type: 'likes',
                users: [users[1], users[2]]
            },
            post_creator: users[0],
            amount_likes: 10,
            amount_comments: 40,
            attachments: [{
                filename: 'PDF file',
                size: '33.23 kb',
                url: 'https://localhost/kek.pdf',
                filetype: 'pdf'
            }],
            post_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo nulla, sodales non luctus sit amet, fringilla in velit. In aliquam, massa nec scelerisque pharetra, lorem ante consectetur mauris, sed imperdiet lorem diam vel elit. Nam suscipit, ipsum a convallis sodales, eros arcu egestas ante, sit amet fermentum arcu lacus sit amet quam. Vivamus sollicitudin dolor vel diam faucibus, nec posuere quam tincidunt. Maecenas eu dui dolor. Vivamus imperdiet leo leo, sit amet lobortis justo ullamcorper pulvinar. Nunc vitae semper leo. Mauris et lacus non lorem aliquet dictum. Duis a sollicitudin lacus, id elementum nulla. Pellentesque auctor aliquet mauris non efficitur. Nunc rhoncus nisi vitae imperdiet placerat. Maecenas eget velit ac ex sollicitudin auctor nec eget quam. Ut vel fringilla diam. Ut cursus rhoncus dolor, et bibendum urna rhoncus ut.\n" +
                "\n" +
                "Nulla auctor mauris nec facilisis sagittis. Sed vitae sollicitudin felis, quis semper risus. Quisque faucibus massa nec leo eleifend, vel maximus sem laoreet. Nunc suscipit nibh non turpis posuere, in efficitur enim consequat. Aliquam luctus, arcu ac sollicitudin fringilla, diam lorem dapibus erat, quis placerat ante mi eu diam. Nunc laoreet, dolor sed ultricies placerat, nisl nisl faucibus elit, sed suscipit quam purus sit amet tellus. In ut est vulputate, pretium dolor vel, cursus ex.",

            post_img: PostImg
        },
        {
            last_actions: {
                type: 'likes',
                users: [users[1], users[2]]
            },
            post_creator: users[2],
            amount_likes: 10,
            amount_comments: 40,
            attachments: [{
                filename: 'PDF file',
                size: '33,5 kb',
                url: 'https://localhost/kek.pdf',
                filetype: 'pdf'
            }],
            post_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo nulla, sodales non luctus sit amet, fringilla in velit. In aliquam, massa nec scelerisque pharetra, lorem ante consectetur mauris, sed imperdiet lorem diam vel elit. Nam suscipit, ipsum a convallis sodales, eros arcu egestas ante, sit amet fermentum arcu lacus sit amet quam. Vivamus sollicitudin dolor vel diam faucibus, nec posuere quam tincidunt. Maecenas eu dui dolor. Vivamus imperdiet leo leo, sit amet lobortis justo ullamcorper pulvinar. Nunc vitae semper leo. Mauris et lacus non lorem aliquet dictum. Duis a sollicitudin lacus, id elementum nulla. Pellentesque auctor aliquet mauris non efficitur. Nunc rhoncus nisi vitae imperdiet placerat. Maecenas eget velit ac ex sollicitudin auctor nec eget quam. Ut vel fringilla diam. Ut cursus rhoncus dolor, et bibendum urna rhoncus ut.\n" +
                "\n" +
                "Nulla auctor mauris nec facilisis sagittis. Sed vitae sollicitudin felis, quis semper risus. Quisque faucibus massa nec leo eleifend, vel maximus sem laoreet. Nunc suscipit nibh non turpis posuere, in efficitur enim consequat. Aliquam luctus, arcu ac sollicitudin fringilla, diam lorem dapibus erat, quis placerat ante mi eu diam. Nunc laoreet, dolor sed ultricies placerat, nisl nisl faucibus elit, sed suscipit quam purus sit amet tellus. In ut est vulputate, pretium dolor vel, cursus ex.",

            post_img: PostImg
        }
    ])

    return(
        <main className={"content"}>
            <CreatePost/>
            <PostSort/>
            {
                feedList.map(post =>( <PostItem post = {post} />))
            }
        </main>
    )
}
export default Feed
