"use client";
import React from "react";
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl m-auto py-48">
      <div className="space-y-16 flex flex-col w-full">
        <h2 className="font-bold text-2xl">Tour 1</h2>
        <Button size="lg" onClick={() => handleStartOnborda("tour1")}>
          Start Tour 1
        </Button>

        <div id="tour1-step1">
          <Card>
            <CardHeader>
              <CardTitle>Step 1</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Step 1 description</CardDescription>
            </CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>
        </div>

        <div id="tour1-step2">
          <Card>
            <CardHeader>
              <CardTitle>Step 2</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Step 2 description</CardDescription>
            </CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>
        </div>

        <div id="tour1-step3">
          <Card>
            <CardHeader>
              <CardTitle>Step 3</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Step 3 description</CardDescription>
            </CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>
        </div>
      </div>

      <div className="space-y-16 flex flex-col w-full">
        <h2 className="font-bold text-2xl">Tour 2</h2>
        <Button size="lg" onClick={() => handleStartOnborda("tour2")}>
          Start Tour 2
        </Button>
        <div id="tour2-step1">
          <Card>
            <CardHeader>
              <CardTitle>Step 1</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Step 1 description</CardDescription>
            </CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>
        </div>

        <div id="tour2-step2">
          <Card>
            <CardHeader>
              <CardTitle>Step 2</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Step 2 description</CardDescription>
            </CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>
        </div>

        <div id="tour2-step3">
          <Card>
            <CardHeader>
              <CardTitle>Step 3</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Step 3 description</CardDescription>
            </CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
