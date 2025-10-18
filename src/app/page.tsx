"use client";

import MainLayout from "@/components/Home/MainLayout";
import MyBalance from "@/components/Home/myBalance";
import ExploreBox from "@/components/Home/ExploreBox";

export default function Home() {
  return (
    <>
      <MainLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Welcome to your finance management dashboard
            </p>
          </div>

          <MyBalance />

          <ExploreBox />

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b">
                <div>
                  <p className="font-medium">Grocery Shopping</p>
                  <p className="text-sm text-muted-foreground">Oct 15, 2025</p>
                </div>
                <span className="font-semibold text-red-600">-$125.50</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <div>
                  <p className="font-medium">Salary Deposit</p>
                  <p className="text-sm text-muted-foreground">Oct 1, 2025</p>
                </div>
                <span className="font-semibold text-green-600">+$5,000.00</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <div>
                  <p className="font-medium">Electric Bill</p>
                  <p className="text-sm text-muted-foreground">Oct 10, 2025</p>
                </div>
                <span className="font-semibold text-red-600">-$89.99</span>
              </div>
            </div>
          </div>
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
