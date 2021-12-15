import PostImg from "../../../imgs/post-img.png";


const PostContent = (props) => {

    return(
        <div className="post-content">
            <div className={"post-text-container"}>
                <p>
                    {props.text}
                </p>
                <button className={"read-more"}>Read more</button>
            </div>
            <div className={"post-img-container"}>
                <img src={props.img} alt="Post img"/>
            </div>
            {
                props.attachments.map((el) => (
                    <div className={"post-file-container"}>
                    <div className={"file-icon-container"}>
                        <i className={"icon file-icon"}></i>
                    </div>
                    <div className={"file-description"}>
                        <h6>{el.filename}</h6>
                        <p>{el.filetype} file, {el.size}</p>
                    </div>
                    <i className={"icon download-icon"}></i>
                </div>
                ))
            }

        </div>
    );
}

export default PostContent