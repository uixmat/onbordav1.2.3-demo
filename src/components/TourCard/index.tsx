"use client";
import React from "react";
import type { CardComponentProps } from "onborda";
import { useOnborda } from "onborda";

// Shadcn
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Icons
import { X } from "lucide-react";

// Confetti
import confetti from "canvas-confetti";

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

  function handleConfetti() {
    closeOnborda();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }

  return (
    <Card className="border-0 rounded w-max max-w-full z-[999]">
      <CardHeader>
        <div className="flex items-start justify-between w-full">
          <div>
            <CardTitle className="mb-2 text-lg">
              {step.icon} {step.title}
            </CardTitle>
            <CardDescription>
              {currentStep + 1} of {totalSteps}
            </CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={() => closeOnborda()}>
            <X size={16} />
          </Button>
        </div>
      </CardHeader>
      <CardContent>{step.content}</CardContent>
      <CardFooter>
        <div className="flex justify-between w-full gap-4">
          {currentStep !== 0 && (
            <Button onClick={() => prevStep()}>Previous</Button>
          )}
          {currentStep + 1 !== totalSteps && (
            <Button onClick={() => nextStep()} className="ml-auto">
              Next
            </Button>
          )}
          {currentStep + 1 === totalSteps && (
            <Button className="ml-auto" onClick={handleConfetti}>
              🎉 Finish!
            </Button>
          )}
        </div>
      </CardFooter>
      <span className="text-card">{arrow}</span>
    </Card>
  );
};
