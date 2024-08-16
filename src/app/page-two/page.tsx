"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl m-auto py-48">
      <div className="space-y-16 flex flex-col w-full">
        <Button asChild variant="secondary">
          <Link href="/">Homepage</Link>
        </Button>
        <h2 className="font-bold text-2xl">Tour 1 continued...</h2>
        <div id="tour1-step4">
          <Card>
            <CardHeader>
              <CardTitle>Step 4</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Step 4 description</CardDescription>
            </CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>
        </div>
      </div>

      <div className="space-y-16 flex flex-col w-full">
        <h2 className="font-bold text-2xl">Tour 2 continued...</h2>
        <div id="tour2-step4">
          <Card>
            <CardHeader>
              <CardTitle>Step 4</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Step 4 description</CardDescription>
            </CardContent>
            <CardFooter>Footer</CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
