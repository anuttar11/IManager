import React, { useState } from "react";

import progressbar from "./Progressbar.module.css";

import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;

  max-width: 600px;
`;

const StepContainer = styled.div`
  display: flex;

  justify-content: space-between;

  position: relative;

  :before {
    content: "";

    position: absolute;

    background: #f3e7f3;

    height: 4px;

    width: 100%;

    top: 50%;

    transform: translateY(-50%);

    left: 0;
  }

  :after {
    content: "";

    position: absolute;

    background: #74d1ea;

    height: 4px;

    width: ${({ width }) => width};

    top: 50%;

    transition: 0.4s ease;

    transform: translateY(-50%);

    left: 0;
  }
`;

const StepWrapper = styled.div`
  position: relative;

  z-index: 1;
`;

const StepStyle = styled.div`
  width: 40px;

  height: 40px;

  border-radius: 50%;

  background-color: #ffffff;

  border: 3px solid
    ${({ step }) => (step === "completed" ? "#74D1EA" : "#F3E7F3")};

  transition: 0.4s ease;

  display: flex;

  justify-content: center;

  align-items: center;
`;

const StepCount = styled.span`
  font-size: 19px;

  color: #f3e7f3;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const StepsLabelContainer = styled.div`
  position: absolute;

  top: 66px;

  left: 55px;

  width: 120px;

  transform: translate(-50%, -50%);
`;

const StepLabel = styled.span`
  font-size: 14px;

  font-weight: 900;

  color: #002c3f;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;

  justify-content: space-between;

  margin: 0 -15px;

  margin-top: 100px;
`;

const ButtonStyle = styled.button`
  border-radius: 4px;

  border: 0;

  background: #4a154b;

  color: #ffffff;

  cursor: pointer;

  padding: 8px;

  width: 90px;

  :active {
    transform: scale(0.98);
  }

  :disabled {
    background: #f3e7f3;

    color: #000000;

    cursor: not-allowed;
  }
`;

const CheckMark = styled.div`
  font-size: 26px;

  font-weight: 600;

  color: #74d1ea;

  -ms-transform: scaleX(-1) rotate(-46deg); /* IE 9 */

  -webkit-transform: scaleX(-1) rotate(-46deg); /* Chrome, Safari, Opera */

  transform: scaleX(-1) rotate(-46deg);
`;

const steps = [
  {
    label: "Edit Details",

    step: 1,
  },

  {
    label: "Upload Document",

    step: 2,
  },

  {
    label: "Pending",

    step: 3,
  },
];

export default function Progressbar() {
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const totalSteps = steps.length;

  const width = `${(100 / (totalSteps - 1)) * (activeStep - 1)}%`;

  return (
    <>
      <div className={progressbar.wrapper}>
        <MainContainer>
          <StepContainer width={width}>
            {steps.map(({ step, label }) => (
              <StepWrapper key={step}>
                <StepStyle
                  step={activeStep >= step ? "completed" : "incomplete"}
                >
                  {activeStep > step ? (
                    <CheckMark>L</CheckMark>
                  ) : (
                    <StepCount>{step}</StepCount>
                  )}
                </StepStyle>

                <StepsLabelContainer>
                  <StepLabel key={step}>{label}</StepLabel>
                </StepsLabelContainer>
              </StepWrapper>
            ))}
          </StepContainer>

          {/* <ButtonsContainer>
            <ButtonStyle onClick={prevStep} disabled={activeStep === 1}>
              Previous
            </ButtonStyle>

            <ButtonStyle
              onClick={nextStep}
              disabled={activeStep === totalSteps}
            >
              Next
            </ButtonStyle>
          </ButtonsContainer> */}
        </MainContainer>
      </div>
    </>
  );
}
