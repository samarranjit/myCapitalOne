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
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-64 bg-card/95 backdrop-blur-xl border-r shadow-lg
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div className="flex flex-col h-full p-4">
          <button
            onClick={onClose}
            className="lg:hidden self-end mb-4 p-2 hover:bg-accent/80 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>

          <nav className="space-y-1.5 flex-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium relative
                    transition-all duration-200 group
                    ${
                      isActive
                        ? "bg-secondary/20 text-secondary-foreground shadow-sm"
                        : "text-muted-foreground hover:bg-accent/80 hover:text-accent-foreground hover:translate-x-1"
                    }
                  `}
                >
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r bg-gradient-to-b from-tertiary to-tertiary/50 shadow-sm" />
                  )}
                  <Icon
                    className={`h-5 w-5 transition-all duration-200 ${
                      isActive ? "text-secondary" : "group-hover:scale-110"
                    }`}
                  />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
