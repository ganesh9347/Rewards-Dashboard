import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchActivities } from './activitiesSlice';
import './ActivityFeed.css';

const ActivityFeed = () => {
    const dispatch = useDispatch();
    const { list, status, error } = useSelector((state) => state.activities);

    useEffect(() => {
        dispatch(fetchActivities());
    }, [dispatch]);

    if (status === 'loading') return <p>Loading activities...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="activity-feed">
            <h2>Recent Activities</h2>
            <ul>
                {list.map((activity) => (
                    <li key={activity.id} className="activity-item">
                        <strong>{activity.type}:</strong> {activity.title} <br />
                        <span className="points">+{activity.points} Points</span>
                        <span className="timestamp">{new Date(activity.timestamp).toLocaleString()}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActivityFeed;
