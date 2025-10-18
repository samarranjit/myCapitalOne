"use client";

import { Home, CreditCard, TrendingUp, Settings, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Transactions", href: "/transactions", icon: CreditCard },
  { name: "Analytics", href: "/analytics", icon: TrendingUp },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-64 bg-card border-r
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div className="flex flex-col h-full p-4">
          <button
            onClick={onClose}
            className="lg:hidden self-end mb-4 p-2 hover:bg-accent rounded-md"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>

          <nav className="space-y-2 flex-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium
                    transition-colors
                    ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }
                  `}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t">
            <div className="text-xs text-muted-foreground px-3">
              <p>© 2025 MyFinance</p>
              <p className="mt-1">v1.0.0</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
