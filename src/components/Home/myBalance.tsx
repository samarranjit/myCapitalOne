import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { myBalance } from "../../../data/myBalance";

const currency = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

export default function MyBalance() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Total Balance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold mt-2">
            {currency.format(myBalance.totalBalance)}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Monthly Income
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold mt-2">
            {currency.format(myBalance.monthlyIncome)}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Monthly Expenses
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold mt-2">
            {currency.format(myBalance.monthlyExpenses)}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
