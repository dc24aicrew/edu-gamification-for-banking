import React, { useState } from 'react';

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'users' | 'sessions' | 'scenarios'>('users');

  // Mock data
  const mockUsers = [
    { id: 1, username: 'facilitator1', role: 'Facilitator' },
    { id: 2, username: 'participant1', role: 'Participant' },
    { id: 3, username: 'participant2', role: 'Participant' },
  ];

  const mockSessions = [
    { id: 'S001', name: 'Banking Workshop 1', date: '2023-08-15', participants: 25, status: 'Completed' },
    { id: 'S002', name: 'Banking Workshop 2', date: '2023-08-22', participants: 20, status: 'Scheduled' },
  ];

  const mockScenarios = [
    { id: 'SC001', name: 'Bank NPS Improvement', industry: 'Banking', difficulty: 'Medium' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'users':
        return (
          <div className="admin-users">
            <h2>User Management</h2>
            <button className="add-button">Add New User</button>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockUsers.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.role}</td>
                    <td>
                      <button className="edit-button">Edit</button>
                      <button className="delete-button">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'sessions':
        return (
          <div className="admin-sessions">
            <h2>Session Management</h2>
            <button className="add-button">Create New Session</button>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Participants</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockSessions.map(session => (
                  <tr key={session.id}>
                    <td>{session.id}</td>
                    <td>{session.name}</td>
                    <td>{session.date}</td>
                    <td>{session.participants}</td>
                    <td>{session.status}</td>
                    <td>
                      <button className="view-button">View</button>
                      <button className="edit-button">Edit</button>
                      <button className="delete-button">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'scenarios':
        return (
          <div className="admin-scenarios">
            <h2>Scenario Management</h2>
            <button className="add-button">Create New Scenario</button>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Industry</th>
                  <th>Difficulty</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockScenarios.map(scenario => (
                  <tr key={scenario.id}>
                    <td>{scenario.id}</td>
                    <td>{scenario.name}</td>
                    <td>{scenario.industry}</td>
                    <td>{scenario.difficulty}</td>
                    <td>
                      <button className="edit-button">Edit</button>
                      <button className="delete-button">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
    }
  };

  return (
    <div className="admin-panel">
      <header>
        <h1>Admin Panel</h1>
      </header>
      <nav className="admin-nav">
        <button 
          className={activeTab === 'users' ? 'active' : ''} 
          onClick={() => setActiveTab('users')}
        >
          Users
        </button>
        <button 
          className={activeTab === 'sessions' ? 'active' : ''} 
          onClick={() => setActiveTab('sessions')}
        >
          Sessions
        </button>
        <button 
          className={activeTab === 'scenarios' ? 'active' : ''} 
          onClick={() => setActiveTab('scenarios')}
        >
          Scenarios
        </button>
      </nav>
      <main className="admin-content">
        {renderTabContent()}
      </main>
    </div>
  );
};

export default AdminPanel;