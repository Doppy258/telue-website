"use client";

import { useLanguage } from "@/components/language-provider";
import { Award, Target, Heart, Lightbulb } from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  const timeline = [
    {
      year: "1981-1990",
      title: t("Early Research", "早期研究"),
      description: t(
        "Zhao Jian joins China's EDM industry and develops the country's first quick-wire EDM machines",
        "赵建加入中国电火花加工行业，开发中国首台快走丝线切割机床"
      ),
    },
    {
      year: "1990-1993",
      title: t("Innovation & Patents", "创新与专利"),
      description: t(
        "Founded Shenzhen Foster Company and secured multiple patents including environmentally-friendly designs",
        "创立深圳福斯特公司，获得多项专利，包括环保型设计"
      ),
    },
    {
      year: "1998",
      title: t("Overseas R&D", "海外研发"),
      description: t(
        "Developed micron-level medium-speed wire-cutting machine in Canada",
        "在加拿大开发微米级中速线切割机床"
      ),
    },
    {
      year: "2005-2006",
      title: t("Return to China", "回归中国"),
      description: t(
        "Production began in Shanghai Jiading High-Tech Park; launched first medium-speed precision machine",
        "在上海嘉定高科技园区开始生产，推出首台中速精密机床"
      ),
    },
    {
      year: "2006-Present",
      title: t("Market Expansion", "市场扩张"),
      description: t(
        "8-year zero-return record; adopted by Fortune 500 companies worldwide",
        "8年零退货记录，全球500强企业采用"
      ),
    },
    {
      year: "2014",
      title: t("Continuous Innovation", "持续创新"),
      description: t(
        "Launched TLW12080H with three industry firsts at CCMT exhibition",
        "在CCMT展会推出TLW12080H，创造三项行业第一"
      ),
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: t("Innovation", "创新"),
      description: t(
        "Pioneering new technologies and solutions in EDM machining",
        "在电火花加工领域开创新技术和解决方案"
      ),
    },
    {
      icon: Target,
      title: t("Precision", "精密"),
      description: t(
        "Delivering micron-level accuracy in every machine we build",
        "我们制造的每台机床都能实现微米级精度"
      ),
    },
    {
      icon: Heart,
      title: t("Customer-Centric", "以客户为中心"),
      description: t(
        "Providing complete solutions and experience-oriented service",
        "提供完整解决方案和体验导向的服务"
      ),
    },
    {
      icon: Award,
      title: t("Excellence", "卓越"),
      description: t(
        "Building a century-long brand through quality and commitment",
        "通过质量和承诺打造百年品牌"
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
              {t("About Telue", "关于特略")}
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              {t(
                "Shanghai Telue Precision CNC Machine Tool Co., Ltd. is a high-tech enterprise specializing in medium-speed precision wire-cutting EDM machines. Founded by industry pioneer Zhao Jian, we bridge the gap between expensive slow-wire and less accurate fast-wire technologies.",
                "上海特略精密数控机床有限公司是一家专业从事中速精密线切割机床的高科技企业。由行业先驱赵建创立，我们填补了昂贵的慢走丝和精度较低的快走丝技术之间的空白。"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                {t("Founder's Message", "创始人寄语")}
              </h2>
              <p className="text-xl text-purple-600 font-semibold">
                {t("Zhao Jian, Founder & Chief Engineer", "赵建，创始人兼总工程师")}
              </p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
              <p>
                {t(
                  "Since graduating in 1981 and entering the EDM industry, I have dedicated my career to advancing precision machining technology. After developing China's first quick-wire EDM machines and studying slow-wire technology in Switzerland and Japan, I realized there was a significant gap in the market.",
                  "自1981年毕业进入电火花加工行业以来，我一直致力于推进精密加工技术。在开发中国首台快走丝线切割机床并在瑞士和日本研究慢走丝技术后，我意识到市场存在巨大空白。"
                )}
              </p>
              <p>
                {t(
                  "The vision for Telue was born from a simple question: Why can't we combine the low cost of quick-wire machines with the accuracy of slow-wire machines? This led to the development of our patented medium-speed wire-cutting technology.",
                  "特略的愿景源于一个简单的问题：为什么不能将快走丝机床的低成本与慢走丝机床的精度结合起来？这导致了我们专利中速线切割技术的开发。"
                )}
              </p>
              <p>
                {t(
                  "Telue is not just a machine vendor—we are a technology company selling complete precision wire-cutting solutions. Our commitment is to build a century-long brand by focusing solely on EDM technologies and delivering unparalleled customer service.",
                  "特略不仅仅是一个机床供应商——我们是一家销售完整精密线切割解决方案的技术公司。我们的承诺是通过专注于电火花加工技术和提供无与伦比的客户服务来打造百年品牌。"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("Our Journey", "我们的历程")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t(
                "Over 40 years of innovation and dedication to precision machining",
                "超过40年的创新和对精密加工的专注"
              )}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-8 items-start group"
                >
                  <div className="flex-shrink-0 w-32 text-right">
                    <span className="text-2xl font-bold text-gradient">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-shrink-0 relative">
                    <div className="w-4 h-4 rounded-full bg-purple-600 ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all"></div>
                    {index < timeline.length - 1 && (
                      <div className="absolute top-4 left-1/2 w-0.5 h-full bg-purple-200 -translate-x-1/2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-12">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("Our Core Values", "我们的核心价值观")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t(
                "The principles that guide everything we do",
                "指导我们所做一切的原则"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 rounded-2xl border border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all group"
                >
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              {t("Our Mission", "我们的使命")}
            </h2>
            <p className="text-xl text-purple-100 leading-relaxed mb-8">
              {t(
                "To bridge the gap between expensive, highly precise slow-wire EDM machines and cheaper but less accurate fast-wire machines by delivering cost-effective precision that serves industries worldwide.",
                "通过提供具有成本效益的精密加工，弥合昂贵、高精度的慢走丝机床与便宜但精度较低的快走丝机床之间的差距，服务全球各行业。"
              )}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div>
                <div className="text-4xl font-bold mb-2">1/3</div>
                <div className="text-purple-100">
                  {t("Price of slow-wire machines", "慢走丝机床价格")}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1/10</div>
                <div className="text-purple-100">
                  {t("Operating cost", "运营成本")}
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">±3µm</div>
                <div className="text-purple-100">
                  {t("Precision accuracy", "精密度")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




