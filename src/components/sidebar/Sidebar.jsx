import "./sidebar.css";
import {
    LineStyle,
    Timeline,
    TrendingUp,
    Report,
    Message,
    MailOutline,
    DynamicFeed,BarChart,
    WorkOutline,PersonOutline,
    ListAlt,MoneyOff
} from "@material-ui/icons";
import {
    BrowserRouter as 
    Link
} from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWraapper">
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Dashboard</div>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon"/> Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/> Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/> Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Quick Menu</div>
                    <ul className="sidebarList">
                        <Link to="/users">
                            <li className="sidebarListItem">
                                <PersonOutline className="sidebarIcon"/> Users
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <ListAlt className="sidebarIcon"/> Products
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <MoneyOff className="sidebarIcon"/> Transcations
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon"/> Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Notifications</div>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon"/> Mails
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon"/> FeedBacks
                        </li>
                        <li className="sidebarListItem">
                            <Message className="sidebarIcon"/> Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Staff</div>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon"/> Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/> Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon"/> Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
