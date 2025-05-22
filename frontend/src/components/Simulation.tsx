import React, { useState } from 'react';

const Simulation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<'research' | 'analysis' | 'ideation' | 'execution' | 'debrief'>('research');
  const [timeRemaining, setTimeRemaining] = useState(60); // 60 minutes
  const [budget, setBudget] = useState(100000); // $100,000
  const [npsScore, setNpsScore] = useState(50); // Starting NPS score

  // Placeholder functions for simulation steps
  const allocateBudget = (amount: number, purpose: string) => {
    if (amount <= budget) {
      setBudget(prev => prev - amount);
      // In a real app, this would trigger API calls and state updates
      return true;
    }
    return false;
  };

  // Render different UI based on the current step
  const renderStepContent = () => {
    switch (currentStep) {
      case 'research':
        return (
          <div className="research-step">
            <h2>Research Phase</h2>
            <p>Allocate your budget to different research methods:</p>
            <div className="research-options">
              <button onClick={() => {
                if (allocateBudget(20000, 'Focus Groups')) {
                  // Mock advancing to next step after research
                  setCurrentStep('analysis');
                  setTimeRemaining(prev => prev - 15);
                }
              }}>
                Focus Groups ($20,000)
              </button>
              <button onClick={() => {
                if (allocateBudget(15000, 'Surveys')) {
                  setCurrentStep('analysis');
                  setTimeRemaining(prev => prev - 10);
                }
              }}>
                Customer Surveys ($15,000)
              </button>
            </div>
          </div>
        );
      
      case 'analysis':
        return (
          <div className="analysis-step">
            <h2>Data Analysis Phase</h2>
            <p>Create customer personas based on your research:</p>
            <div className="persona-builder">
              {/* Simplified UI for persona building */}
              <div className="persona-template">
                <h3>Create Persona</h3>
                <input type="text" placeholder="Persona Name" />
                <textarea placeholder="Key Characteristics"></textarea>
                <textarea placeholder="Pain Points"></textarea>
                <button onClick={() => {
                  setCurrentStep('ideation');
                  setTimeRemaining(prev => prev - 15);
                }}>
                  Create Persona
                </button>
              </div>
            </div>
          </div>
        );
      
      case 'ideation':
        return (
          <div className="ideation-step">
            <h2>Ideation Phase</h2>
            <p>Generate solutions to improve the NPS score:</p>
            <div className="whiteboard">
              <textarea 
                placeholder="Type your ideas here..."
                rows={5}
                cols={50}
              ></textarea>
            </div>
            <button onClick={() => {
              setCurrentStep('execution');
              setTimeRemaining(prev => prev - 15);
            }}>
              Finalize Ideas
            </button>
          </div>
        );
      
      case 'execution':
        return (
          <div className="execution-step">
            <h2>Execution Phase</h2>
            <p>Implement and test your solutions:</p>
            <div className="implementation-options">
              <button onClick={() => {
                if (allocateBudget(30000, 'App Redesign')) {
                  setNpsScore(prev => prev + 15);
                }
              }}>
                Implement App Redesign ($30,000)
              </button>
              <button onClick={() => {
                if (allocateBudget(25000, 'Staff Training')) {
                  setNpsScore(prev => prev + 10);
                }
              }}>
                Staff Training Program ($25,000)
              </button>
              <button onClick={() => {
                setCurrentStep('debrief');
                setTimeRemaining(0);
              }}>
                Complete Simulation
              </button>
            </div>
          </div>
        );
      
      case 'debrief':
        return (
          <div className="debrief-step">
            <h2>Simulation Complete</h2>
            <div className="results">
              <h3>Final Results</h3>
              <p>Final NPS Score: {npsScore}</p>
              <p>Remaining Budget: ${budget}</p>
              <p>Time Used: 60 minutes</p>
              <div className="feedback">
                <h3>Feedback</h3>
                <p>
                  {npsScore >= 80 
                    ? "Excellent work! You've exceeded the target NPS score."
                    : npsScore >= 65
                    ? "Good job. You've improved the NPS score but didn't reach the target of 80."
                    : "There's room for improvement. Consider different strategies next time."}
                </p>
              </div>
            </div>
            <button onClick={() => window.location.href = '/dashboard'}>
              Return to Dashboard
            </button>
          </div>
        );
    }
  };

  return (
    <div className="simulation-container">
      <div className="simulation-header">
        <h1>Bank NPS Improvement Simulation</h1>
        <div className="simulation-stats">
          <div className="stat">Time Remaining: {timeRemaining} minutes</div>
          <div className="stat">Budget: ${budget}</div>
          <div className="stat">Current NPS Score: {npsScore}</div>
        </div>
      </div>
      <div className="simulation-content">
        {renderStepContent()}
      </div>
    </div>
  );
};

export default Simulation;