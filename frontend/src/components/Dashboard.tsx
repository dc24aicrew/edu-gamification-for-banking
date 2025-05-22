import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <header>
        <h1>Welcome to the Banking Gamification Platform</h1>
      </header>
      <main>
        <section className="dashboard-stats">
          <h2>Your Stats</h2>
          <div className="stats-cards">
            <div className="stat-card">
              <h3>Completed Simulations</h3>
              <p>0</p>
            </div>
            <div className="stat-card">
              <h3>Current Score</h3>
              <p>0</p>
            </div>
            <div className="stat-card">
              <h3>Ranking</h3>
              <p>-</p>
            </div>
          </div>
        </section>

        <section className="available-simulations">
          <h2>Available Simulations</h2>
          <div className="simulation-cards">
            <div className="simulation-card">
              <h3>Bank NPS Improvement</h3>
              <p>Improve your bank's Net Promoter Score through customer experience transformation</p>
              <Link to="/simulation">Start Simulation</Link>
            </div>
          </div>
        </section>
      </main>
      <nav>
        <Link to="/leaderboard">Leaderboard</Link>
      </nav>
    </div>
  );
};

export default Dashboard;