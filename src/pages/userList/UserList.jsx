import "./userList.css"
import {DataGrid} from '@mui/x-data-grid';
import {DeleteOutline} from "@material-ui/icons";
import {userRows} from "../../dummyData";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function UserList() {
    // set state
    const [data, setData] = useState(userRows);
    //func to delete user record by id
    const handelDelete = (id) =>{
        setData(data.filter(item => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 95 },
        { field: 'user', headerName: 'User', width: 170, renderCell: (params)=>{
            return (
                <div className="userListProfile">
                    <img src={params.row.image} alt="" className="userListImg"/>
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 168 },
        { field: 'status', headerName: 'Status', width: 110 },
        { field: 'transcation', headerName: 'Transcation Paid', width: 190 },
        { field: 'age',headerName: 'Age',width: 120},
        { field: 'action',headerName: 'Action', width: 120, renderCell: (params) =>{
            return (
                <>
                    <Link to={"/user/" + params.row.id}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="userListDelete" onClick={()=>handelDelete(params.row.id)}/>
                </>
            )
        }},
    ];

    return (
        <div className="userList">
            <DataGrid
                rows={data} 
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}
