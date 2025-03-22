import React, { useState } from 'react';
import {Link} from 'react-router-dom'
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
                <Link to="/rewards"><button>Rewards Market</button></Link>
                <Link to="/leaderboard"><button>Leader Board</button></Link>
                <Link to="/activities"><button>Activity Feed</button></Link>
                <Link to="userlist"><button>userlist</button></Link>
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
