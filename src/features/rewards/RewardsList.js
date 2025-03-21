import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRewards, addToCart } from './rewardsSlice';
import './RewardsList.css';

const RewardsList = () => {
    const dispatch = useDispatch();
    const { list, status, error } = useSelector((state) => state.rewards);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        dispatch(fetchRewards());
    }, [dispatch]);

    if (status === 'loading') return <p>Loading rewards...</p>;
    if (error) return <p>Error: {error}</p>;

    // Filter rewards based on user input
    const filteredRewards = list.filter(reward =>
        reward.title.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="rewards-marketplace">
            <h2>Rewards Marketplace</h2>
            <input 
                type="text" 
                placeholder="Search rewards..." 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <div className="rewards-grid">
                {filteredRewards.map((reward) => (
                    <div key={reward.id} className="reward-card">
                        <img src={reward.image} alt={reward.title} />
                        <h3>{reward.title}</h3>
                        <p>{reward.description.slice(0, 50)}...</p>
                        <p><strong>{reward.points} Points</strong></p>
                        <button onClick={() => dispatch(addToCart(reward))}>Redeem</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RewardsList;
