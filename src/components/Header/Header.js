import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

const Header = () => {
        return (
            <header className={""}>
                <Logo/>
                <Navigation/>
                <Search/>
                <Profile/>
                <Settings/>
            </header>
        );
}
export default Header