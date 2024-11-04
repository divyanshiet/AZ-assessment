import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { CiStar } from "react-icons/ci";
import { HiOutlineChartBar, HiOutlineLightBulb } from "react-icons/hi";
import { IoClipboardOutline, IoBriefcaseOutline, IoInformationCircleOutline } from "react-icons/io5";
import { TiCalendarOutline } from "react-icons/ti";
import { HiOutlineUserGroup } from "react-icons/hi2";
import LessonContent from "../LessonContent";
import "./section1.css";

export default function Section1() {
  const [showMainContent, setShowMainContent] = useState(true);
  const [showLearning, setShowLearning] = useState(true);
  const [selectedSection, setSelectedSection] = useState(4); 

  const sections = [
    { id: 1, title: "Dashboard", symbol: <RxDashboard /> },
    { id: 2, title: "Learn", symbol: <HiOutlineLightBulb /> },
    { id: 3, title: "Forums", symbol: <HiOutlineUserGroup /> },
    { id: 4, title: "Upskill", symbol: <IoClipboardOutline /> },
    { id: 5, title: "Contest", symbol: <HiOutlineChartBar /> },
    { id: 6, title: "Leaderboard", symbol: <CiStar /> },
  ];

  return (
    <>
      <div className="section">
        <div className="section1">
          <ul>
            {sections.map((dash) => (
              <li key={dash.id}>
                <div
                  className={`con ${selectedSection === dash.id ? "active" : ""}`}
                  onClick={() => {
                    setSelectedSection(dash.id);
                    setShowMainContent(dash.id === 4);
                  }}
                >
                  <div className="icons">{dash.symbol}</div>
                  <div className="tit">{dash.title}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {showMainContent && (
          <div className="section2">
            <div className="sec1">
              <div className="tog-btn">
                <ul>
                  <li>
                    <div className={showLearning === false ? "con btn-active" : "con"}>
                      <div className="icons"><TiCalendarOutline /></div>
                      <div
                        className={showLearning === false ? "tit btn-active" : "tit"}
                        onClick={() => setShowLearning(false)}
                      >
                        Mentor sessions
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={showLearning === true ? "con btn-active" : "con"}>
                      <div className="icons"><IoBriefcaseOutline /></div>
                      <div
                        className={showLearning === true ? "tit btn-active" : "tit"}
                        onClick={() => setShowLearning(true)}
                      >
                        Learning material
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="how-btn">
                <ul>
                  <li>
                    <div className="btn">
                      <div className="icons"><IoInformationCircleOutline /></div>
                      <div className="tit">How it works</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {showLearning && (
              <div className="sec2">
                <LessonContent />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
