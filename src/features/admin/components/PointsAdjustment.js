import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const PointsAdjustment = () => {
    const [userId, setUserId] = useState('');
    const [points, setPoints] = useState('');
    const { list } = useSelector((state) => state.users);

    const handleAdjustPoints = () => {
        console.log(`Adjusted ${points} points for User ID: ${userId}`);
        setUserId('');
        setPoints('');
    };

    return (
        <div className="points-adjustment">
            <h3>Adjust User Points</h3>
            <select value={userId} onChange={(e) => setUserId(e.target.value)}>
                <option value="">Select User</option>
                {list.map((user) => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                ))}
            </select>
            <input 
                type="number" 
                placeholder="Enter points..." 
                value={points}
                onChange={(e) => setPoints(e.target.value)}
            />
            <button onClick={handleAdjustPoints}>Update Points</button>
        </div>
    );
};

export default PointsAdjustment;


// const dispatch = useDispatch();