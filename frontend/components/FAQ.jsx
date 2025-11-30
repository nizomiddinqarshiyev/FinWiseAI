'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'FinWise AI qanday ishlaydi?',
      a: 'Platformamiz zamonaviy sun\'iy intellekt texnologiyasi va machine learning algoritmlaridan foydalanib, sizning moliyaviy ma\'lumotlaringizni xavfsiz tahlil qiladi. AI daromad va xarajatlaringizni o\'rganib, moliyaviy salomatlik darajasini hisoblaydi va shaxsiy tavsiyalar beradi.'
    },
    {
      q: 'Mening ma\'lumotlarim xavfsizmi?',
      a: 'Ha, albatta! Barcha ma\'lumotlar yuqori darajada shifrlangan (AES-256) va xavfsiz serverlarda saqlanadi. Biz hech qachon sizning shaxsiy ma\'lumotlaringizni uchinchi shaxslarga bermaymir va xalqaro xavfsizlik standartlariga amal qilamiz.'
    },
    {
      q: 'Xizmat qancha turadi?',
      a: 'Asosiy funksiyalar (moliyaviy tahlil, kredit taqqoslash) butunlay bepul. Premium rejalar oyiga 50,000 so\'mdan boshlanadi va qo\'shimcha imkoniyatlarni (batafsil tahlil, shaxsiy maslahatchi, firibgarlikdan himoya) o\'z ichiga oladi. Birinchi oy bepul sinov davri mavjud.'
    },
    {
      q: 'Qanday banklar bilan ishlaymiz?',
      a: 'Hozirda O\'zbekistonning 15+ yirik banklari bilan hamkorlik qilamiz, jumladan milliy va xorijiy banklar. Har kuni yangi takliflar va foiz stavkalarini yangilab boramiz.'
    },
    {
      q: 'Kredit olish uchun ariza topshirishim kerakmi?',
      a: 'Yo\'q, FinWise AI faqat tahlil va tavsiya xizmati. Biz sizga eng yaxshi variantlarni ko\'rsatamiz, lekin to\'g\'ridan-to\'g\'ri kredit bermaymiz. Kerakli bankni tanlaganingizdan keyin, siz o\'sha bank bilan bevosita aloqaga kirasiz.'
    },
    {
      q: 'AI qanchalik aniq tavsiya beradi?',
      a: 'Bizning AI modellarimiz 99.8% aniqlik darajasiga ega va 100,000+ foydalanuvchi tajribasiga asoslangan. Tavsiyalar sizning daromad, xarajat, kredit tarixi va boshqa omillarni hisobga olgan holda beriladi.'
    },
    {
      q: 'Mobil ilovangiz bormi?',
      a: 'Ha! iOS va Android uchun mobil ilovalarimiz mavjud. Ilovada barcha funksiyalar, push-bildirishnomalar va qo\'shimcha imkoniyatlar bor. App Store va Google Play\'dan yuklab olishingiz mumkin.'
    },
    {
      q: 'Qanday qilib boshlashim mumkin?',
      a: 'Juda oson! "Bepul Sinab Ko\'ring" tugmasini bosing, ro\'yxatdan o\'ting va bir necha daqiqada moliyaviy tahlil olasiz. Kredit karta kerak emas.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header - Centered */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tez-tez So'raladigan Savollar
          </h2>
          <p className="text-gray-400 text-lg">
            Sizni qiziqtirgan savollarning javoblari
          </p>
        </div>

        {/* FAQ Items with side padding */}
        <div className="space-y-4 px-4 md:px-8">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-500/50"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  id={`faq-toggle-${idx}`}
                  className="w-full p-6 flex items-start justify-between text-left group"
                >
                  <h3 className="text-lg font-bold pr-4 group-hover:text-blue-400 transition flex-1">
                    {item.q}
                  </h3>
                  <div className="flex-shrink-0 mt-1">
                    {isOpen ? (
                      <ChevronUp className="w-6 h-6 text-blue-400 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-all duration-300" />
                    )}
                  </div>
                </button>
                
                {isOpen && (
                  <div 
                    id={`faq-panel-${idx}`}
                    role="region"
                    aria-labelledby={`faq-toggle-${idx}`}
                    className="px-6 pb-6 animate-fadeIn"
                  >
                    <p className="text-gray-400 leading-relaxed border-t border-slate-700 pt-4">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact CTA - with side padding */}
        <div className="mt-12 px-4 md:px-8">
          <div className="glass rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Boshqa savolingiz bormi?
            </h3>
            <p className="text-gray-400 mb-6">
              Bizning qo'llab-quvvatlash jamoamiz sizga yordam berishga tayyor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                Bizga Yozing
              </button>
              <button className="border border-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition">
                Telegram Bot
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}