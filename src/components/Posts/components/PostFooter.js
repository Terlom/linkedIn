

const PostFooter = () => {

    return(
        <div className={"post-footer"}>
                <div className={"likes"}>
                    <i className={"icon likes-icon"}></i>
                    <span>42</span>
                </div>
                <div className={"comments"}>
                    <i className={"icon comments-icon"}></i>
                    <span>9</span>
                </div>
                <div className={"share"}>
                    <i className={"icon share-icon"}></i>
                    <span>SHARE</span>
                </div>
            </div>
    );
}

export default PostFooter