import PostHeader from "./components/PostHeader";
import PostProfile from "./components/PostProfile";
import PostContent from "./components/PostContent";
import PostFooter from "./components/PostFooter";



const PostItem = ({post}) => {

    return (
        <section className={"post-item"}>
            <PostHeader/>
            <div className={"post-container"}>
                <PostProfile name = {`${post.post_creator.first_name} ${post.post_creator.last_name}`}
                             position = {post.post_creator.position}
                             photo = {post.post_creator.photo}
                />
                <PostContent text ={post.post_text}
                             img ={post.post_img}
                             attachments = {post.attachments}
                />
            </div>
            <PostFooter/>
        </section>
    );
}
export default PostItem