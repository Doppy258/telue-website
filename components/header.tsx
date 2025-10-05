"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navigation = [
    { name: t("Home", "首页"), href: "/" },
    { name: t("About", "关于我们"), href: "/about" },
    { name: t("Products", "产品"), href: "/products" },
    { name: t("Solutions", "解决方案"), href: "/solutions" },
    { name: t("Innovation", "创新研发"), href: "/innovation" },
    { name: t("News", "新闻"), href: "/news" },
    { name: t("Contact", "联系我们"), href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-purple-100">
      <nav className="container mx-auto px-4 lg:px-8" aria-label="Global">
        <div className="flex h-20 items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Telue Logo" 
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              <Globe className="h-4 w-4" />
              {language === "en" ? "中文" : "EN"}
            </button>
            <Link
              href="/contact"
              className="rounded-full bg-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 transition-all"
            >
              {t("Get Quote", "获取报价")}
            </Link>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Telue Logo" 
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-purple-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 space-y-2">
                <button
                  onClick={toggleLanguage}
                  className="-mx-3 flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-purple-50"
                >
                  <Globe className="h-5 w-5" />
                  {language === "en" ? "中文" : "EN"}
                </button>
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-purple-600 hover:bg-purple-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("Get Quote", "获取报价")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

