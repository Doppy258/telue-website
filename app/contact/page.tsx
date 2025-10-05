"use client";

import { useLanguage } from "@/components/language-provider";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t("Visit Us", "访问我们"),
      content: t(
        "203 Juyuan Road, Jiading District, Shanghai, China",
        "中国上海市嘉定区聚源路203号"
      ),
    },
    {
      icon: Phone,
      title: t("Call Us", "致电我们"),
      content: "+86 21 5958 8888",
    },
    {
      icon: Mail,
      title: t("Email Us", "邮件联系"),
      content: "info@telue.com",
    },
    {
      icon: Clock,
      title: t("Business Hours", "营业时间"),
      content: t("Mon-Fri: 9:00 AM - 6:00 PM CST", "周一至周五: 上午9:00 - 下午6:00"),
    },
  ];

  const industries = [
    t("Aerospace", "航空航天"),
    t("Automotive", "汽车制造"),
    t("Electronics", "电子制造"),
    t("Medical Devices", "医疗器械"),
    t("Mold Manufacturing", "模具制造"),
    t("Other", "其他"),
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-purple-700 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t("Contact Us", "联系我们")}
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              {t(
                "Get in touch with our team to discuss your precision machining needs",
                "联系我们的团队讨论您的精密加工需求"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("Send Us a Message", "发送消息")}
              </h2>
              <p className="text-gray-600 mb-8">
                {t(
                  "Fill out the form below and our team will get back to you within 24 hours",
                  "填写下面的表格，我们的团队将在24小时内回复您"
                )}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("Full Name", "姓名")} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("Email", "邮箱")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("Phone", "电话")}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("Company", "公司")}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="industry"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("Industry", "行业")}
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  >
                    <option value="">{t("Select an industry", "选择一个行业")}</option>
                    {industries.map((industry, idx) => (
                      <option key={idx} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("Message", "留言")} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-500 transition-all"
                >
                  {t("Send Message", "发送消息")}
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t("Get in Touch", "联系方式")}
              </h2>
              <p className="text-gray-600 mb-8">
                {t(
                  "Visit our headquarters in Shanghai or contact us through any of the following channels",
                  "访问我们位于上海的总部或通过以下任何渠道联系我们"
                )}
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="flex gap-4 p-6 rounded-2xl border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all"
                    >
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-600">{info.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden border border-purple-200">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                    <p className="text-gray-600">
                      {t("Map View", "地图视图")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Center CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t("Visit Our Experience Center", "参观我们的体验中心")}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t(
                "See our machines in action at our Dongguan experience center. Over 20 machines operating continuously, ready for you to test your actual parts.",
                "在我们东莞体验中心亲眼见证我们的机床运作。20多台机床持续运转，随时可供您测试实际零件。"
              )}
            </p>
            <p className="text-gray-600 mb-10">
              {t(
                "📍 Experience Center: Chang'an, Dongguan, Guangdong",
                "📍 体验中心：广东省东莞市长安镇"
              )}
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-500 transition-all">
              {t("Schedule a Visit", "预约参观")}
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}




