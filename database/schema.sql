-- Create enum types
CREATE TYPE user_role_enum AS ENUM ('admin', 'facilitator', 'participant');
CREATE TYPE simulation_status_enum AS ENUM ('pending', 'active', 'completed');

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  full_name VARCHAR(255),
  role user_role_enum DEFAULT 'participant',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create simulations table
CREATE TABLE IF NOT EXISTS simulations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  scenario_id VARCHAR(255) NOT NULL,
  duration INTEGER DEFAULT 60,
  budget INTEGER DEFAULT 100000,
  initial_nps_score INTEGER DEFAULT 50,
  target_nps_score INTEGER DEFAULT 80,
  status simulation_status_enum DEFAULT 'pending',
  facilitator_id INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (facilitator_id) REFERENCES users(id)
);

-- Create simulation_participants table (for many-to-many relationship)
CREATE TABLE IF NOT EXISTS simulation_participants (
  simulation_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  team_name VARCHAR(255),
  role VARCHAR(255),
  joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (simulation_id, user_id),
  FOREIGN KEY (simulation_id) REFERENCES simulations(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create teams table
CREATE TABLE IF NOT EXISTS teams (
  id SERIAL PRIMARY KEY,
  simulation_id INTEGER NOT NULL,
  name VARCHAR(255) NOT NULL,
  final_nps_score INTEGER,
  budget_spent INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (simulation_id) REFERENCES simulations(id) ON DELETE CASCADE
);

-- Create team_members table
CREATE TABLE IF NOT EXISTS team_members (
  team_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  role VARCHAR(255),
  joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (team_id, user_id),
  FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create team_actions table to track what teams do during simulation
CREATE TABLE IF NOT EXISTS team_actions (
  id SERIAL PRIMARY KEY,
  team_id INTEGER NOT NULL,
  action_type VARCHAR(255) NOT NULL,
  action_description TEXT,
  budget_allocated INTEGER,
  time_spent INTEGER,
  nps_impact INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE
);

-- Create initial admin user (password: admin123)
INSERT INTO users (username, password, email, full_name, role)
VALUES ('admin', '$2b$10$9V3g1KMj62D7ypMabi.UmOeOW0WbJ6P7BIyor9JjsE/pQbXD1YUly', 'admin@example.com', 'Admin User', 'admin')
ON CONFLICT DO NOTHING;