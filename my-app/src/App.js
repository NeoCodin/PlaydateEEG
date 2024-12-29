import React, { useState } from "react";
import ParticipantForm from "./ParticipantForm";
import TaskScreen from "./TaskScreen";
import FeedbackScreen from "./FeedbackScreen";

function App() {
  const [participantId, setParticipantId] = useState("");
  const [dataset, setDataset] = useState([]);

  return (
    <div>
      {/* Participant setup */}
      <ParticipantForm setParticipantId={setParticipantId} />
      {/* Task flow */}
      <TaskScreen participantId={participantId} setDataset={setDataset} />
      <FeedbackScreen dataset={dataset} />
    </div>
  );
}

export default App;
