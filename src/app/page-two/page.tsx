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

import { X } from "@/components/svgs/x";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl m-auto py-48 px-6">
        <div className="space-y-16 flex flex-col w-full">
          <h2 className="font-bold text-2xl text-center">
            Tour 1 continued...
          </h2>
          <div id="tour1-step4">
            <Card>
              <CardHeader>
                <CardTitle>Step 4</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Welcome to <code>/page-two</code> without leaving the tour!
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-16 flex flex-col w-full">
          <h2 className="font-bold text-2xl text-center">
            Tour 2 continued...
          </h2>
          <div id="tour2-step4">
            <Card>
              <CardHeader>
                <CardTitle>Step 4</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Welcome to <code>/page-two</code> without leaving the tour!
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="text-center w-full">
        <Button asChild size="lg">
          <a href="https://x.com/uixmat" target="_blank">
            <X className="text-white dark:text-black w-4 h-4 mr-2" /> Follow me
            for updates
          </a>
        </Button>
      </div>
    </>
  );
}
