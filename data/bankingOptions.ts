import type { LucideIcon } from "lucide-react";
import {
  CreditCard,
  BadgeDollarSign,
  FileSignature,
  PiggyBank,
  TrendingUp,
} from "lucide-react";

export type BankingOption = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
};

export const bankingOptions: BankingOption[] = [
  {
    id: "credit-card",
    title: "Credit Card",
    description: "Manage cards, statements, and rewards.",
    href: "/products/credit-card",
    icon: CreditCard,
    badge: "Popular",
  },
  {
    id: "debit-card",
    title: "Debit Card",
    description: "Transactions, limits, and usage controls.",
    href: "/products/debit-card",
    icon: BadgeDollarSign,
  },
  {
    id: "apply-loan",
    title: "Apply for Loan",
    description: "Home, auto, and personal loans.",
    href: "/loans/apply",
    icon: FileSignature,
    badge: "New",
  },
  {
    id: "savings",
    title: "Savings Account",
    description: "High-yield savings, no monthly fees.",
    href: "/accounts/savings",
    icon: PiggyBank,
  },
  {
    id: "investments",
    title: "Investments",
    description: "Brokerage, ETFs, and advisory.",
    href: "/invest/investments",
    icon: TrendingUp,
  },
];
