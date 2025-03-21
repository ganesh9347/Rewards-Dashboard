import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './usersSlice';
import './UserList.css';

const UserList = () => {
    const dispatch = useDispatch();
    const { list, status, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (status === 'loading') return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="user-list">
            <h2>User List</h2>
            <ul>
                {list.map((user) => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
