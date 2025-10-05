"use client";

import { useLanguage } from "@/components/language-provider";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function ProductsPage() {
  const { t } = useLanguage();

  const products = [
    {
      id: "tlw",
      name: "TLW Series",
      tagline: t("Standard Precision", "标准精密"),
      description: t(
        "Our flagship series offering excellent precision for general-purpose applications",
        "我们的旗舰系列，为通用应用提供卓越精度"
      ),
      specs: [
        { label: t("Worktable Size", "工作台尺寸"), value: "400×300 - 1200×800 mm" },
        { label: t("Max Workpiece", "最大工件重量"), value: "600 - 2000 kg" },
        { label: t("Cutting Speed", "切割速度"), value: "300+ mm²/min" },
        { label: t("Accuracy", "精度"), value: "±3 µm" },
        { label: t("Taper Range", "锥度范围"), value: "±6° - ±30°" },
      ],
      features: [
        t("High-frequency power supply", "高频电源"),
        t("Closed-loop optical scales", "闭环光学尺"),
        t("Large-taper oscillating frame", "大锥度摆动式线架"),
        t("Semi-enclosed design", "半封闭式设计"),
      ],
    },
    {
      id: "tlk",
      name: "TLK Series",
      tagline: t("High-Speed Performance", "高速性能"),
      description: t(
        "Enhanced cutting speed for high-volume production environments",
        "为大批量生产环境提供增强的切割速度"
      ),
      specs: [
        { label: t("Worktable Size", "工作台尺寸"), value: "500×400 - 1000×600 mm" },
        { label: t("Max Workpiece", "最大工件重量"), value: "800 - 1500 kg" },
        { label: t("Cutting Speed", "切割速度"), value: "400+ mm²/min" },
        { label: t("Accuracy", "精度"), value: "±3 µm" },
        { label: t("Taper Range", "锥度范围"), value: "±8° - ±25°" },
      ],
      features: [
        t("Enhanced power system", "增强型电源系统"),
        t("Rapid positioning", "快速定位"),
        t("Advanced cooling system", "先进冷却系统"),
        t("Optimized for production", "生产优化"),
      ],
    },
    {
      id: "tlm",
      name: "TLM Series",
      tagline: t("Maximum Capacity", "最大容量"),
      description: t(
        "Heavy-duty machines for large workpieces and complex operations",
        "用于大型工件和复杂操作的重型机床"
      ),
      specs: [
        { label: t("Worktable Size", "工作台尺寸"), value: "800×600 - 1200×800 mm" },
        { label: t("Max Workpiece", "最大工件重量"), value: "1000 - 2000 kg" },
        { label: t("Cutting Speed", "切割速度"), value: "350+ mm²/min" },
        { label: t("Accuracy", "精度"), value: "±3 µm" },
        { label: t("Taper Range", "锥度范围"), value: "±10° - ±45°" },
      ],
      features: [
        t("Bridge-style gantry structure", "桥式龙门结构"),
        t("Linear guideways", "线性导轨"),
        t("Ball-screw drives", "滚珠丝杠驱动"),
        t("Maximum stability", "最大稳定性"),
      ],
    },
  ];

  const technologies = [
    {
      title: t("High-Frequency Power Supply", "高频电源"),
      description: t(
        "U.S. patented high-frequency power system ensures stable cutting and multiple-cut capability",
        "美国专利高频电源系统确保稳定切割和多次切割能力"
      ),
    },
    {
      title: t("Closed-Loop Control", "闭环控制"),
      description: t(
        "1 µm glass scales provide micro-level accuracy and exceptional repeatability",
        "1微米玻璃尺提供微米级精度和卓越的重复性"
      ),
    },
    {
      title: t("Contactless Reversal", "无接触换向"),
      description: t(
        "Patented flexible reversal technology protects wire movement and improves precision",
        "专利柔性换向技术保护线材运动并提高精度"
      ),
    },
    {
      title: t("Five-Phase Drive", "五相驱动"),
      description: t(
        "Advanced step motor system provides smoother motion control and enhanced accuracy",
        "先进的步进电机系统提供更平滑的运动控制和增强的精度"
      ),
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-purple-700 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t("Our Products", "我们的产品")}
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              {t(
                "World-class medium-speed wire-cut EDM machines designed for precision, efficiency, and reliability",
                "世界级中速线切割机床，专为精度、效率和可靠性而设计"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {products.map((product, index) => (
              <div
                key={product.id}
                id={product.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                    {product.tagline}
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                    {product.name}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {t("Key Features", "主要特点")}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-500 transition-all"
                  >
                    {t("Request Quote", "获取报价")}
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>

                <div className="flex-1">
                  <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl border border-purple-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">
                      {t("Technical Specifications", "技术规格")}
                    </h3>
                    <div className="space-y-4">
                      {product.specs.map((spec, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center py-3 border-b border-purple-100 last:border-0"
                        >
                          <span className="text-gray-600 font-medium">
                            {spec.label}
                          </span>
                          <span className="text-gray-900 font-semibold">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Technologies */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("Patented Technologies", "专利技术")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t(
                "Innovative features that set Telue machines apart from the competition",
                "使特略机床与众不同的创新特性"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-purple-200 bg-white hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {tech.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              {t("Find the Perfect Machine", "找到完美的机床")}
            </h2>
            <p className="text-xl text-purple-100 mb-10 leading-relaxed">
              {t(
                "Not sure which series is right for you? Our experts can help you choose the best solution for your needs.",
                "不确定哪个系列适合您？我们的专家可以帮助您选择最适合您需求的解决方案。"
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all"
              >
                {t("Contact Sales", "联系销售")}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                {t("View Solutions", "查看解决方案")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




