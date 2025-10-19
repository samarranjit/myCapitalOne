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

type Category =
  | ""
  | "Accounts"
  | "Account"
  | "Cards"
  | "Loans"
  | "Payments"
  | "Wealth"
  | "Benefits"
  | "Support"
  | "Services"
  | "Business";

export default function ExploreBox({
  category,
  display,
}: {
  category?: Category;
  display?: boolean;
}) {
  return (
    <section
      className={`rounded-xl border border-border/50 bg-card/95 backdrop-blur-sm p-6 shadow-lg ${
        display ? "" : "hidden"
      }`}
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
          Explore Services
        </h2>
        {/* <span className="text-xs text-muted-foreground">Powered by My Capital One</span> */}
      </div>
      <div className="searchBox">
        {/* <input
          type="search"
          placeholder="What are you looking for?"
          className="mb-4 w-full rounded-lg border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        /> */}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {bankingOptions
          .filter((opt) => {
            if (!category) return true;
            const normalizedTitle = opt.category
              .toLowerCase()
              .replace(/\s+/g, "");
            const normalizedCategory = category
              .toLowerCase()
              .replace(/\s+/g, "");
            return normalizedTitle.includes(normalizedCategory);
          })
          .map((opt) => {
            const Icon = opt.icon;
            return (
              <Link key={opt.id} href={opt.href} className="group">
                <Card className="h-full border border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:bg-accent/50 hover:border-tertiary/60 hover:shadow-xl hover:shadow-tertiary/5 hover:scale-105 hover:-translate-y-0.5">
                  <CardHeader className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 shrink-0 rounded-lg bg-gradient-to-br from-tertiary via-tertiary/90 to-tertiary/70 text-tertiary-foreground flex items-center justify-center shadow-lg shadow-tertiary/20 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-tertiary/30 transition-all duration-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <CardTitle className="text-base group-hover:text-secondary transition-colors duration-300">
                          {opt.title}
                          {/* {opt.badge ? (
                            <span className="ml-2 rounded-full bg-secondary/20 px-2 py-0.5 text-[10px] font-medium text-secondary-foreground align-middle">
                              {opt.badge}
                            </span>
                          ) : null} */}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {opt.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="text-xs text-muted-foreground group-hover:text-secondary transition-colors duration-300 flex items-center gap-1">
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
