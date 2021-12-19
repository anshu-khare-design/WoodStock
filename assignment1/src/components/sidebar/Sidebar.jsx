import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">On chain Metrics</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem active">
                                Ethereum
            </li>
                        </Link>
                        <Link to="/solana" className="link">
                            <li className="sidebarListItem">
                                Solana
            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}
