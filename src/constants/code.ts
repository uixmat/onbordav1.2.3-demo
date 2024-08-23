export const install = `# pnpm
pnpm add onborda
# yarn
yarn add onborda`;

export const layout = `import { Onborda, OnbordaProvider } from "onborda";`;

export const components = `<div id="foo-step1">Onboard Step</div>`;

export const tailwind = `const config: Config = {
  content: [
    './node_modules/onborda/dist/**/*.{js,ts,jsx,tsx}' // Add this
  ]
}`;

export const provider = `<OnbordaProvider>
  <Onborda
    steps={steps}
    showOnborda={true}
    shadowRgb="55,48,163"
    shadowOpacity="0.8"
    cardComponent={FooCard}
    cardTransition={{ duration: 2, type: "tween" }}
  >
    {children}
  </Onborda>
</OnbordaProvider>`;

export const stepsobject = `{
  tour: "firstyour",
  steps: [
    Step
  ],
  tour: "secondtour",
  steps: [
    Step
  ]
}`;

export const toursteps = `{
  tour: "firsttour",
  steps: [
    {
      icon: <>👋</>,
      title: "Tour 1, Step 1",
      content: <>First tour, first step</>,
      selector: "#tour1-step1",
      side: "top",
      showControls: true,
      pointerPadding: 10,
      pointerRadius: 10,
      nextRoute: "/foo",
      prevRoute: "/bar"
    }...`

export const hookUsage = `import { useOnborda } from "onborda"`;
export const hook = `const { startOnborda, closeOnborda } = useOnborda();

const onClickHandler = (tourName: string) => {
  startOnborda(tourName);
};

// or

return (
  <button onClick={() => closeOnborda()}>Close</button>
)`;

export const cardtypes = `import type { CardComponentProps } from "onborda";`;

export const cardbasic = `"use client";
import React from "react";
import type { CardComponentProps } from "onborda";
import { useOnborda } from "onborda";

export const TourCard: React.FC<CardComponentProps> = ({
  step,
  currentStep,
  totalSteps,
  nextStep,
  prevStep,
  arrow,
}) => {
  // Onborda hooks
  const { closeOnborda } = useOnborda();

  function handleClose() {
    closeOnborda();
    console.log("Closed onborda");
  }

  return (
    <>
      <p>{currentStep + 1} of {totalSteps}</p>
      <p>{step.icon} {step.title}</p>
      <button onClick={() => closeOnborda()}>Close</button>

      <p>{step.content}</p>

      {currentStep !== 0 && (
        <button onClick={() => prevStep()}>Previous</button>
      )}
      {currentStep + 1 !== totalSteps && (
        <button onClick={() => nextStep()}>Next</button>
      )}
      {currentStep + 1 === totalSteps && (
        <button onClick={handleClose}>🎉 Finish!</button>
      )}
      <span className="text-white">{arrow}</span>
    </>
  );
};
`;