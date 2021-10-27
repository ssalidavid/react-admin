import "./newUser.css"

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="userTitle">Add New User</h1>
            <form className="newUserForm">
                <div className="userItem">
                    <label>Username</label>
                    <input type="text" placeholder="Jone"/>
                </div>
                <div className="userItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="Jon Smith"/>
                </div>
                <div className="userItem">
                    <label>Email Address</label>
                    <input type="email" placeholder="jon20@gmail.com"/>
                </div>
                <div className="userItem">
                    <label>Phone Number</label>
                    <input type="text" placeholder="+256785904312"/>
                </div>
                <div className="userItem">
                    <label>Password</label>
                    <input type="Password" placeholder="password"/>
                </div>
                <div className="userItem">
                    <label>Address</label>
                    <input type="text" placeholder="Kitende | Uganda"/>
                </div>
                <div className="userItem">
                    <label>Gender</label>
                    <div className="userGender">
                        <input type="radio" name="gender" id="male" value="fale"/>
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female"/>
                        <label for="female">Female</label>
                    </div>
                </div>
                <div className="userItem">
                    <label>Active</label>
                    <select name="active" id="active" className="SelectUser">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="btnadd">Add User</button>
            </form>
        </div>
    )
}
