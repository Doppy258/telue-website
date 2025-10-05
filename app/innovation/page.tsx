"use client";

import { useLanguage } from "@/components/language-provider";
import { Lightbulb, Award, TrendingUp, Shield } from "lucide-react";

export default function InnovationPage() {
  const { t } = useLanguage();

  const achievements = [
    {
      year: "1993",
      title: t("Multiple Patents", "多项专利"),
      description: t(
        "Patented environmentally-friendly semi-enclosed structures, large-taper oscillating wire frames, contactless flexible reversal, and five-phase step drives",
        "获得环保型半封闭结构、大锥度摆动式线架、无接触柔性换向和五相步进驱动专利"
      ),
    },
    {
      year: "1998",
      title: t("Micron-Level Machine", "微米级机床"),
      description: t(
        "Developed the world's first micron-level medium-speed wire-cutting machine in Canada",
        "在加拿大开发世界首台微米级中速线切割机床"
      ),
    },
    {
      year: "2006",
      title: t("Commercial Launch", "商业发布"),
      description: t(
        "Released first commercial medium-speed precision machine with high-frequency power, high-taper guides, and closed-loop controls",
        "发布首台商业中速精密机床，配备高频电源、高锥度导向和闭环控制"
      ),
    },
    {
      year: "2014",
      title: t("Three Industry Firsts", "三项行业第一"),
      description: t(
        "TLW12080H model: highest payload (10-20t), highest cutting speed (7,000 mm²/h), largest taper (±45°)",
        "TLW12080H型号：最高承载（10-20吨）、最高切割速度（7,000平方毫米/小时）、最大锥度（±45°）"
      ),
    },
  ];

  const technologies = [
    {
      icon: Lightbulb,
      title: t("High-Frequency Power Supply", "高频电源"),
      description: t(
        "U.S. patented HF system combined with Taiwan-made industrial computers ensures stable cutting performance and enables multiple-cut capability for superior surface finish.",
        "美国专利HF系统结合台湾制造的工业计算机，确保稳定的切割性能，实现多次切割能力，获得优质表面处理。"
      ),
    },
    {
      icon: Shield,
      title: t("Closed-Loop Optical Scales", "闭环光学尺"),
      description: t(
        "1 µm precision glass scales provide exceptional accuracy and repeatability. This closed-loop feedback system ensures micro-level positioning throughout the entire cutting process.",
        "1微米精密玻璃尺提供卓越的精度和重复性。该闭环反馈系统确保整个切割过程的微米级定位。"
      ),
    },
    {
      icon: TrendingUp,
      title: t("Contactless Flexible Reversal", "无接触柔性换向"),
      description: t(
        "Patented technology protects wire movement during direction changes, eliminating contact-based wear and improving both precision and wire life.",
        "专利技术在方向改变期间保护线材运动，消除接触式磨损，提高精度和线材寿命。"
      ),
    },
    {
      icon: Award,
      title: t("Large-Taper Oscillating Frame", "大锥度摆动式线架"),
      description: t(
        "Innovative wire frame design enables cutting with tapers up to ±45°, allowing complex geometries and angled cuts that traditional machines cannot achieve.",
        "创新的线架设计使切割锥度高达±45°，实现传统机床无法实现的复杂几何形状和角度切割。"
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
              {t("Innovation & Research", "创新研发")}
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              {t(
                "Over 40 years of pioneering research in electrical discharge machining technology",
                "超过40年的电火花加工技术开创性研究"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t("Bridging the Gap", "填补空白")}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t(
                "Telue was founded on a simple but powerful vision: to combine the precision of slow-wire EDM machines with the cost-effectiveness of fast-wire systems. This led to the creation of the world's first micron-level medium-speed wire-cutting technology.",
                "特略基于一个简单而强大的愿景而成立：将慢走丝机床的精度与快走丝系统的经济性相结合。这促成了世界首创微米级中速线切割技术的诞生。"
              )}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 rounded-2xl bg-purple-50">
                <div className="text-4xl font-bold text-gradient mb-2">±3µm</div>
                <div className="text-gray-600">
                  {t("Precision Accuracy", "精密度")}
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-purple-50">
                <div className="text-4xl font-bold text-gradient mb-2">300+</div>
                <div className="text-gray-600">
                  {t("mm²/min Speed", "平方毫米/分钟速度")}
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-purple-50">
                <div className="text-4xl font-bold text-gradient mb-2">±45°</div>
                <div className="text-gray-600">
                  {t("Max Taper Angle", "最大锥度角")}
                </div>
              </div>
            </div>
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
                "Revolutionary innovations that define Telue's competitive advantage",
                "定义特略竞争优势的革命性创新"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-2xl border border-purple-200 bg-white hover:shadow-xl transition-all group"
                >
                  <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {tech.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline of Achievements */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("R&D Milestones", "研发里程碑")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t(
                "Key achievements that shaped the future of EDM technology",
                "塑造电火花加工技术未来的关键成就"
              )}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex gap-8 items-start group"
                >
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-3xl font-bold text-gradient">
                      {achievement.year}
                    </span>
                  </div>
                  <div className="flex-shrink-0 relative">
                    <div className="w-4 h-4 rounded-full bg-purple-600 ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all"></div>
                    {index < achievements.length - 1 && (
                      <div className="absolute top-4 left-1/2 w-0.5 h-full bg-purple-200 -translate-x-1/2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-12">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Commitment */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              {t("Proven Reliability", "久经考验的可靠性")}
            </h2>
            <p className="text-xl text-purple-100 leading-relaxed mb-12">
              {t(
                "Our commitment to quality and innovation has earned us an exceptional track record in the industry.",
                "我们对质量和创新的承诺为我们在行业中赢得了卓越的记录。"
              )}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold mb-3">8</div>
                <div className="text-purple-100 text-lg">
                  {t("Years Zero-Return Record", "年零退货记录")}
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-3">30+</div>
                <div className="text-purple-100 text-lg">
                  {t("Patents & Innovations", "专利与创新")}
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-3">1000+</div>
                <div className="text-purple-100 text-lg">
                  {t("Global Installations", "全球安装")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t("Looking Forward", "展望未来")}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t(
                "Telue continues to invest heavily in research and development, with plans to expand our experience centers globally and develop next-generation EDM technologies. Our vision remains unchanged: to build a century-long brand through unwavering focus on precision wire-cutting solutions.",
                "特略继续大力投资研发，计划在全球扩展我们的体验中心并开发下一代电火花加工技术。我们的愿景保持不变：通过对精密线切割解决方案的专注建立百年品牌。"
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}




