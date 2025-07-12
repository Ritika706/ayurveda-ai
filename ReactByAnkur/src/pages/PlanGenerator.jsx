import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "../styles/PlanGenerator.css";
import arrowImg from "/images/down-arrow.png";

export default function PlanGenerator() {
  const navigate = useNavigate();

  /* ──────────────── state ──────────────── */
  const [duration, setDuration] = useState(null); // 7 | 14 | 30 | null
  const [toggleOn, setToggleOn] = useState(false);
  const [text, setText] = useState("");

  const textareaRef = useRef(null);

  /* scroll to top on mount (mimics original) */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* dynamic textarea border */
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.border = text.trim()
        ? "1px solid orange"
        : "1px solid rgb(196 209 196)";
    }
  }, [text]);

  return (
    <div className="Wellness">
      {/* ───── Back Button ───── */}
      <div className="plan-arrow">
        <button className="plan-arrow-btn" onClick={() => navigate("/dashboard")}>
          <img className="plan-arrow-img" src={arrowImg} alt="Back" />
          Back to Dashboard
        </button>
      </div>

      {/* ───── Header ───── */}
      <header className="plan-header">
        <div className="left">
          <div className="header-bot-icon">
            {/* calendar svg unchanged */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-calendar h-6 w-6 text-white"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
            </svg>
          </div>
          <div className="left-data">
            <h1>Wellness Plan Generator</h1>
            <p>
              Create your personalized Ayurvedic routine with progress tracking
            </p>
          </div>
        </div>
        <div className="right">
          <p>🌱 Kapha</p>
        </div>
      </header>

      {/* ───── Main ───── */}
      <main>
        <p className="main-heading">Customize Your Plan</p>

        {/* Plan Duration buttons */}
        <div className="plan-duration">
          <p className="plan-duration-heading">Plan Duration</p>
          <div className="plan-duration-buttons">
            {[7, 14, 30].map((d) => (
              <button
                key={d}
                className={`day-${d}`}
                style={{
                  backgroundColor: duration === d ? "rgb(248, 121, 48)" : "",
                  color: duration === d ? "white" : "",
                }}
                onClick={() => setDuration(d)}
              >
                {d} Days
              </button>
            ))}
          </div>
        </div>

        {/* Reminders toggle */}
        <div className="Reminders">
          <div className="Reminders-content">
            <p className="Reminders-heading">Daily Reminders</p>
            <p className="Reminders-text">
              Get notified about your wellness routine
            </p>
          </div>
          <div
            className={`onoff${toggleOn ? " active" : ""}`}
            style={{
              backgroundColor: toggleOn
                ? "rgb(248, 121, 48)"
                : "hsl(214.3 31.8% 91.4%)",
            }}
            onClick={() => setToggleOn((v) => !v)}
          >
            <button
              style={{
                left: toggleOn ? "25px" : "2px",
                transition: "left 0.3s",
              }}
            />
          </div>
        </div>

        {/* Textarea */}
        <div className="description">
          <p className="description-heading">
            Additional Goals or Focus Areas (Optional)
          </p>
          <textarea
            ref={textareaRef}
            rows="4"
            name="PlanGenerator"
            id="PlanGenerator"
            placeholder="e.g., improve sleep quality, boost energy, manage weight, reduce stress..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <button
          className="get-solution-plan"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-calendar mr-2 h-5 w-5"
          >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
          </svg>
          Generate 7‑Day Plan
        </button>
      </main>
    </div>
  );
}
