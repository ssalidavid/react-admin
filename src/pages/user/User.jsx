import "./user.css";
import 
{
    PermIdentity,
    LocationSearching,
    MailOutline,
    PhoneAndroid,
    CalendarToday,
    Publish
} from "@material-ui/icons";
import {Link} from "react-router-dom";

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddBtn">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="../assets/img/u.jpg" alt="" 
                        className="userProfileImg"/>
                        <div className="usershowTopTitle">
                            <span className="Username">Anna Becker</span>
                            <span className="UserTitle">Accountant</span>                            
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="usershowTitle">User's Details</span>
                       <div className="userShowInfo">
                            <PermIdentity className="userIcon"/>
                            <span className="usernameInfo">Anna89</span>
                       </div>
                       <div className="userShowInfo">
                            <CalendarToday className="userIcon"/>
                            <span className="usernameInfo">19.7.1992</span>
                       </div>
                       <div className="userShowInfo">
                            <CalendarToday className="userIcon"/>
                            <span className="usernameInfo">Married</span>
                       </div>
                       <span className="usershowTitle">User's Contact Details</span>
                       <div className="userShowInfo">
                            <MailOutline className="userIcon"/>
                            <span className="usernameInfo">Anna89@gmail.com</span>
                       </div>
                       <div className="userShowInfo">
                            <PhoneAndroid className="userIcon"/>
                            <span className="usernameInfo">+256789504312</span>
                       </div>
                       <div className="userShowInfo">
                            <LocationSearching className="userIcon"/>
                            <span className="usernameInfo">Kampala | Uganda</span>
                       </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit User's Information</span>
                    <form  className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" 
                                className="userUpdateInput" placeholder="Anna89"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" 
                                className="userUpdateInput" placeholder="Anna89@gmail.com"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Date of Birth</label>
                                <input type="text" 
                                className="userUpdateInput" placeholder="19.7.1992"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone Number</label>
                                <input type="text" 
                                className="userUpdateInput" placeholder="+256789504312"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Status</label>
                                <input type="text" 
                                className="userUpdateInput" placeholder="Married"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Phyical Address</label>
                                <input type="text" 
                                className="userUpdateInput" placeholder="Kampala | Uganda"/>
                            </div>
                        </div>
                        <div className="userUpdateLeft">
                            <div className="userUpdateUpload">
                                <img src="../assets/img/sm.jpg" alt="" className="userUpdateImg"/>
                                <label htmlFor="file" className="userUpdateIcon"><Publish/></label>
                                <input type="file" id="file" style={{display:"none"}}/>
                            </div>
                            <button className="userUpdateBtn">Update</button>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    )
}
