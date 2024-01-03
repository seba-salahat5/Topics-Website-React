import React from "react";
import styled, { keyframes } from 'styled-components';

const rippleAnimation = keyframes`
  0% {
    top: 96px;
    left: 96px;
    width: 0;
    height: 0;
    opacity: 1;
  }

  100% {
    top: 18px;
    left: 18px;
    width: 156px;
    height: 156px;
    opacity: 0;
  }
`;

const SpinnerContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding-inline: 50px;
  padding-block: 50px;
`;

const RippleOuter = styled.div`
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: var(--bg_body);
`;

const Ripple = styled.div`
width: 100%;
height: 100%;
position: relative;
transform: translateZ(0) scale(1);
backface-visibility: hidden;
transform-origin: 0 0;

& > * {
    position: absolute;
    border-width: 4px;
    border-style: solid;
    opacity: 1;
    border-radius: 50%;
    animation: ${rippleAnimation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    box-sizing: content-box;
  }
`;

const FirstChild = styled.div`
border-color: var(--brand-primary);
animation-delay: 0s;
`;

const SecondChild = styled.div`
border-color: var(--brand-secondary);
animation-delay: -0.5s;
`;
const LoadingSpinner = () => {
    return (
        <SpinnerContainer>
            <RippleOuter>
                <Ripple>
                    <FirstChild/>
                    <SecondChild/>
                </Ripple>
            </RippleOuter>
        </SpinnerContainer>
    );
};

export default LoadingSpinner;