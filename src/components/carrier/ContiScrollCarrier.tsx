import React, { useState, useRef } from "react";

const ContinuousScrollCarrier = () => {
  const [isPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const containerStyle = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    width: "100%",
    position: "relative" as const,
    padding: "2rem 0",
  } as const;

  const scrollingTextStyle = {
    color: "#536471",
    fontSize: "clamp(1rem, 4vw, 2.5rem)", // Responsive font size
    fontFamily: '"Roboto Mono", "IBM Plex Mono", monospace',
    fontWeight: "600",
    letterSpacing: "0.03em",
    padding: "0.5rem 0",
  } as const;

  const content =
    " 🚀 Join Our Team ⬢ Innovation & Growth ◆ Work With Experts ⚡ Remote & Hybrid Options ⭑ Competitive Benefits ⬡ Career Development ⬣ Collaborative Culture ◇ Cutting-Edge Tech 🔥 Be Part of Something Big ";

  return (
    <div style={containerStyle} ref={scrollRef}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600&family=IBM+Plex+Mono:wght@400;600&display=swap');

          @keyframes scrollText {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
          }
          
          .scroll-content {
              display: inline-flex;
              white-space: nowrap;
          }

          .scroll-text {
              display: inline-block;
              padding-right: 3rem;
              animation: scrollText 50s linear infinite;
              animation-play-state: ${isPaused ? "paused" : "running"};
              text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
          }

          @media (max-width: 768px) {
              .scroll-text {
                  padding-right: 1.5rem;
              }
          }
        `}
      </style>
      <div className="scroll-content">
        <span className="scroll-text" style={scrollingTextStyle}>
          {content + " " + content}
        </span>
        <span className="scroll-text" style={scrollingTextStyle}>
          {content + " " + content}
        </span>
      </div>
    </div>
  );
};

export default ContinuousScrollCarrier;
