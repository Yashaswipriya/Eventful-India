"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="flex justify-between items-center p-4 bg-background border-b shadow-sm">
      <Link href="/" className="text-3xl font-bold text-blue-600 ml-4">
        Artistly
      </Link>

      {/* Desktop Navigation */}
      <nav className="flex items-center space-x-10 hidden md:flex">
        <Link
          href="/artists"
          className={`text-xl transition ${
            isActive("/artists")
              ? "text-blue-700 underline underline-offset-4 font-semibold"
              : "text-blue-600 hover:text-blue-700"
          }`}
        >
          Artists
        </Link>
        <Link
          href="/onboard"
          className={`text-xl transition ${
            isActive("/onboard")
              ? "text-blue-700 underline underline-offset-4 font-semibold"
              : "text-blue-600 hover:text-blue-700"
          }`}
        >
          Onboard
        </Link>
        <Link
          href="/dashboard"
          className={`text-xl transition ${
            isActive("/dashboard")
              ? "text-blue-700 underline underline-offset-4 font-semibold"
              : "text-blue-600 hover:text-blue-700"
          }`}
        >
          Dashboard
        </Link>
        <ThemeToggle />
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center space-x-2">
        <ThemeToggle />
        <Sheet>
          <SheetTrigger>
            <Menu className="w-6 h-6 text-foreground" />
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 mt-8 text-lg">
              <Link
                href="/artists"
                className={`${
                  isActive("/artists")
                    ? "text-blue-700 underline underline-offset-4 font-medium"
                    : "text-blue-600 hover:text-blue-700"
                }`}
              >
                Artists
              </Link>
              <Link
                href="/onboard"
                className={`${
                  isActive("/onboard")
                    ? "text-blue-700 underline underline-offset-4 font-medium"
                    : "text-blue-600 hover:text-blue-700"
                }`}
              >
                Onboard
              </Link>
              <Link
                href="/dashboard"
                className={`${
                  isActive("/dashboard")
                    ? "text-blue-700 underline underline-offset-4 font-medium"
                    : "text-blue-600 hover:text-blue-700"
                }`}
              >
                Dashboard
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
