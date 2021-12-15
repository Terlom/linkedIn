import HashtagItem from "./HashtagItem";

const HashtagList = () => {
    return (
        <section className={"hashtag-list"}>
            <div className={"sideBlock-container"}>
                <h6 className={"block-header"}>FOLLOWED HASHTAGS</h6>
                <div className={"hashtag-items"}>
                    <HashtagItem/>
                </div>
            </div>
        </section>
    );
}
export default HashtagList;