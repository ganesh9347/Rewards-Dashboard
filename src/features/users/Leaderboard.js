import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './usersSlice';
import './Leaderboard.css';

const Leaderboard = () => {
    const dispatch = useDispatch();
    const { list, status, error } = useSelector((state) => state.users);
    const [search, setSearch] = useState('');
    
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (status === 'loading') return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    // Sort users by points (descending order)
    const sortedUsers = [...list]
        .sort((a, b) => b.points - a.points)
        .filter(user => user.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="leaderboard">
            <h2>Leaderboard</h2>
            <input 
                type="text" 
                placeholder="Search by name..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedUsers.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
