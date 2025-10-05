"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    company: [
      { name: t("About Us", "关于我们"), href: "/about" },
      { name: t("Innovation", "创新研发"), href: "/innovation" },
      { name: t("News & Events", "新闻活动"), href: "/news" },
      { name: t("Careers", "招聘"), href: "/careers" },
    ],
    products: [
      { name: t("TLW Series", "TLW系列"), href: "/products#tlw" },
      { name: t("TLK Series", "TLK系列"), href: "/products#tlk" },
      { name: t("TLM Series", "TLM系列"), href: "/products#tlm" },
      { name: t("All Products", "全部产品"), href: "/products" },
    ],
    solutions: [
      { name: t("Aerospace", "航空航天"), href: "/solutions#aerospace" },
      { name: t("Automotive", "汽车制造"), href: "/solutions#automotive" },
      { name: t("Medical Devices", "医疗器械"), href: "/solutions#medical" },
      { name: t("Mold Manufacturing", "模具制造"), href: "/solutions#mold" },
    ],
  };

  return (
    <footer className="bg-gradient-to-b from-white to-purple-50 border-t border-purple-100">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <img 
                src="/logo.png" 
                alt="Telue Logo" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              {t(
                "Leading manufacturer of micron-level medium-speed wire-cutting EDM machines. Precision at the speed of innovation.",
                "领先的微米级中速线切割机床制造商。创新速度下的精密制造。"
              )}
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>
                  {t(
                    "203 Juyuan Road, Jiading District, Shanghai, China",
                    "中国上海市嘉定区聚源路203号"
                  )}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="h-5 w-5 text-purple-600 flex-shrink-0" />
                <span>+86 21 5958 8888</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Mail className="h-5 w-5 text-purple-600 flex-shrink-0" />
                <span>info@telue.com</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              {t("Company", "公司")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              {t("Products", "产品")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              {t("Solutions", "解决方案")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-purple-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} {t("Shanghai Telue Precision CNC Machine Tool Co., Ltd. All rights reserved.", "上海特略精密数控机床有限公司 版权所有")}
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
              >
                {t("Privacy Policy", "隐私政策")}
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
              >
                {t("Terms of Service", "服务条款")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

