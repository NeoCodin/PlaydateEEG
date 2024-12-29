import React, { useState } from "react";

const images = [
  { src: "path/to/image1.jpg", race: "White", gender: "Male" },
  { src: "path/to/image2.jpg", race: "Black", gender: "Female" },
  // Add more images here
];

function TaskScreen({ participantId, setDataset }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [choice, setChoice] = useState("");

  const handleChoice = (option) => {
    const currentImage = images[currentImageIndex];
    const feedback = Math.random() > 0.5 ? "Thumbs Up" : "Thumbs Down"; // Random feedback for now

    const response = {
      participantId,
      trial: currentImageIndex + 1,
      image: currentImage.src,
      race: currentImage.race,
      gender: currentImage.gender,
      choice: option,
      feedback,
      alignment: feedback === "Thumbs Up" && option === "Play"
        ? "Positive Concordance"
        : "Negative Discordance",
    };

    setDataset((prevDataset) => [...prevDataset, response]);

    setCurrentImageIndex((prevIndex) => prevIndex + 1);
    setChoice("");
  };

  if (currentImageIndex >= images.length) return <div>Task complete!</div>;

  return (
    <div>
      <img src={images[currentImageIndex].src} alt="person" />
      <button onClick={() => handleChoice("Play")}>Play</button>
      <button onClick={() => handleChoice("Don't Play")}>Don't Play</button>
    </div>
  );
}

export default TaskScreen;
