/* eslint-disable tailwindcss/no-custom-classname */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledWrapper>
      {loading ? (
        <>
          <span className="loader" />
          <p className="loading-text">VisionTalk...</p>
        </>
      ) : (
        <div className="content">Welcome to VisionTalk!</div>
      )}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .loader {
    position: relative;
    width: 150px;
    display: flex;
    justify-content: space-between;
  }
  .loader::after,
  .loader::before {
    content: "";
    display: inline-block;
    width: 72px;
    height: 72px;
    background-color: #fff;
    background-image: radial-gradient(circle 20px, #0d161b 100%, transparent 0);
    background-repeat: no-repeat;
    border-radius: 50%;
    animation: eyeMove 10s infinite, blink 10s infinite;
  }
  .loading-text {
    margin-top: 20px;
    font-size: 24px;
    font-weight: bold;
    color: white;
  }
  .content {
    font-size: 24px;
    font-weight: bold;
    color: white;
  }
  @keyframes eyeMove {
    0%,
    10% {
      background-position: 0px 0px;
    }
    13%,
    40% {
      background-position: -20px 0px;
    }
    43%,
    70% {
      background-position: 20px 0px;
    }
    73%,
    90% {
      background-position: 0px 20px;
    }
    93%,
    100% {
      background-position: 0px 0px;
    }
  }
  @keyframes blink {
    0%,
    10%,
    12%,
    20%,
    22%,
    40%,
    42%,
    60%,
    62%,
    70%,
    72%,
    90%,
    92%,
    98%,
    100% {
      height: 72px;
    }
    11%,
    21%,
    41%,
    61%,
    71%,
    91%,
    99% {
      height: 24px;
    }
  }`;

export default Loader;