import React, { useState, useEffect } from 'react';
import './VisitorDashboard.css';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUsers, FiGlobe, FiEye, FiClock, FiX, FiActivity } from 'react-icons/fi';

const mockDailyStats = [
    { name: 'Views', value: 1245 },
    { name: 'Unique', value: 892 },
    { name: 'Avg. Time', value: '2m 14s' },
    { name: 'Bounce Rate', value: '42%' },
];

const mockTopCountries = [
    { country: 'United States', percentage: 45, count: 401 },
    { country: 'India', percentage: 25, count: 223 },
    { country: 'Australia', percentage: 15, count: 134 },
    { country: 'United Kingdom', percentage: 10, count: 89 },
    { country: 'Canada', percentage: 5, count: 45 },
];

const mockRecentVisitors = [
    { ip: '192.168.1.***', location: 'New York, US', os: 'Windows / Chrome', time: 'Just now' },
    { ip: '10.0.0.***', location: 'Sydney, AU', os: 'macOS / Safari', time: '5 mins ago' },
    { ip: '172.16.0.***', location: 'London, UK', os: 'iOS / Safari', time: '12 mins ago' },
    { ip: '192.168.0.***', location: 'Mumbai, IN', os: 'Android / Chrome', time: '20 mins ago' },
    { ip: '10.1.1.***', location: 'Toronto, CA', os: 'Windows / Edge', time: '45 mins ago' },
];

const VisitorDashboard = ({ isOpen, onClose }) => {
    // Escape key to close
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="dashboard-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="dashboard-container"
                        initial={{ y: 50, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 20, opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        onClick={(e) => e.stopPropagation()} // Prevent click from closing overlay
                    >
                        {/* Header */}
                        <div className="dashboard-header">
                            <div className="dashboard-title">
                                <FiActivity className="header-icon" />
                                <h2>Visitor Analytics <span className="live-badge">Live</span></h2>
                            </div>
                            <button className="close-btn" onClick={onClose} aria-label="Close Dashboard">
                                <FiX />
                            </button>
                        </div>

                        <div className="dashboard-content">
                            {/* Top Stats Cards */}
                            <div className="stats-grid">
                                <div className="stat-card box-glow">
                                    <div className="stat-icon-wrapper"><FiEye /></div>
                                    <div className="stat-info">
                                        <p className="stat-label">Total Views (7d)</p>
                                        <h3 className="stat-value">{mockDailyStats[0].value}</h3>
                                    </div>
                                </div>
                                <div className="stat-card box-glow">
                                    <div className="stat-icon-wrapper"><FiUsers /></div>
                                    <div className="stat-info">
                                        <p className="stat-label">Unique Visitors (7d)</p>
                                        <h3 className="stat-value">{mockDailyStats[1].value}</h3>
                                    </div>
                                </div>
                                <div className="stat-card box-glow">
                                    <div className="stat-icon-wrapper"><FiClock /></div>
                                    <div className="stat-info">
                                        <p className="stat-label">Avg Session Time</p>
                                        <h3 className="stat-value">{mockDailyStats[2].value}</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="dashboard-panels">
                                {/* Left Panel - Countries */}
                                <div className="panel countries-panel box-glow">
                                    <h3><FiGlobe className="panel-icon" /> Top Locations</h3>
                                    <div className="countries-list">
                                        {mockTopCountries.map((item, index) => (
                                            <div key={index} className="country-item">
                                                <div className="country-info">
                                                    <span className="country-name">{item.country}</span>
                                                    <span className="country-count">{item.count}</span>
                                                </div>
                                                <div className="progress-bar-bg">
                                                    <motion.div 
                                                        className="progress-bar-fill"
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${item.percentage}%` }}
                                                        transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Panel - Recent Log */}
                                <div className="panel log-panel box-glow">
                                    <h3>Recent Visitors</h3>
                                    <div className="visitor-log-table-container">
                                        <table className="visitor-log-table">
                                            <thead>
                                                <tr>
                                                    <th>IP (Anonymized)</th>
                                                    <th>Location</th>
                                                    <th>System</th>
                                                    <th>Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {mockRecentVisitors.map((visitor, index) => (
                                                    <motion.tr 
                                                        key={index}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                                                    >
                                                        <td className="ip-cell">{visitor.ip}</td>
                                                        <td>{visitor.location}</td>
                                                        <td className="os-cell">{visitor.os}</td>
                                                        <td className="time-cell">{visitor.time}</td>
                                                    </motion.tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default VisitorDashboard;
