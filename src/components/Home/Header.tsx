"use client";

import { Menu, Bell, User } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 md:px-6">
        <button
          onClick={onMenuClick}
          className="lg:hidden mr-4 p-2 hover:bg-accent rounded-md"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="flex-1 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">MF</span>
            </div>
            <span className="text-lg font-semibold hidden sm:inline-block">MyFinance</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="p-2 hover:bg-accent rounded-md relative"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-600 rounded-full"></span>
            </button>
            
            <button
              className="p-2 hover:bg-accent rounded-md"
              aria-label="User menu"
            >
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
