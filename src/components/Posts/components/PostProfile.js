import ProfilePhotoPost from "../../../imgs/profilePhoto-post.png";

const PostProfile = (props) => {

    return(
        <div className={"profile-post"}>
            <img src={props.photo} alt="Profile-photo"/>
            <div className={"profile-shortInfo"}>
                <h5>{props.name}</h5>
                <p>{props.position}</p>
            </div>
        </div>
    );
}

export default PostProfile