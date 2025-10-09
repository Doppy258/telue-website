"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { ArrowRight, Zap, Shield, Award, TrendingUp, Users, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Zap,
      title: t("High Precision", "高精度"),
      description: t(
        "Micron-level accuracy (±3 µm) with closed-loop optical scales",
        "微米级精度 (±3 µm) 配备闭环光学尺"
      ),
    },
    {
      icon: TrendingUp,
      title: t("Cost-Effective", "经济高效"),
      description: t(
        "1/3 the price and 1/10 the operating cost of slow-wire machines",
        "价格仅为慢走丝机床的1/3，运营成本仅为1/10"
      ),
    },
    {
      icon: Shield,
      title: t("Proven Reliability", "久经考验"),
      description: t(
        "8-year zero-return record, trusted by Fortune 500 companies",
        "8年零退货记录，世界500强企业信赖之选"
      ),
    },
    {
      icon: Award,
      title: t("Patented Technology", "专利技术"),
      description: t(
        "Multiple patents including contactless flexible reversal system",
        "多项专利技术，包括无接触柔性换向系统"
      ),
    },
  ];

  const industries = [
    { name: t("Aerospace", "航空航天"), count: "200+" },
    { name: t("Automotive", "汽车制造"), count: "500+" },
    { name: t("Electronics", "电子制造"), count: "300+" },
    { name: t("Medical", "医疗器械"), count: "150+" },
  ];

  const clients = [
    "BYD", "Panasonic", "Dongfeng", "Midea", "Gree", "Bosch", "Delphi", "FAW"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{
              filter: "brightness(0.7) contrast(1.1) saturate(1.2)",
            }}
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-purple-900/30 to-black/50"></div>
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-purple-600/20"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(147, 51, 234, 0.2), transparent, rgba(147, 51, 234, 0.2))",
                "linear-gradient(135deg, transparent, rgba(147, 51, 234, 0.3), transparent)",
                "linear-gradient(225deg, rgba(147, 51, 234, 0.2), transparent, rgba(147, 51, 234, 0.2))",
                "linear-gradient(315deg, transparent, rgba(147, 51, 234, 0.3), transparent)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6"
            >
              <Award className="h-4 w-4" />
              {t("World's First Micron-Level Medium-Speed EDM", "全球首创微米级中速线切割机床")}
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-7xl font-bold text-white mb-6"
            >
              {t("Precision at the", "精密制造")}
              <br />
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white"
              >
                {t("Speed of Innovation", "创新驱动")}
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg lg:text-xl text-white/90 mb-10 max-w-2xl mx-auto"
            >
              {t(
                "Telue combines the precision of slow-wire EDM with the efficiency of fast-wire technology, delivering world-class performance at a fraction of the cost.",
                "特略将慢走丝的精度与快走丝的效率完美结合，以极具竞争力的价格提供世界级性能。"
              )}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-purple-500 transition-all hover:scale-105"
              >
                {t("Request a Quote", "获取报价")}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 hover:bg-white/30 transition-all"
              >
                {t("Explore Products", "查看产品")}
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto"
            >
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                    {industry.count}
                  </div>
                  <div className="text-sm text-white/80">{industry.name}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/70"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/70 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("Why Choose Telue?", "为什么选择特略？")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t(
                "30+ years of EDM innovation delivering unmatched precision and value",
                "30余年电火花加工技术创新，提供无可比拟的精度和价值"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl border border-purple-100 hover:border-purple-300 bg-white hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Highlight */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                {t(
                  "Bridging the Gap in EDM Technology",
                  "填补电火花加工技术空白"
                )}
              </h2>
              <p className="text-lg text-purple-100 mb-8 leading-relaxed">
                {t(
                  "Telue's patented medium-speed wire-cutting technology combines the best of both worlds: the precision of slow-wire machines and the cost-effectiveness of fast-wire systems. Our machines achieve ±3 µm accuracy at cutting speeds of 300+ mm²/min.",
                  "特略专利的中速线切割技术融合了两者的优势：慢走丝机床的精度和快走丝系统的经济性。我们的机床在切割速度达到300+平方毫米/分钟时，仍能实现±3微米的精度。"
                )}
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span className="text-purple-100">
                    {t(
                      "High-frequency power supply with patented HF system",
                      "高频电源配备专利HF系统"
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span className="text-purple-100">
                    {t(
                      "Closed-loop 1 µm optical scales for precision control",
                      "闭环1微米光学尺实现精密控制"
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span className="text-purple-100">
                    {t(
                      "Large-taper oscillating wire frames (up to ±45°)",
                      "大锥度摆动式线架（最高±45°）"
                    )}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm">✓</span>
                  </div>
                  <span className="text-purple-100">
                    {t(
                      "Environmentally-friendly semi-enclosed design",
                      "环保型半封闭式设计"
                    )}
                  </span>
                </li>
              </ul>
              <Link
                href="/innovation"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all"
              >
                {t("Learn More About Our Technology", "了解更多技术细节")}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl lg:text-8xl font-bold mb-4">±3µm</div>
                  <div className="text-xl text-purple-100">
                    {t("Precision Accuracy", "精密度")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Clients */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
              <Globe2 className="h-4 w-4" />
              {t("Global Trust", "全球信赖")}
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("Trusted by Industry Leaders", "行业领导者的信赖之选")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t(
                "Fortune 500 companies and world-class manufacturers rely on Telue for precision machining",
                "世界500强企业和全球顶级制造商依赖特略进行精密加工"
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-8 rounded-xl border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all"
              >
                <span className="text-2xl font-bold text-gray-400 hover:text-purple-600 transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-16 w-16 text-purple-600 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t("Experience Telue Before You Buy", "购买前先体验特略")}
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
              {t(
                "Visit our machining experience center in Dongguan with 20+ machines operating continuously. Test your actual parts before making a decision.",
                "参观我们位于东莞的加工体验中心，20多台机床持续运转。在做出决定前测试您的实际零件。"
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-purple-500 transition-all"
              >
                {t("Schedule a Visit", "预约参观")}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-purple-600 border-2 border-purple-600 hover:bg-purple-50 transition-all"
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

