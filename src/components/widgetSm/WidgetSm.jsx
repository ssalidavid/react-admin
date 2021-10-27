import "./widgetSm.css";
import {Visibility} from "@material-ui/icons";

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Memebers</span>
            <ul className="widgetSmList">
                <li className="widgetSmItem">
                    <img src="./assets/img/u.jpg" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Ravi Reada</span>
                        <span className="widgetSmUserTitle">Fashion Star</span>                        
                    </div>
                    <button className="widgetSmBtn" title="Display">
                        <Visibility/>
                    </button>
                </li>
                <li className="widgetSmItem">
                    <img src="./assets/img/avi.jpg" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">David Ssali</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>                        
                    </div>
                    <button className="widgetSmBtn" title="Display">
                        <Visibility/>
                    </button>
                </li>
                <li className="widgetSmItem">
                    <img src="./assets/img/features.jpg" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Dore Hacker</span>
                        <span className="widgetSmUserTitle">Hacker</span>                        
                    </div>
                    <button className="widgetSmBtn" title="Display">
                        <Visibility/>
                    </button>
                </li>
                <li className="widgetSmItem">
                    <img src="./assets/img/sm.jpg" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Dongo Hajji</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>                        
                    </div>
                    <button className="widgetSmBtn" title="Display">
                        <Visibility/>
                    </button>
                </li>
                <li className="widgetSmItem">
                    <img src="./assets/img/gu.jpg" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Dr Juniro</span>
                        <span className="widgetSmUserTitle">Doctor</span>                        
                    </div>
                    <button className="widgetSmBtn" title="Display">
                        <Visibility/>
                    </button>
                </li>
            </ul>
        </div>
    )
}
