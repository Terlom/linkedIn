import TrandingArticleItem from "./TrendingArticleItem";

const TrendingArticleList = () => {
    return (
        <section className={"trending-article-list"}>
            <div className={"sideBlock-container"}>
                <div className={"block-header"}>
                   <h6>TRANDING ARTICLES</h6>
                </div>
                <TrandingArticleItem/>
            </div>
        </section>
    );
}
export default TrendingArticleList