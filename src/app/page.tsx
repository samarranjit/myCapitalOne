import MainLayout from "@/components/Home/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome to your finance management dashboard
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-sm font-medium text-muted-foreground">
              Total Balance
            </h3>
            <p className="text-2xl font-bold mt-2">$12,345.67</p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-sm font-medium text-muted-foreground">
              Monthly Income
            </h3>
            <p className="text-2xl font-bold mt-2">$5,432.10</p>
          </div>

          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h3 className="text-sm font-medium text-muted-foreground">
              Monthly Expenses
            </h3>
            <p className="text-2xl font-bold mt-2">$3,210.45</p>
          </div>
        </div>

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
  );
}
