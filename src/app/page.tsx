"use client";
import React from "react";

// Components
import { Hero } from "@/components/organisms/hero";
import { Stack } from "@/components/organisms/stack";
import { GetStarted } from "@/components/organisms/get-started";

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

// Onborda
import { useOnborda } from "onborda";

export default function Home() {
  const { startOnborda } = useOnborda();
  const handleStartOnborda = (tourName: string) => {
    startOnborda(tourName);
  };

  return (
    <>
      <Hero
        title="onborda"
        description="A modern product tour library for Next.js powered by Framer Motion"
      />
      <GetStarted />
      <Stack />
      <div
        id="tours"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl m-auto py-48 px-6"
      >
        <div className="space-y-16 flex flex-col w-full">
          <h2 className="font-bold text-2xl text-center">Tour 1</h2>
          <Button size="lg" onClick={() => handleStartOnborda("tour1")}>
            Start Tour 1
          </Button>

          <div id="tour1-step1">
            <Card>
              <CardHeader>
                <CardTitle>Step 1</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Welcome to the first step in tour 1. Onborda allows you to
                  create multiple beautiful product tours on your Next.js
                  application.
                </CardDescription>
              </CardContent>
              <CardFooter>...</CardFooter>
            </Card>
          </div>

          <div className="flex justify-center w-full">
            <div
              id="tour1-step2"
              className="aspect-square rounded-full border w-28 h-28 flex justify-center items-center bg-zinc-100 dark:bg-zinc-900"
            >
              <h5 className="font-extrabold text-2xl">2</h5>
            </div>
          </div>

          <div id="tour1-step3">
            <Card>
              <CardHeader>
                <CardTitle>Step 3</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Built with Framer Motion and Radix Portal. Onborda enables you
                  to create impressive transitions between tour steps.
                </CardDescription>
              </CardContent>
              <CardFooter>...</CardFooter>
            </Card>
          </div>
        </div>

        <div className="space-y-16 flex flex-col w-full">
          <h2 className="font-bold text-2xl text-center">Tour 2</h2>
          <Button size="lg" onClick={() => handleStartOnborda("tour2")}>
            Start Tour 2
          </Button>
          <div id="tour2-step1">
            <Card>
              <CardHeader>
                <CardTitle>Step 1</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Using javascripts <code>MutationObserver</code>, we&apos;re
                  able to animate between routes across your application while
                  never leaving the tour itself.
                </CardDescription>
              </CardContent>
              <CardFooter>...</CardFooter>
            </Card>
          </div>

          <div className="flex justify-center w-full">
            <div
              id="tour2-step2"
              className="aspect-square rounded-full border w-28 h-28 flex justify-center items-center bg-zinc-100 dark:bg-zinc-900"
            >
              <h5 className="font-extrabold text-2xl">2</h5>
            </div>
          </div>

          <div id="tour2-step3">
            <Card>
              <CardHeader>
                <CardTitle>Step 3</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Using Onborda&apos;s custom hooks and options gives you full
                  control of how you&apos;re tour looks.
                </CardDescription>
              </CardContent>
              <CardFooter>...</CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
