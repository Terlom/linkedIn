import FooterLogo from '../../imgs/footer-logo.png'
const Footer = () => {
    return (
        <footer>
            <div className={"container"}>
                <div className={"footer-logo"}>
                    <img src={FooterLogo} alt="Logo"/>
                </div>
                <div className={"footer-nav"}>
                    <h6>Navigation</h6>
                    <ul>
                        <li>About</li>
                        <li>Talent Solution</li>
                        <li>Community Guidelines</li>
                        <li>Careers</li>
                        <li>Marketing Solution</li>
                        <li>Privacy & Terms</li>
                        <li>Advertising</li>
                        <li>Sales Solution</li>
                        <li>Mobile App</li>
                        <li>Small Business</li>
                        <li>Safery Center</li>
                    </ul>
                </div>
                <div className={"fast-access"}>
                    <h6>Fast access</h6>
                    <button className={"questions"}><h6>QUESTIONS?</h6><i className={"icon questions-icon"}></i></button>
                    <button className={"settings"}><h6>SETTINGS</h6><i className={"icon settings-icon"}></i></button>
                </div>
                <div className={"language"}>
                    <h6>Language</h6>
                    <select className="browser-default">
                        <option value="1" selected>ENGLISH</option>
                        <option value="2">UKRAINIAN</option>
                        <option value="3">RUSSIAN</option>
                        <div className={"icon arrow-up-right-icon"}></div>
                    </select>
                </div>
            </div>
        </footer>
    );
}
export default Footer