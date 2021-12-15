import './App.css';
import Header from "./components/Header";
import Feed from "./pages/Feed";
import ProfileInfo from "./components/ProfileInfo";
import GroupList from "./components/Groups/GroupList";
import HastagList from "./components/HashTags/HastagList";
import TrendingArticleList from "./components/TrendingArticles";
import WriteArticle from "./components/ProfileInfo/WriteArticle";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header/>
      <div className={"container"}>
          <Feed/>
        <aside>
          <ProfileInfo/>
          <WriteArticle/>
          <GroupList/>
          <HastagList/>
          <TrendingArticleList/>
        </aside>
      </div>
        <Footer/>
    </div>
  );
}

export default App;
