import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { myBalance } from "../../../data/myDetails";

const currency = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});
export default function MyBalance(displayProp?: { display: boolean }) {
  let display: boolean = displayProp?.display ?? true;
  return (
    <div
      className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${
        display ? "" : "hidden"
      }`}
    >
      <Card className="group border border-border/50 shadow-lg hover:shadow-2xl hover:shadow-tertiary/10 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <CardHeader className="pb-2 relative z-10">
          <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-tertiary transition-colors duration-300">
            Total Balance
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="text-2xl font-bold mt-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            {currency.format(myBalance.totalBalance)}
          </p>
        </CardContent>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-tertiary/60 via-tertiary/40 to-tertiary/60"></div>
      </Card>

      <Card className="group border border-border/50 shadow-lg hover:shadow-2xl hover:shadow-secondary/10 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <CardHeader className="pb-2 relative z-10">
          <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-secondary transition-colors duration-300">
            Monthly Income
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="text-2xl font-bold mt-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            {currency.format(myBalance.monthlyIncome)}
          </p>
        </CardContent>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary/60 via-secondary/40 to-secondary/60"></div>
      </Card>

      <Card className="group border border-border/50 shadow-lg hover:shadow-2xl hover:shadow-tertiary/10 hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <CardHeader className="pb-2 relative z-10">
          <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-tertiary transition-colors duration-300">
            Monthly Expenses
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="text-2xl font-bold mt-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            {currency.format(myBalance.monthlyExpenses)}
          </p>
        </CardContent>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-tertiary/60 via-tertiary/40 to-tertiary/60"></div>
      </Card>
    </div>
  );
}
