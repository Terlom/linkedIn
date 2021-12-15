import TrendingItemImg1 from "../../imgs/trendingArticle1.png";
import TrendingItemImg2 from "../../imgs/trendingArticle2.png";
import TrendingItemImg3 from "../../imgs/trendingArticle3.png";


const Header = () => {
    return (
        <div className={"trending-article-items"}>
            <div className={"trending-article-item"}>
                <img src={TrendingItemImg1} alt="trending-article-item"/>
                <div className={"article-describers"}>
                    <h5>How I make cool design?</h5>
                    <span id={"viewers"}>6,340 viewers</span>
                </div>
            </div>
             <div className={"trending-article-item"}>
                <img src={TrendingItemImg2} alt="trending-article-item"/>
                <div className={"article-describers"}>
                    <h5>Advices for young HR-manage</h5>
                    <span id={"viewers"}>8,123 viewers</span>
                </div>
             </div>
            <div className={"trending-article-item"}>
                <img src={TrendingItemImg3} alt="trending-article-item"/>
                <div className={"article-describers"}>
                    <h5>A little about usability testing</h5>
                    <span id={"viewers"}>3,912 viewers</span>
                </div>
            </div>
        </div>

    );
}
export default Header