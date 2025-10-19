"use client";

import { Menu, Bell, User } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="max-w-7xl mx-auto flex h-16 items-center px-4 md:px-6">
        <button
          onClick={onMenuClick}
          className="lg:hidden mr-4 p-2 hover:bg-accent/80 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="flex-1 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-tertiary to-tertiary/80 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <span className="text-tertiary-foreground font-bold text-sm">
                MCO
              </span>
            </div>
            <span className="text-lg font-semibold hidden sm:inline-block bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              My Capital One
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="p-2.5 hover:bg-accent/80 rounded-lg relative transition-all duration-200 hover:scale-105 active:scale-95 group"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5 group-hover:text-secondary transition-colors" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-destructive rounded-full animate-pulse shadow-sm"></span>
            </button>

            <button
              className="p-2.5 hover:bg-accent/80 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 group"
              aria-label="User menu"
            >
              <User className="h-5 w-5 group-hover:text-secondary transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
