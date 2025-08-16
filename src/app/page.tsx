"use client";
import React, { useState } from 'react';
import Hero from '@/components/Hero'
import About from '@/components/About'
import Personality from '@/components/Personality'
import Lifestyle from '@/components/Lifestyle'
import DatingIntentions from '@/components/DatingIntentions'
import WhatMakesUsClick from '@/components/WhatMakesUsClick'
import BucketListContainer from '@/components/BucketListContainer'

export default function Home() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const correctPassword = "2025"; // Change this to your desired password

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Sorry, that's not the correct password. Please try again.");
    }
  };

  if (!isAuthenticated) {
    return (
      <main style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: "#f5f5f5" }}>
        <div style={{ background: "#fff", padding: "3rem 2.5rem", borderRadius: "1.2rem", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", border: "1px solid rgba(255,255,255,0.8)", minWidth: 380, maxWidth: 450, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", backdropFilter: "blur(10px)" }}>
          <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "linear-gradient(135deg, #ff6b9d 0%, #ffa726 100%)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem", fontSize: "1.5rem" }}>👤</div>
          <h2 style={{ marginBottom: "1rem", color: "#2d3748", fontSize: "1.6rem", fontWeight: "700", letterSpacing: "-0.02em" }}>Welcome!</h2>
          <p style={{ maxWidth: 380, textAlign: "center", color: "#4a5568", fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "2rem" }}>
            Welcome to my personal corner of the internet! This is where I share my authentic self, my hopes, dreams, and what makes me tick. I&apos;ve added a gentle password here to keep this space special and private.<br /><br />
            <span style={{ fontSize: "1rem", color: "#718096", fontStyle: "italic" }}>Thank you for being so wonderful and respectful of my privacy!</span>
          </p>
          <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter password"
              style={{ 
                padding: "1rem 1.25rem", 
                fontSize: "1.1rem", 
                borderRadius: "0.75rem", 
                border: "2px solid #e2e8f0", 
                outline: "none", 
                width: "100%", 
                boxSizing: "border-box", 
                transition: "all 0.3s ease",
                background: "#f7fafc",
                fontFamily: "inherit"
              }}
              required
              onFocus={e => {
                e.target.style.border = "2px solid #667eea";
                e.target.style.boxShadow = "0 0 0 4px rgba(102, 126, 234, 0.1)";
                e.target.style.background = "#fff";
              }}
              onBlur={e => {
                e.target.style.border = "2px solid #e2e8f0";
                e.target.style.boxShadow = "none";
                e.target.style.background = "#f7fafc";
              }}
            />
            <button
              type="submit"
              style={{
                padding: "1rem 2.5rem",
                fontSize: "1.1rem",
                borderRadius: "0.75rem",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
                boxShadow: "0 4px 20px rgba(102, 126, 234, 0.3)",
                transition: "all 0.3s ease",
                textShadow: "0 1px 2px rgba(0,0,0,0.1)",
                fontFamily: "inherit",
                letterSpacing: "0.025em"
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 25px rgba(102, 126, 234, 0.4)";
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(102, 126, 234, 0.3)";
              }}
            >
              Access Profile
            </button>
          </form>
          {error && <p style={{ color: "#e53e3e", marginTop: "1.5rem", fontWeight: "500", textAlign: "center", fontSize: "1rem", padding: "0.75rem", background: "#fed7d7", borderRadius: "0.5rem", border: "1px solid #feb2b2" }}>
            Incorrect password. Please try again.
          </p>}
        </div>
      </main>
    );
  }

  return (
    <main>
      <Hero />
      <About />
      <Personality />
      <Lifestyle />
      <DatingIntentions />
      <WhatMakesUsClick />
      <BucketListContainer />
    </main>
  );
}
