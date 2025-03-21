import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './features/users/UserList';
import ActivityFeed from './features/activities/ActivityFeed';
import Leaderboard from './features/users/Leaderboard';
import RewardsList from './features/rewards/RewardsList';
import Cart from './features/rewards/Cart';
import AdminDashboard from './features/admin/AdminDashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserList />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/activities" element={<ActivityFeed />} />
                <Route path="/rewards" element={<RewardsList />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
