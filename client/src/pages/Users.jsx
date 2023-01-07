import { useEffect, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from '../data';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../redux/apiRequest';
import { createAxios } from '../axiosInstance';
import { getAllUsersSuccess } from '../redux/userSlice'


const Users = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.auth.login?.currentUser);
    let userList = useSelector(state => state.users.users?.allUsers);
    const axiosJWT = createAxios(user, dispatch, getAllUsersSuccess);
    const [data, setData] = useState([]);

   console.log('User: ', user)
   console.log('UserList: ', userList)

    useEffect(() => {
        if(!user){
            navigate('/login');
        }
        if(user?.accessToken) {
            getAllUsers(user.accessToken, dispatch, axiosJWT);
        }
    }, [])

    useEffect(() => {
        setData(userList)
    }, [userList])



    // const handleDelete = useCallback((id) => {
    //     console.log('tao moi handleDelete')
    //     if(!user.isAdmin && id === user._id) {
    //         setTimeout(() => {
    //             setData(data.filter(item => item._id !== id))
    //         });

    //     } else if(!user.isAdmin && id !== user._id) {
    //         window.alert('you can delete your account!')
    //     } else {
    //         setTimeout(() => {
    //             setData(data.filter(item => item._id !== id))
    //         });
    //     }

    // }, [data, user._id, user.isAdmin]);

    const handleDelete = (id) => {
        if(!user.isAdmin && id === user._id) {
            setTimeout(() => {
                setData(data.filter(item => item._id !== id))
            });

        } else if(!user.isAdmin && id !== user._id) {
            window.alert('you can delete your account!')
        } else {
            setTimeout(() => {
                setData(data.filter(item => item._id !== id))
            });
        }

    }


    const actionColumn = [
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={`/users/${params.row._id}`} className='cellAction__viewBtn'>
                            view
                        </Link>
                        <button 
                            className="cellAction__deleteBtn"
                            onClick={()=>handleDelete(params.row._id)}
                        >
                            Delete
                        </button>
                    </div>
                );
            },
        },
    ];

    return (
        <div className='table'>
            <div className="table__header">
                <h3 className="table__title">
                    Users List
                </h3>
                <Link to='/users/new' className="table__btn btn">
                    Add New
                </Link>
            </div>
            <div className="table__main">
                <DataGrid 
                    getRowId={(row) => row._id}
                    className='table__datagrid'
                    rows={data || []}
                    columns={userColumns.concat(actionColumn)}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}

export default Users;
