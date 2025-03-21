import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRewards } from '../../rewards/rewardsSlice';

const RewardsManagement = () => {
    const dispatch = useDispatch();
    const { list, status, error } = useSelector((state) => state.rewards);

    useEffect(() => {
        dispatch(fetchRewards());
    }, [dispatch]);

    if (status === 'loading') return <p>Loading rewards...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="admin-rewards">
            <h3>Manage Rewards</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((reward) => (
                        <tr key={reward.id}>
                            <td>{reward.id}</td>
                            <td>{reward.title}</td>
                            <td>{reward.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RewardsManagement;
