"use client";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
export default function NewPage() {
  const [expand, setExpand] = useState(true);
  return (
    <div className="flex items-center justify-center min-h-[80vh] w-full ]">
      <div
        aria-expanded={expand}
        className={`border border-border rounded-lg p-6 w-full text-center overflow-hidden transition-[height] duration-500 ease-in-out ${
          expand ? "h-[90vh]" : "h-full"
        }`}
      >
        <h1 className="text-3xl font-bold tracking-tight">Explore Services</h1>
        <p className="text-muted-foreground mt-2">Get what you want.</p>
        <Input
          placeholder="What are you looking for?"
          className="mt-4 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4">
          <Card className="h-full transition-colors hover:bg-accent">
            <CardHeader className="p-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 shrink-0 rounded-md bg-primary/90 text-primary-foreground flex items-center justify-center ring-1 ring-border">
                  {/* <Icon className="h-5 w-5" /> */}
                </div>
                <div className="min-w-0">
                  <CardTitle className="text-base">
                    TTitle
                    {/* {opt.badge ? (
                    <span className="ml-2 rounded-full bg-secondary/20 px-2 py-0.5 text-[10px] font-medium text-secondary-foreground align-middle">
                      {opt.badge}
                    </span>
                  ) : null} */}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {/* {opt.description} */}
                    Description
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-xs text-muted-foreground">Learn more →</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
