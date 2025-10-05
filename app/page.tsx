"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { ArrowRight, Zap, Shield, Award, TrendingUp, Users, Globe2, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";
import { AnimatedText, TypewriterText } from "@/components/ui/animated-text";
import { GlowingButton } from "@/components/ui/glowing-button";
import { FloatingCard } from "@/components/ui/floating-card";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MorphingBackground, FloatingElements, LiquidButton, GlitchText, TextReveal } from "@/components/ui/spectacular-effects";

export default function Home() {
  const { t, language } = useLanguage();

  const clients = [
    { name: "BYD", logo: "/BYD.png" },
    { name: "Panasonic", logo: "/panasonic.png" },
    { name: "Dongfeng", logo: "/DFM.png" },
    { name: "Midea", logo: "/Midea.png" },
    { name: "Gree", logo: "/Gree.png" },
    { name: "Bosch", logo: "/Bosch.png" },
    { name: "Delphi", logo: "/Delphi.png" },
    { name: "FAW", logo: "/FAW.png" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* HQ Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/HQ front.png')",
            }}
          />
        </div>

        {/* Dark Overlay for better text contrast */}
        <div className="absolute inset-0 z-5 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-8 lg:py-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-medium mb-8 border border-white/30"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Award className="h-5 w-5" />
              </motion.div>
              <TypewriterText 
                key={`hero-badge-${language}`}
                text={t("World's First Micron-Level Medium-Speed EDM", "全球首创微米级中速线切割机床")}
                speed={30}
              />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-8xl font-bold text-white mb-8"
            >
              <AnimatedText 
                key={`hero-title1-${language}`}
                text={t("Precision at the", "精密制造")}
                delay={0.3}
                className="block"
              />
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-purple-300"
              >
                <TypewriterText 
                  key={`hero-title2-${language}`}
                  text={t("Speed of Innovation", "创新驱动")}
                  speed={100}
                  delay={1500}
                />
              </motion.span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
              className="text-lg lg:text-xl text-white/90 mb-12 max-w-2xl mx-auto"
            >
              <TypewriterText 
                key={`hero-subtext-${language}`}
                text={t(
                  "Telue combines the precision of slow-wire EDM with the efficiency of fast-wire technology, delivering world-class performance at a fraction of the cost.",
                  "特略将慢走丝的精度与快走丝的效率完美结合，以极具竞争力的价格提供世界级性能。"
                )}
                speed={20}
                delay={3000}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <GlowingButton href="/contact" glowColor="#8B5CF6">
                <span className="flex items-center gap-2">
                  {t("Request a Quote", "获取报价")}
                  <ArrowRight className="h-5 w-5" />
                </span>
              </GlowingButton>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:text-white px-8 py-4 text-lg font-semibold"
                >
                  <Link href="/products" className="flex items-center gap-2">
                    {t("Explore Products", "查看产品")}
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 6 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
            >
              {[
                { name: t("Aerospace", "航空航天"), count: "200+" },
                { name: t("Automotive", "汽车制造"), count: "500+" },
                { name: t("Electronics", "电子制造"), count: "300+" },
                { name: t("Medical", "医疗器械"), count: "150+" },
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 6.2 + index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotateY: 10,
                    transition: { duration: 0.2 } 
                  }}
                  className="group"
                >
                  <div className="text-center p-6 bg-white/10 backdrop-blur-md border border-white/20 hover:border-purple-300/50 rounded-xl">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 6.5 + index * 0.2, type: "spring" }}
                      className="text-4xl lg:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-purple-300 to-white bg-clip-text text-transparent"
                    >
                      {industry.count}
                    </motion.div>
                    <div className="text-sm text-white/80 font-medium">{industry.name}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

      </section>

      {/* Trusted Clients */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden">
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

          {/* Scrolling Logos Container */}
          <div className="relative w-full">
            {/* Fade overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling content */}
            <div className="overflow-hidden py-8">
              <motion.div
                className="flex gap-12 items-center whitespace-nowrap"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* First set of logos */}
                {clients.map((client, index) => (
                  <div
                    key={`first-${index}`}
                    className="inline-flex items-center justify-center min-w-[200px]"
                  >
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: 'transparent' }}
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {clients.map((client, index) => (
                  <div
                    key={`second-${index}`}
                    className="inline-flex items-center justify-center min-w-[200px]"
                  >
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: 'transparent' }}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-8 lg:py-12 mb-16 lg:mb-20 bg-gradient-to-br from-white via-purple-50/30 to-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block mb-6"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="h-12 w-12 text-purple-600" />
            </motion.div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-600 bg-clip-text text-transparent">
                {t("Why Choose Telue?", "为什么选择特略？")}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              <TypewriterText 
                key={`features-subtitle-${language}`}
                text={t(
                  "30+ years of EDM innovation delivering unmatched precision and value",
                  "30余年电火花加工技术创新，提供无可比拟的精度和价值"
                )}
                speed={30}
              />
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
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
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -20,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  className="group"
                >
                  <div className="p-8 bg-white/80 backdrop-blur-md border border-purple-200/50 hover:border-purple-400/70 shadow-xl hover:shadow-2xl rounded-xl">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300"
                      whileHover={{ 
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <Icon className="h-8 w-8 text-purple-600" />
                    </motion.div>
                    
                    <motion.h3 
                      className="text-xl font-semibold text-gray-900 mb-4"
                      whileHover={{ color: "#8B5CF6" }}
                      transition={{ duration: 0.2 }}
                    >
                      {feature.title}
                    </motion.h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Highlight */}
      <section className="relative pt-48 pb-32 lg:pt-64 lg:pb-40 overflow-visible mt-32">
        <MorphingBackground>
          <div className="container mx-auto px-4 lg:px-8 pb-20 lg:pb-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl lg:text-6xl font-bold mt-12 lg:mt-20 mb-8 leading-tight lg:leading-tight pb-4 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-600 bg-clip-text text-transparent">
                  {t(
                    "Bridging the Gap in EDM Technology",
                    "填补电火花加工技术空白"
                  )}
                </h2>
                
                <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                  {t(
                    "Telue's patented medium-speed wire-cutting technology combines the best of both worlds: the precision of slow-wire machines and the cost-effectiveness of fast-wire systems. Our machines achieve ±3 µm accuracy at cutting speeds of 300+ mm²/min.",
                    "特略专利的中速线切割技术融合了两者的优势：慢走丝机床的精度和快走丝系统的经济性。我们的机床在切割速度达到300+平方毫米/分钟时，仍能实现±3微米的精度。"
                  )}
                </p>
                
                <motion.div 
                  className="space-y-6 mb-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {[
                    t("High-frequency power supply with patented HF system", "高频电源配备专利HF系统"),
                    t("Closed-loop 1 µm optical scales for precision control", "闭环1微米光学尺实现精密控制"),
                    t("Large-taper oscillating wire frames (up to ±45°)", "大锥度摆动式线架（最高±45°）"),
                    t("Environmentally-friendly semi-enclosed design", "环保型半封闭式设计")
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-white text-sm font-bold">✓</span>
                      </motion.div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <LiquidButton href="/innovation">
                    <span className="flex items-center gap-2">
                      {t("Learn More About Our Technology", "了解更多技术细节")}
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </LiquidButton>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="rounded-3xl overflow-hidden border border-purple-300/30 shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/HQ warehouse.png"
                    alt="Telue HQ Warehouse"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </MorphingBackground>
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

