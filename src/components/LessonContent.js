import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { PiPlayCircleLight } from "react-icons/pi";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { IoCodeSlashOutline } from "react-icons/io5";
import { HiOutlineDocumentDuplicate, HiOutlineChartBar } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";

import LessonItem from "./LessonItem";
import "./LessonContent.css";

function LessonContent() {
  // State to track selected chapter and part
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [selectedPart, setSelectedPart] = useState(null);

  // Mock data for chapters and parts
  const chapters = [
    {
      id: 1,
      title: "Chapter 1",
      hasClock: true,
      times: "05:00:00",
      parts: [
        {
          id: 1,
          parts: "PART 1",
          title: "Lorem Ipsum Dolor Sit Amet",
          time: "02:00:00",
          difficulty: "Medium",
          participants: 5,
          progress: 45,
          lessons: [
            { type: "Video", title: "Video 1", time: "10:00" },
            { type: "Article", title: "Article 1", time: "10:00" },
            { type: "Quiz", title: "Quiz 1", time: "10:00" },
            {
              type: "Coding Exercise",
              title: "Coding Exercise 1",
              time: "10:00",
            },
            {
              type: "Combined Resource",
              title: "Combined Resource 1",
              time: "10:00",
            },
          ],
        },
        {
          id: 2,
          parts: "PART 2",
          title: "Lorem Ipsum Dolor Sit Amet",
          time: "02:00:00",
          difficulty: "Medium",
          participants: 12,
          progress: 20,
          lessons: [
            { type: "Video", title: "Video 2", time: "10:00" },
            { type: "Article", title: "Article 2", time: "10:00" },
            { type: "Quiz", title: "Quiz 2", time: "10:00" },
            {
              type: "Coding Exercise",
              title: "Coding Exercise 2",
              time: "10:00",
            },
            {
              type: "Combined Resource",
              title: "Combined Resource 2",
              time: "10:00",
            },
          ],
        },
        {
          id: 3,
          parts: "PART 3",
          title: "Lorem Ipsum Dolor Sit Amet",
          time: "02:00:00",
          difficulty: "Medium",
          participants: 12,
          progress: 0,
          lessons: [
            { type: "Video", title: "Video 3", time: "10:00" },
            { type: "Article", title: "Article 3", time: "10:00" },
            { type: "Quiz", title: "Quiz 3", time: "10:00" },
            {
              type: "Coding Exercise",
              title: "Coding Exercise 3",
              time: "10:00",
            },
            {
              type: "Combined Resource",
              title: "Combined Resource 3",
              time: "10:00",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Chapter 2",
      hasClock: false,
      parts: [],
    },
    {
      id: 3,
      title: "Chapter 3",
      hasClock: false,
      parts: [],
    },
    {
      id: 4,
      title: "Chapter 4",
      hasClock: false,
      parts: [],
    },
    {
      id: 5,
      title: "Chapter 5",
      hasClock: false,
      parts: [],
    },
  ];
  const lessonIcons = {
    Video: <PiPlayCircleLight />,
    Article: <HiOutlineQuestionMarkCircle />,
    Quiz: <HiOutlineQuestionMarkCircle />,
    "Coding Exercise": <IoCodeSlashOutline />,
    "Combined Resource": <HiOutlineDocumentDuplicate />,
  };
  return (
    <div className="lesson-content">
      <div className="chapter-nav">
        {chapters.map((chapter) => (
          <div
            key={chapter.id}
            className={`chapter-title ${
              selectedChapter === chapter.id ? "active" : ""
            }`}
            onClick={() => {
              setSelectedChapter(chapter.id);
              setSelectedPart(null);
            }}
          >
            <div className="chap">
              {chapter.title}
              <div className="clo">
                <div>
                  {chapter.hasClock && (
                    <AiOutlineClockCircle className="chapter-clock" />
                  )}
                </div>
                <div className="chapterclock">{chapter.times}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="parts-content">
        {chapters
          .find((chapter) => chapter.id === selectedChapter)
          ?.parts.map((part) => (
            <div
              key={part.id}
              className={`part-section ${
                selectedPart === part.id ? "active" : ""
              }`}
            >
              <div
                className="part-header"
                onClick={() =>
                  setSelectedPart(selectedPart === part.id ? null : part.id)
                }
              >
                <div className="heading">
                  <div className="heading-parts">{part.parts}</div>
                  <div className="heading-title">{part.title}</div>
                </div>
                <div className="part">
                  <div className="part-info">
                    <div className="icons">
                      <AiOutlineClockCircle className="icon" />
                      <span> {part.time}</span>
                    </div>
                    <div className="icons">
                      <div className="icon">
                        <HiOutlineChartBar />
                      </div>
                      <span> {part.difficulty}</span>
                    </div>
                    <div className="icons">
                      <div className="icon">
                        <HiOutlineDocumentDuplicate />
                      </div>
                      <span> {part.participants}</span>
                    </div>
                    {selectedPart === part.id ? (
                      <FaChevronDown />
                    ) : (
                      <FaChevronUp />
                    )}
                  </div>
                  <button className="completion-button">
                    {part.progress}% Completed
                  </button>
                </div>
              </div>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${part.progress}%` }}
                >
              </div>
              </div>
              {selectedPart === part.id && (
                <>
                  {part.lessons.map((lesson, index) => (
                    <LessonItem
                      key={index}
                      icon={lessonIcons[lesson.type]}
                      title={lesson.title}
                      time={lesson.time}
                    />
                  ))}
                </>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default LessonContent;
