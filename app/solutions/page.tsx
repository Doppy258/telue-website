"use client";

import { useLanguage } from "@/components/language-provider";
import Link from "next/link";
import { ArrowRight, Plane, Car, Heart as Medical, Box, Cog, Sparkles } from "lucide-react";

export default function SolutionsPage() {
  const { t } = useLanguage();

  const industries = [
    {
      id: "aerospace",
      icon: Plane,
      name: t("Aerospace", "航空航天"),
      description: t(
        "Precision components for aircraft and spacecraft with exceptional accuracy and reliability",
        "为飞机和航天器提供精密部件，具有卓越的精度和可靠性"
      ),
      applications: [
        t("Turbine blades", "涡轮叶片"),
        t("Structural components", "结构部件"),
        t("Engine parts", "发动机零件"),
        t("Landing gear components", "起落架部件"),
      ],
      benefits: [
        t("±3 µm precision", "±3微米精度"),
        t("Complex geometries", "复杂几何形状"),
        t("Superior surface finish", "优质表面处理"),
        t("Certified quality", "认证质量"),
      ],
    },
    {
      id: "automotive",
      icon: Car,
      name: t("Automotive", "汽车制造"),
      description: t(
        "High-volume production of automotive components with consistent quality and efficiency",
        "高产量汽车零部件生产，质量一致，效率高"
      ),
      applications: [
        t("Injection molds", "注塑模具"),
        t("Stamping dies", "冲压模具"),
        t("Engine components", "发动机部件"),
        t("Transmission parts", "变速箱零件"),
      ],
      benefits: [
        t("Fast production cycles", "快速生产周期"),
        t("Cost-effective", "经济高效"),
        t("High repeatability", "高重复性"),
        t("Minimal downtime", "最小停机时间"),
      ],
    },
    {
      id: "medical",
      icon: Medical,
      name: t("Medical Devices", "医疗器械"),
      description: t(
        "Ultra-precise components for medical instruments and implants meeting strict standards",
        "为医疗器械和植入物提供超精密部件，符合严格标准"
      ),
      applications: [
        t("Surgical instruments", "外科器械"),
        t("Dental tools", "牙科工具"),
        t("Implant components", "植入物部件"),
        t("Diagnostic equipment", "诊断设备"),
      ],
      benefits: [
        t("Biocompatible materials", "生物相容材料"),
        t("Sterile processing", "无菌处理"),
        t("Regulatory compliance", "符合法规"),
        t("Consistent quality", "一致的质量"),
      ],
    },
    {
      id: "mold",
      icon: Box,
      name: t("Mold Manufacturing", "模具制造"),
      description: t(
        "Precision molds for plastic injection, die casting, and metal stamping operations",
        "用于塑料注塑、压铸和金属冲压操作的精密模具"
      ),
      applications: [
        t("Injection molds", "注塑模具"),
        t("Die-casting molds", "压铸模具"),
        t("Progressive dies", "级进模"),
        t("Forming tools", "成型工具"),
      ],
      benefits: [
        t("Complex cavities", "复杂型腔"),
        t("Tight tolerances", "严格公差"),
        t("Long tool life", "长工具寿命"),
        t("Fast turnaround", "快速交付"),
      ],
    },
  ];

  const services = [
    {
      icon: Sparkles,
      title: t("Experience Center", "体验中心"),
      description: t(
        "Visit our machining center in Dongguan with 20+ machines. Test your actual parts before purchasing.",
        "参观我们位于东莞的加工中心，拥有20多台机床。购买前测试您的实际零件。"
      ),
    },
    {
      icon: Cog,
      title: t("Process Consulting", "工艺咨询"),
      description: t(
        "Our engineers provide expert guidance on material selection, programming, and process optimization.",
        "我们的工程师为材料选择、编程和工艺优化提供专家指导。"
      ),
    },
    {
      icon: Medical,
      title: t("Training & Support", "培训与支持"),
      description: t(
        "Comprehensive operator training and bundled operator services ensure immediate productivity.",
        "全面的操作员培训和配套的操作员服务确保立即提高生产力。"
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
              {t("Industry Solutions", "行业解决方案")}
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              {t(
                "Tailored precision machining solutions for demanding industries worldwide",
                "为全球要求苛刻的行业量身定制精密加工解决方案"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.id}
                  id={industry.id}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-12 items-center`}
                >
                  <div className="flex-1">
                    <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-purple-600" />
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                      {industry.name}
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {industry.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {t("Key Applications", "主要应用")}
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {industry.applications.map((app, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
                            <span className="text-gray-700">{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-500 transition-all"
                    >
                      {t("Discuss Your Project", "讨论您的项目")}
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>

                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl border border-purple-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">
                        {t("Solution Benefits", "解决方案优势")}
                      </h3>
                      <div className="space-y-4">
                        {industry.benefits.map((benefit, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-4 p-4 rounded-xl bg-white border border-purple-100"
                          >
                            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                              <ArrowRight className="h-5 w-5 text-purple-600" />
                            </div>
                            <span className="text-gray-900 font-medium">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("Complete Solution Services", "完整解决方案服务")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t(
                "Beyond machines—we provide comprehensive support to ensure your success",
                "超越机床——我们提供全面支持以确保您的成功"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl border border-purple-200 bg-white hover:shadow-xl transition-all group"
                >
                  <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("Proven Results", "经过验证的成果")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t(
                "Trusted by world-class manufacturers across industries",
                "受到各行业世界级制造商的信赖"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 rounded-2xl border border-purple-100">
              <div className="text-4xl font-bold text-gradient mb-2">200+</div>
              <div className="text-gray-600">
                {t("Aerospace Clients", "航空航天客户")}
              </div>
            </div>
            <div className="text-center p-8 rounded-2xl border border-purple-100">
              <div className="text-4xl font-bold text-gradient mb-2">500+</div>
              <div className="text-gray-600">
                {t("Automotive Clients", "汽车客户")}
              </div>
            </div>
            <div className="text-center p-8 rounded-2xl border border-purple-100">
              <div className="text-4xl font-bold text-gradient mb-2">300+</div>
              <div className="text-gray-600">
                {t("Electronics Clients", "电子客户")}
              </div>
            </div>
            <div className="text-center p-8 rounded-2xl border border-purple-100">
              <div className="text-4xl font-bold text-gradient mb-2">150+</div>
              <div className="text-gray-600">
                {t("Medical Clients", "医疗客户")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              {t("Ready to Get Started?", "准备开始了吗？")}
            </h2>
            <p className="text-xl text-purple-100 mb-10 leading-relaxed">
              {t(
                "Let's discuss how Telue can solve your precision machining challenges",
                "让我们讨论特略如何解决您的精密加工挑战"
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all"
              >
                {t("Contact Us", "联系我们")}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                {t("View Products", "查看产品")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




