import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { CiStar } from "react-icons/ci";
import { HiOutlineChartBar, HiOutlineLightBulb } from "react-icons/hi";
import { IoClipboardOutline, IoBriefcaseOutline, IoInformationCircleOutline } from "react-icons/io5";
import { TiCalendarOutline } from "react-icons/ti";
import { HiOutlineUserGroup } from "react-icons/hi2";
import LessonContent from '../LessonContent'
import './section1.css';

export default function Section1() {
  const [showMainContent, setShowMainContent] = useState(true);
  const [showLearning, setShowLearning] = useState(true);

  return (
    <>
      <div className="section">
      <div className="section1">
        <ul>
          <li>
            <div className="con" onClick={() => setShowMainContent(false)}>
              <div className="icons">
                <RxDashboard />
              </div>
              <div className="tit">Dashboard</div>
            </div>
          </li>
          <li>
            <div className="con" onClick={() => setShowMainContent(false)}>
              <div className="icons">
                <HiOutlineLightBulb />
              </div>
              <div className="tit">Learn</div>
            </div>
          </li>
          <li>
            <div className="con" onClick={() => setShowMainContent(false)}>
              <div className="icons">
                <HiOutlineUserGroup />
              </div>
              <div className="tit">Forums</div>
            </div>
          </li>
          <li>
            <div className={`con ${showMainContent === true ? "active" : " "}`} onClick={() => setShowMainContent(true)}>
              <div className="icons">
                <IoClipboardOutline />
              </div>
              <div className={`tit ${showMainContent === true ? "active" : " "}`}>Upskill</div>
            </div>
          </li>
          <li>
            <div className="con" onClick={() => setShowMainContent(false)}>
              <div className="icons">
                <HiOutlineChartBar />
              </div>
              <div className="tit">Contest</div>
            </div>
          </li>
          <li>
            <div className="con" onClick={() => setShowMainContent(false)}>
              <div className="icons">
                <CiStar />
              </div>
              <div className="tit">Leaderboard</div>
            </div>
          </li>
        </ul>
      </div>

      {/* Conditionally render maincontent section */}
      
        {showMainContent && (
        <div className="section2">
          <div className="sec1">
          <div className="tog-btn">
           <ul>
           <li>
           <div className={showLearning === false ? " con btn-active" : "con"} >
              <div className="icons">
              <TiCalendarOutline />
              </div>
              <div className={showLearning === false ? " tit btn-active" : "tit"} onClick={()=>setShowLearning(false)}>Mentor sessions</div>
            </div>
          </li>
          <li>
            <div className={showLearning === true ? " con btn-active" : "con"} >
              <div className="icons">
              <IoBriefcaseOutline />
              </div>
              <div className={showLearning === true ? " tit btn-active" : "tit"} onClick={()=>setShowLearning(true)} >Learning material</div>
            </div>
          </li>
           </ul>
          </div>
          <div className="how-btn">
          <ul>
           <li>
           <div className="btn">
              <div className="icons">
              <IoInformationCircleOutline />
              </div>
              <div className="tit">How it works</div>
            </div>
          </li>
          </ul>
          </div>
          </div>
          { showLearning && (
               <div className="sec2">
                <LessonContent></LessonContent>
               </div>
          )
          }
          
        </div>
      )}
    </div>  
    </>
  );
}
