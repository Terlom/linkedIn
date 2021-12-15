
const CreatePost = ({newPostContent, handleChange}) => {
    return (
        <section className={'create-post'}>
            <div className={"content-container"}>
                <h6 className={"createPost-header"}>
                    NEW POST
                </h6>
                <form>
                    <input type="text" placeholder="What’s on your mind?"/>
                    <label className={'attach-label icon attach-file-icon'} htmlFor={"input-file"}>
                        <input type={"file"} name="file" id="input-file" multiple/>
                    </label>
                    <label className={'attach-label icon attach-img-icon'} htmlFor={"input-img"}>
                        <input type={"file"} name="image" id="input-img" multiple/>
                    </label>
                    <label className={'attach-label icon attach-video-icon'} htmlFor={"input-video"}>
                        <input type={"file"} name="video" id="input-video" multiple/>
                    </label>
                    <button className={''}><i className={"icon submit-icon"}></i></button>
                </form>
            </div>
        </section>
    );
}
export default CreatePost