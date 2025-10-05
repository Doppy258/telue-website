"use client";

import { useLanguage } from "@/components/language-provider";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default function NewsPage() {
  const { t } = useLanguage();

  const news = [
    {
      id: 1,
      date: "2024-09",
      title: t(
        "Telue Expands Global Presence with New European Office",
        "特略扩大全球影响力，在欧洲开设新办事处"
      ),
      excerpt: t(
        "To better serve our growing European customer base, Telue has opened a new sales and service office in Germany.",
        "为更好地服务不断增长的欧洲客户群，特略在德国开设了新的销售和服务办事处。"
      ),
      category: t("Company News", "公司新闻"),
    },
    {
      id: 2,
      date: "2024-08",
      title: t(
        "New TLW Series Achieves Record Performance",
        "新TLW系列实现创纪录性能"
      ),
      excerpt: t(
        "Our latest TLW model demonstrates cutting speeds exceeding 400 mm²/min while maintaining ±3 µm precision.",
        "我们最新的TLW型号展示了超过400平方毫米/分钟的切割速度，同时保持±3微米的精度。"
      ),
      category: t("Product Launch", "产品发布"),
    },
    {
      id: 3,
      date: "2024-07",
      title: t(
        "Telue Wins Excellence Award at CCMT 2024",
        "特略在CCMT 2024荣获卓越奖"
      ),
      excerpt: t(
        "Our TLK series was recognized for innovation and performance at China's premier machine tool exhibition.",
        "我们的TLK系列在中国首屈一指的机床展览会上因创新和性能而获得认可。"
      ),
      category: t("Awards", "奖项"),
    },
    {
      id: 4,
      date: "2024-06",
      title: t(
        "Fortune 500 Aerospace Company Chooses Telue",
        "世界500强航空航天公司选择特略"
      ),
      excerpt: t(
        "A leading global aerospace manufacturer has placed a major order for Telue medium-speed machines.",
        "全球领先的航空航天制造商向特略订购了大量中速机床。"
      ),
      category: t("Customer Success", "客户成功"),
    },
    {
      id: 5,
      date: "2024-05",
      title: t(
        "Experience Center Expansion in Southeast Asia",
        "东南亚体验中心扩建"
      ),
      excerpt: t(
        "New machining experience center opens in Thailand to serve growing ASEAN market demand.",
        "新的加工体验中心在泰国开业，以满足东盟市场不断增长的需求。"
      ),
      category: t("Company News", "公司新闻"),
    },
    {
      id: 6,
      date: "2024-04",
      title: t(
        "Zero-Return Record Extends to 9 Years",
        "零退货记录延长至9年"
      ),
      excerpt: t(
        "Telue's commitment to quality continues with another year of zero product returns worldwide.",
        "特略对质量的承诺继续，全球产品零退货又持续了一年。"
      ),
      category: t("Achievements", "成就"),
    },
  ];

  const events = [
    {
      title: t("IMTS 2024 - Chicago", "IMTS 2024 - 芝加哥"),
      date: t("September 9-14, 2024", "2024年9月9-14日"),
      location: t("McCormick Place, Chicago, USA", "麦考密克展览中心，芝加哥，美国"),
      description: t(
        "Visit us at Booth #12345 to see our latest innovations",
        "参观我们的展位 #12345，了解我们的最新创新"
      ),
    },
    {
      title: t("CCMT 2024 - Shanghai", "CCMT 2024 - 上海"),
      date: t("April 8-12, 2024", "2024年4月8-12日"),
      location: t("Shanghai New Intl Expo Center, China", "上海新国际博览中心，中国"),
      description: t(
        "Showcasing three new models with industry-first features",
        "展示三款具有行业首创功能的新型号"
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
              {t("News & Events", "新闻活动")}
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              {t(
                "Stay updated with the latest from Telue - product launches, industry events, and company milestones",
                "了解特略的最新动态 - 产品发布、行业活动和公司里程碑"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("Latest News", "最新新闻")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t(
                "Recent announcements and updates from Telue",
                "特略的最新公告和更新"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {news.map((item) => (
              <article
                key={item.id}
                className="group rounded-2xl border border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all overflow-hidden bg-white"
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-medium px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  <Link
                    href={`/news/${item.id}`}
                    className="inline-flex items-center gap-2 text-purple-600 font-medium hover:gap-3 transition-all"
                  >
                    {t("Read More", "阅读更多")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("Upcoming Events", "即将举行的活动")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t(
                "Meet us at industry exhibitions and trade shows",
                "在行业展览和贸易展会上与我们见面"
              )}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-purple-200 bg-white hover:shadow-xl transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <div className="flex flex-col gap-2 text-gray-600 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-purple-600" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="h-5 w-5 text-purple-600" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-500 transition-all whitespace-nowrap"
                  >
                    {t("Learn More", "了解更多")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              {t("Stay Updated", "保持更新")}
            </h2>
            <p className="text-xl text-purple-100 mb-10 leading-relaxed">
              {t(
                "Subscribe to our newsletter for the latest product updates, industry insights, and exclusive offers",
                "订阅我们的新闻通讯，获取最新产品更新、行业见解和独家优惠"
              )}
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder={t("Enter your email", "输入您的邮箱")}
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all whitespace-nowrap"
              >
                {t("Subscribe", "订阅")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}




