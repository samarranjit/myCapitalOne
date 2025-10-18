"use client";

import Link from "next/link";
import { bankingOptions } from "../../../data/bankingOptions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ExploreBox() {
  return (
    <section className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Explore Banking</h2>
        {/* <span className="text-xs text-muted-foreground">Powered by My Capital One</span> */}
      </div>
      <div className="searchBox">
        <input
          type="search"
          placeholder="What are you looking for?"
          className="mb-4 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {bankingOptions.map((opt) => {
          const Icon = opt.icon;
          return (
            <Link key={opt.id} href={opt.href} className="group">
              <Card className="h-full transition-colors hover:bg-accent">
                <CardHeader className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 shrink-0 rounded-md bg-primary/90 text-primary-foreground flex items-center justify-center ring-1 ring-border">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <CardTitle className="text-base">
                        {opt.title}
                        {opt.badge ? (
                          <span className="ml-2 rounded-full bg-secondary/20 px-2 py-0.5 text-[10px] font-medium text-secondary-foreground align-middle">
                            {opt.badge}
                          </span>
                        ) : null}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {opt.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="text-xs text-muted-foreground">
                    Learn more →
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
