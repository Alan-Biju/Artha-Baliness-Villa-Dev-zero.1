"use client";
import "./styles/Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <video className="hero-video" autoPlay muted loop>
        <source
          src="https://d33m3g343o7hgb.cloudfront.net/ayatana-coorg/Video/home-banner.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <div className="hero-content-left">
          <h2>WATCH VIDEO</h2>
          <h1>Reconnect with nature</h1>
          <p>
            Immerse yourself in the supreme beauty of Ayatana, Coorg’s finest
            luxury resort
          </p>
        </div>
        <div className="hero-content-right">
          <button className="book-now">
            Book Now
            <svg width="100%" height="100%" viewBox="0 0 200 60">
              <path
                className="border-anim"
                d="M 20,5 H 180 Q 195,5 195,20 V 40 Q 195,55 180,55 H 20 Q 5,55 5,40 V 20 Q 5,5 20,5 Z"
              />
              <circle className="border-dot" cx="4" cy="33" r="4"></circle>
              <circle className="border-dot" cx="15" cy="5" r="4"></circle>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
