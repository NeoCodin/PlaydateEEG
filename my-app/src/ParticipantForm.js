import React, { useState } from "react";

function ParticipantForm({ setParticipantId }) {
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setParticipantId(id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Participant ID:
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </label>
      <button type="submit">Start Task</button>
    </form>
  );
}

export default ParticipantForm;
