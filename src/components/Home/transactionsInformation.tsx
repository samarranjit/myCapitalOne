"use client";

import transactions from "../../../data/transactions.json";
import { TrendingDown, TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const currency = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

export type Tx = {
  id: string;
  description: string;
  date: string; // ISO date string
  amount: number;
  currency: string;
  type: "debit" | "credit";
  category?: string;
};

export type TransactionFilter = {
  startDate?: string; // ISO date string (e.g., "2025-10-01")
  endDate?: string; // ISO date string (e.g., "2025-10-31")
  categories?: string[]; // Array of category names to include
  type?: "debit" | "credit"; // Filter by transaction type
  limit?: number; // Maximum number of transactions to display
};

export type ChartFilter = {
  startDate?: string; // ISO date string (e.g., "2025-10-01")
  endDate?: string; // ISO date string (e.g., "2025-10-31")
  categories?: string[]; // Array of category names to include
  minAmount?: number; // Minimum absolute amount to include
  maxAmount?: number; // Maximum absolute amount to include
};

function coerceTransactions(input: any): Tx[] {
  if (Array.isArray(input)) return input as Tx[];
  if (input && Array.isArray((input as any).transactions))
    return (input as any).transactions as Tx[];
  return [] as Tx[];
}

function aggregateIncomeExpenses(
  data: Tx[]
): { date: string; income: number; expenses: number }[] {
  const map = new Map<string, { income: number; expenses: number }>();
  for (const t of data) {
    const key = t.date;
    const entry = map.get(key) ?? { income: 0, expenses: 0 };
    if (t.amount >= 0) entry.income += t.amount;
    else entry.expenses += Math.abs(t.amount);
    map.set(key, entry);
  }
  return Array.from(map.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([date, v]) => ({
      date,
      income: +v.income.toFixed(2),
      expenses: +v.expenses.toFixed(2),
    }));
}

const chartConfig: ChartConfig = {
  expenses: {
    label: "Expenses",
    color: "hsl(var(--chart-1))",
    icon: TrendingDown,
  },
  income: {
    label: "Income",
    color: "hsl(var(--chart-2))",
    icon: TrendingUp,
  },
};

function latestMonthRange(txs: Tx[]) {
  const pickLatest = () => {
    if (!txs.length) return new Date();
    return new Date(
      txs.reduce((max, t) => {
        const time = new Date(t.date).getTime();
        return time > max ? time : max;
      }, -Infinity)
    );
  };

  const latest = pickLatest();
  const y = latest.getFullYear();
  const m = latest.getMonth(); // 0-based
  const lastDay = new Date(y, m + 1, 0).getDate();
  const fmt = (year: number, monthIndex: number, day: number) =>
    `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(
      2,
      "0"
    )}`;

  return {
    start: fmt(y, m, 1),
    end: fmt(y, m, lastDay),
  };
}

export const TransactionsInformation = ({
  display = true,
  startDate,
  endDate,
  categories,
  type,
  limit = 5,
}: {
  display?: boolean;
  startDate?: string;
  endDate?: string;
  categories?: string[];
  type?: "debit" | "credit";
  limit?: number;
}) => {
  const all = coerceTransactions(transactions);

  // Compute defaults based on latest month present in data (fallback to current month if none)
  const { start: defaultStart, end: defaultEnd } = latestMonthRange(all);
  const effectiveStart = startDate ?? defaultStart;
  const effectiveEnd = endDate ?? defaultEnd;

  // Apply filters to transactions
  const filteredTransactions = all.filter((tx) => {
    // Filter by date range
    if (effectiveStart && tx.date < effectiveStart) return false;
    if (effectiveEnd && tx.date > effectiveEnd) return false;

    // Filter by categories
    if (categories && categories.length > 0) {
      if (!tx.category || !categories.includes(tx.category)) return false;
    }

    // Filter by transaction type
    if (type && tx.type !== type) return false;

    return true;
  });

  // Limit number of transactions
  const txs = filteredTransactions.slice(0, limit);

  return (
    <>
      <div
        className={`rounded-xl border border-border/50 bg-card/95 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
          display ? "" : "hidden"
        }`}
      >
        <h2 className="text-xl font-semibold mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
          Your Recent Transactions
        </h2>
        <div className="space-y-1">
          {txs.map((tx, idx) => {
            const dt = new Date(tx.date);
            const dateLabel = dt.toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            });
            const isCredit = tx.amount > 0;
            return (
              <div
                key={tx.id ?? idx}
                className={`group flex justify-between items-center py-3 px-3 -mx-3 rounded-lg hover:bg-accent/30 hover:border-l-2 hover:border-l-${
                  isCredit ? "secondary" : "tertiary"
                }/50 transition-all duration-200 ${
                  idx !== txs.length - 1 ? "border-b border-border/30" : ""
                }`}
              >
                <div>
                  <p className="font-medium group-hover:text-secondary transition-colors duration-200">
                    {tx.description}
                  </p>
                  <p className="text-sm text-muted-foreground">{dateLabel}</p>
                </div>
                <span
                  className={`font-semibold transition-all duration-200 group-hover:scale-105 ${
                    isCredit ? "text-green-500" : "text-red-400"
                  }`}
                >
                  {isCredit ? "+" : "-"}
                  {currency.format(Math.abs(tx.amount))}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export function IncomeExpenseChart({
  display,
  filter,
}: {
  display: boolean;
  filter?: ChartFilter;
}) {
  const all = coerceTransactions(transactions);

  // Apply filters to transactions
  const filteredTransactions = all.filter((tx) => {
    if (!filter) return true;

    // Filter by date range
    if (filter.startDate && tx.date < filter.startDate) return false;
    if (filter.endDate && tx.date > filter.endDate) return false;

    // Filter by categories
    if (filter.categories && filter.categories.length > 0) {
      if (!tx.category || !filter.categories.includes(tx.category))
        return false;
    }

    // Filter by amount range
    const absoluteAmount = Math.abs(tx.amount);
    if (filter.minAmount !== undefined && absoluteAmount < filter.minAmount)
      return false;
    if (filter.maxAmount !== undefined && absoluteAmount > filter.maxAmount)
      return false;

    return true;
  });

  const data = aggregateIncomeExpenses(filteredTransactions);

  // Calculate stats for footer
  const totalIncome = data.reduce((sum, d) => sum + d.income, 0);
  const totalExpenses = data.reduce((sum, d) => sum + d.expenses, 0);
  const netBalance = totalIncome - totalExpenses;
  const isPositive = netBalance >= 0;

  // Handle empty state
  if (data.length === 0) {
    return (
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Income vs Expenses</CardTitle>
          <CardDescription>No transaction data available</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-64 text-muted-foreground">
          <p>Add transactions to see your financial overview</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className={`mt-6 border border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/95 backdrop-blur-sm ${
        display ? "" : "hidden"
      }`}
    >
      <CardHeader>
        <CardTitle className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
          Income vs Expenses
        </CardTitle>
        <CardDescription>
          Daily overview from {new Date(data[0].date).toLocaleDateString()} to{" "}
          {new Date(data[data.length - 1].date).toLocaleDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <ChartContainer config={chartConfig} className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              accessibilityLayer
              data={data}
              margin={{ left: 12, right: 12, top: 12 }}
            >
              <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-income)"
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-income)"
                    stopOpacity={0.05}
                  />
                </linearGradient>
                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-expenses)"
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-expenses)"
                    stopOpacity={0.05}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                opacity={0.3}
              />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                  });
                }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) =>
                  `$${value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value}`
                }
              />
              <ChartTooltip
                cursor={{ strokeDasharray: "3 3" }}
                content={({ active, payload, label }) => {
                  if (!active || !payload?.length || !label) return null;
                  return (
                    <div className="rounded-lg border bg-background p-3 shadow-md">
                      <div className="mb-2 font-medium">
                        {new Date(label as string).toLocaleDateString(
                          undefined,
                          {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </div>
                      <div className="space-y-1">
                        {payload.map((entry: any, idx: number) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between gap-4"
                          >
                            <div className="flex items-center gap-2">
                              <span
                                className="inline-block h-2 w-2 rounded-full"
                                style={{ backgroundColor: entry.color }}
                              />
                              <span className="text-sm text-muted-foreground">
                                {entry.name}:
                              </span>
                            </div>
                            <span className="text-sm font-medium">
                              {currency.format(entry.value)}
                            </span>
                          </div>
                        ))}
                        <div className="mt-2 pt-2 border-t flex items-center justify-between gap-4">
                          <span className="text-sm font-medium">Net:</span>
                          <span
                            className={`text-sm font-bold ${
                              (payload[1]?.value ?? 0) -
                                (payload[0]?.value ?? 0) >=
                              0
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {currency.format(
                              (payload[1]?.value ?? 0) -
                                (payload[0]?.value ?? 0)
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                }}
              />
              <Area
                dataKey="expenses"
                type="monotone"
                fill="url(#colorExpenses)"
                stroke="var(--color-expenses)"
                strokeWidth={2}
                name="Expenses"
              />
              <Area
                dataKey="income"
                type="monotone"
                fill="url(#colorIncome)"
                stroke="var(--color-income)"
                strokeWidth={2}
                name="Income"
              />
              <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full flex-col gap-4 text-sm">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground">Total Income</span>
              <span className="text-lg font-bold text-green-600">
                {currency.format(totalIncome)}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground">Total Expenses</span>
              <span className="text-lg font-bold text-red-600">
                {currency.format(totalExpenses)}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground">Net Balance</span>
              <div className="flex items-center gap-2">
                <span
                  className={`text-lg font-bold ${
                    isPositive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {currency.format(Math.abs(netBalance))}
                </span>
                {isPositive ? (
                  <TrendingUp className="h-4 w-4 text-green-600" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600" />
                )}
              </div>
            </div>
          </div>
          <div className="text-xs text-muted-foreground">
            Showing {data.length} day{data.length !== 1 ? "s" : ""} of
            transaction data
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
