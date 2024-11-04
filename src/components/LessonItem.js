// LessonItem.js
import React from 'react';
import { AiOutlineClockCircle } from "react-icons/ai";
import './LessonItem.css';

function LessonItem({ icon, title, time }) {
  return (
    <div className="lesson-item">
      <div className="lesson">
      <div className="lesson-icon">{icon}</div>
      <div className="lesson-title">{title}</div>
      </div>
      <div className="lesson-time"><AiOutlineClockCircle /> {time}</div>
    </div>
  );
}

export default LessonItem;
