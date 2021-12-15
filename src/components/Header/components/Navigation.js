
const Navigation = () => {
    return (
        <div className={"header-navigation"}>
            <nav>
                <ul className="nav">
                    <li className={"active"}>
                        <div id={"notification-quantity"}>5</div>
                        <i className={"feed-nav-icon icon"}></i>
                        <h6>FEED</h6>
                    </li>
                    <li>
                        <div id={"notification-quantity"}>5</div>
                        <i className={"network-nav-icon icon"}></i>
                        <h6>NETWORK</h6>
                    </li>
                    <li>
                        <div id={"notification-quantity"}>5</div>
                        <i className={"jobs-nav-icon icon"}></i>
                        <h6>JOBS</h6>
                    </li>
                    <li>
                        <div id={"notification-quantity"}>5</div>
                        <i className={"chat-nav-icon icon"}></i>
                        <h6>CHAT</h6>
                    </li>
                    <li>
                        <div id={"notification-quantity"}>5</div>
                        <i className={"notices-nav-icon icon"}></i>
                        <h6>NOTICES</h6>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Navigation