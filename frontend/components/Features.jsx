'use client';

import { BarChart3, TrendingUp, Shield, MessageCircle } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Moliyaviy Tahlil",
      desc: "Daromad va xarajatlaringizni tahlil qilib, moliyaviy salomatlik darajasini hisoblaydi",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Kredit Tavsiyasi",
      desc: "Barcha banklar takliflarini taqqoslab, sizga eng mos kreditni topadi",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Firibgarlikdan Himoya",
      desc: "Shubhali tranzaksiyalarni aniqlaydi va sizni ogohlantiradi",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "AI Chat-bot",
      desc: "Moliyaviy savodxonlikni oddiy tilda o'rgatadigan shaxsiy yordamchi",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Asosiy Imkoniyatlar</h2>
          <p className="text-gray-400 text-lg">
            AI texnologiyasi bilan moliyaviy hayotingizni yanada osonlashtiring
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="glass rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Qanday Ishlaydi?</h3>
            <p className="text-gray-400 mb-6">
              FinWise AI zamonaviy sun'iy intellekt algoritmlaridan foydalanib, sizning moliyaviy 
              ma'lumotlaringizni xavfsiz tahlil qiladi va shaxsiy tavsiyalar beradi.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400 mb-2">1</div>
                <div className="text-gray-400">Ma'lumotlarni kiriting</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-400 mb-2">2</div>
                <div className="text-gray-400">AI tahlil qiladi</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-2xl font-bold text-pink-400 mb-2">3</div>
                <div className="text-gray-400">Tavsiyalar oling</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}