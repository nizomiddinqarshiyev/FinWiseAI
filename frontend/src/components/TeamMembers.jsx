'use client';

import { Github, Linkedin, Twitter, Mail, Award } from 'lucide-react';

export default function TeamMembers() {
  const team = [
    {
  name: "Behruz Shoymurodov",
  role: "System Administrator, Computer Engineer",
  bio: "",
  image: "BS",
  skills: ["Zabbix", "MySQL", "PostgreSQL", "Microsoft Office"],
  color: "from-indigo-500 to-blue-500",
  registeredAI500: true,
  social: {
    github: "https://github.com/bekhruz-ad",
    linkedin: "linkedin.com/in/behruz-shoymurodov-34a93537a",
    twitter: "",
    email: "shoymurodovbehruz4080@gmail.com"
  }
},
    {
  name: "Muhammadqul Xurboyev",
  role: "Frontend Developer",
  bio: "",
  image: "MX",
  skills: ["JavaScript", "HTML", "CSS", "Django REST API"],
  color: "from-green-500 to-emerald-500",
  registeredAI500: true,
  social: {
    github: "https://github.com/Muhammadkul-Khurboyev",
    linkedin: "linkedin.com/in/muhammadqul-xurboyev-97a746291",
    twitter: "",
    email: "muhammadqulxurboyev84@gmail.com"
  }
},
    {
  name: "Nizomjon Qarshiyev",
  role: "Fullstack Developer & Team Lead",
  bio: "",
  image: "NQ",
  skills: [],
  color: "from-purple-500 to-fuchsia-500",
  registeredAI500: true,
  social: {
    github: "https://nizomiddinqarshyev.github.io",
    linkedin: "linkedin.com/in/nizomjon-qarshiyev-717347292",
    twitter: "",
    email: "qarshiyevnizomiddin75@gmail.com"
  }
},
    {
  name: "Abduvaliyev Samandar",
  role: "Mobile Developer",
  bio: "",
  image: "AS",
  skills: ["Android Studio", "Flutter", "VS Code", "MySQL", "REST API"],
  color: "from-orange-500 to-amber-500",
  registeredAI500: true,
  social: {
    github: "https://github.com/AbduvaliyevSamandar",
    linkedin: "linkedin.com/in/samandar-abduvaliyev-70889438b",
    twitter: "",
    email: "Abduvaliyevs145@gmail.com"
  }
},
    {
  name: "Ashuraliyev Nurbek",
  role: "Data Analyst",
  bio: "",
  image: "AN",
  skills: ["SQL Server Management", "PowerBI", "Excel", "Python"],
  color: "from-teal-500 to-cyan-500",
  registeredAI500: true,
  social: {
    github: "https://github.com/Nurbek2809",
    linkedin: "https://www.linkedin.com/in/nurbek-ashuraliyev-230b1b278",
    twitter: "",
    email: "nashuraliyev74@gmail.com"
  }
}
    
  ];

  const stats = [
    { number: "15+", label: "Jamoa A'zolari" },
    { number: "50+", label: "Yillik Tajriba" },
    { number: "10+", label: "Mukofotlar" },
    { number: "100%", label: "O'zbek Jamoasi" }
  ];

  return (
    <section id="team" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-blue-400 text-sm">🇺🇿 O'zbekistonlik mutaxassislar</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Bizning Jamoa</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            FinWise AI orqasida turgan tajribali mutaxassislar jamoasi bilan tanishing
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Member Image/Avatar */}
              <div className="relative mb-6">
                <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {member.image}
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                  <Award className="w-3 h-3 inline mr-1" />
                  Verified
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-400 text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {member.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="bg-slate-800 px-3 py-1 rounded-full text-xs text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3 pt-4 border-t border-slate-700">
                {member.social.github && (
                  <a
                    href={member.social.github}
                    className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {member.social.email && (
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Jamoadagi Bo'sh O'rinlar
            </h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Biz doimo iqtidorli mutaxassislarni qidiramiz. Agar siz AI, fintech yoki 
              texnologiya sohasida tajribangiz bo'lsa, biz bilan bog'laning!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg">
                Vakansiyalarni Ko'rish
              </button>
              <button className="border border-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition">
                CV Yuborish
              </button>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h4 className="font-bold mb-2">Maqsad</h4>
            <p className="text-gray-400 text-sm">
              O'zbekistonni moliyaviy texnologiyalar markaziga aylantirish
            </p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">💡</div>
            <h4 className="font-bold mb-2">Innovatsiya</h4>
            <p className="text-gray-400 text-sm">
              Doimiy rivojlanish va zamonaviy texnologiyalarni qo'llash
            </p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🤝</div>
            <h4 className="font-bold mb-2">Hamkorlik</h4>
            <p className="text-gray-400 text-sm">
              Foydalanuvchilar bilan ishonchli munosabatlar qurish
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}