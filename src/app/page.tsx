"use client";

import MainLayout from "@/components/Home/MainLayout";
import MyBalance from "@/components/Home/myBalance";
import ExploreBox from "@/components/Home/ExploreBox";
import {
  IncomeExpenseChart,
  TransactionsInformation,
} from "@/components/Home/transactionsInformation";
import AdBanner from "@/components/Home/AdBanner";

import { AdaptlyProvider } from "adaptly";
import adaptlyConfig from "../../adaptly.json";

export default function Home() {
  return (
    <>
      <MainLayout>
        <div className="space-y-8 animate-in fade-in duration-500">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-foreground via-secondary to-foreground/70 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-muted-foreground">
              Welcome to your finance management dashboard
            </p>
          </div>

          <MyBalance display={false} />
          <div className="w-auto">
            <AdaptlyProvider
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_GENERATIVE_AI_API_KEY!}
              provider="google"
              model="gemini-2.0-flash-exp"
              components={{
                AdBanner,
                MyBalance,
                ExploreBox,
                TransactionsInformation,
                IncomeExpenseChart,
              }}
              adaptlyConfig={adaptlyConfig}
              enableStorage={true}
              storageKey="quick-start-dashboard"
              className="h-full"
            />
          </div>
          {/* 
          <AdBanner
            display={false}
            title="Special Offer"
            description="Get 20% off your next purchase"
            img="/path-to-your-banner-image.jpg"
          />

          <ExploreBox category="" display={false} />

          <TransactionsInformation display={false} />

          <IncomeExpenseChart display={false} /> */}
        </div>
      </MainLayout>
      <div className="pt-4 border-t mb-0 align-bottom">
        <div className="text-xs text-muted-foreground px-3 mx-auto text-center ml-auto pl-auto">
          <p>© 2025 My Capital One. All Rights Reserved!</p>
        </div>
      </div>
    </>
  );
}
