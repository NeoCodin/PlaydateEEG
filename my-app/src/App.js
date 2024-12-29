import React, { useState } from 'react';
import './App.css';

// Utility function to convert data to CSV
const convertToCSV = (data) => {
  const headers = Object.keys(data[0]).join(','); // Create CSV headers
  const rows = data.map((row) =>
    Object.values(row)
      .map((value) => `"${value}"`)
      .join(',')
  ); // Create rows
  return [headers, ...rows].join('\n'); // Combine headers and rows
};

// Function to trigger CSV download
const downloadCSV = (data, filename = 'dataset.csv') => {
  const csvContent = convertToCSV(data);
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function App() {
  const [data, setData] = useState([]);
  const [currentTask, setCurrentTask] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState('');

  // Sample images and participant info
  const tasks = [
    { id: '001', gender: 'Male', race: 'Asian', img: '/path/to/image1.jpg' },
    { id: '002', gender: 'Female', race: 'Caucasian', img: '/path/to/image2.jpg' },
  ];

  const handleChoice = (choice) => {
    // Simulate feedback
    const simulatedFeedback = Math.random() > 0.5 ? 'Thumbs Up' : 'Thumbs Down';
    setFeedback(simulatedFeedback);

    // Save the task result
    const currentData = {
      ...tasks[currentTask],
      choice,
      feedback: simulatedFeedback,
    };

    setData((prev) => [...prev, currentData]);
    setShowFeedback(true);
  };

  const handleNextTask = () => {
    setShowFeedback(false);
    if (currentTask + 1 < tasks.length) {
      setCurrentTask(currentTask + 1);
    } else {
      alert('All tasks are complete. You can download the data.');
    }
  };

  const handleExport = () => {
    if (data.length === 0) {
      alert('No data to export!');
      return;
    }
    downloadCSV(data);
  };

  return (
    <div className="container">
      <header>
        <h1>Playdate Task</h1>
      </header>

      {!showFeedback ? (
        <div className="task-container">
          <img src={tasks[currentTask].img} alt="Task" />
          <h2>Would you like to play with this person?</h2>
          <button onClick={() => handleChoice('Play')}>Play</button>
          <button onClick={() => handleChoice('Don’t Play')}>Don’t Play</button>
        </div>
      ) : (
        <div className="feedback-container">
          <h2>Feedback: {feedback}</h2>
          <button onClick={handleNextTask}>Next Task</button>
        </div>
      )}

      <footer>
        <button onClick={handleExport}>Download Data as CSV</button>
      </footer>
    </div>
  );
}
