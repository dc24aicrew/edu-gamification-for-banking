import React from 'react';
import { Link } from 'react-router-dom';

// Mock data for leaderboard
const mockLeaderboardData = [
  { teamName: 'Team Alpha', npsScore: 78, budgetRemaining: 25000 },
  { teamName: 'Team Bravo', npsScore: 82, budgetRemaining: 15000 },
  { teamName: 'Team Charlie', npsScore: 75, budgetRemaining: 30000 },
  { teamName: 'Team Delta', npsScore: 80, budgetRemaining: 10000 },
  { teamName: 'Team Echo', npsScore: 65, budgetRemaining: 40000 },
];

const Leaderboard: React.FC = () => {
  return (
    <div className="leaderboard-container">
      <header>
        <h1>Simulation Leaderboard</h1>
      </header>
      <main>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Team</th>
              <th>NPS Score</th>
              <th>Budget Remaining</th>
            </tr>
          </thead>
          <tbody>
            {mockLeaderboardData
              .sort((a, b) => b.npsScore - a.npsScore)
              .map((team, index) => (
                <tr key={team.teamName}>
                  <td>{index + 1}</td>
                  <td>{team.teamName}</td>
                  <td>{team.npsScore}</td>
                  <td>${team.budgetRemaining}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>
      <nav>
        <Link to="/dashboard">Back to Dashboard</Link>
      </nav>
    </div>
  );
};

export default Leaderboard;