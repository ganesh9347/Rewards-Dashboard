import React, { useState } from 'react';
import UsersManagement from './components/UsersManagement';
import RewardsManagement from './components/RewardsManagement';
import PointsAdjustment from './components/PointsAdjustment';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [tab, setTab] = useState('users');

    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <div className="tabs">
                <button onClick={() => setTab('users')} className={tab === 'users' ? 'active' : ''}>Users</button>
                <button onClick={() => setTab('rewards')} className={tab === 'rewards' ? 'active' : ''}>Rewards</button>
                <button onClick={() => setTab('points')} className={tab === 'points' ? 'active' : ''}>Points Adjustment</button>
            </div>
            <div className="content">
                {tab === 'users' && <UsersManagement />}
                {tab === 'rewards' && <RewardsManagement />}
                {tab === 'points' && <PointsAdjustment />}
            </div>
        </div>
    );
};

export default AdminDashboard;
