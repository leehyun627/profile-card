import React, { useState } from 'react';
import { ExternalLink, Award, BookOpen, MessageCircle, User, Share2 } from 'lucide-react';

const DigitalBusinessCard = () => {
  const [activeTab, setActiveTab] = useState('experience');

  // 데이터 설정 (나중에 이 부분만 수정하면 내용이 바뀝니다!)
  const profile = {
    name: "이현", 
    title: "디지털 비즈니스 전문가",
    slogan: "신뢰와 전문성으로 고객의 가치를 증명합니다.",
    experience: [
      { title: "주요 프로젝트 총괄 및 운영", period: "2022 - 현재" },
      { title: "비즈니스 전략 및 DB 마케팅 설계", period: "2020 - 2022" }
    ],
    certificates: ["국가공인 자격증 A", "전문가 과정 이수", "기술 인증 B"],
    activities: [
      { name: "나의 활동 포트폴리오 (증명)", link: "#" },
      { name: "최신 비즈니스 인사이트 블로그", link: "#" }
    ]
  };

  return (
    <div className="max-w-md mx-auto bg-gray-50 min-h-screen pb-10 font-sans shadow-lg">
      <div className="bg-slate-900 text-white p-8 rounded-b-[2.5rem] text-center shadow-xl">
        <div className="w-24 h-24 bg-gray-600 rounded-full mx-auto mb-4 border-4 border-white flex items-center justify-center">
          <User size={48} />
        </div>
        <h1 className="text-2xl font-bold">{profile.name}</h1>
        <p className="text-blue-400 font-medium mt-1">{profile.title}</p>
        <p className="text-sm text-gray-300 mt-4 leading-relaxed italic">"{profile.slogan}"</p>
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold flex items-center gap-2">
            <MessageCircle size={18} /> 상담하기
          </button>
        </div>
      </div>

      <div className="flex justify-around mt-8 px-4 border-b">
        {[
          { id: 'experience', label: '경력/자격', icon: <Award size={18} /> },
          { id: 'activity', label: '활동증명', icon: <BookOpen size={18} /> },
          { id: 'intro', label: '소개글', icon: <User size={18} /> }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center pb-3 px-2 gap-1 transition ${
              activeTab === tab.id ? 'border-b-2 border-slate-900 text-slate-900 font-bold' : 'text-gray-400'
            }`}
          >
            {tab.icon}
            <span className="text-xs">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="p-6">
        {activeTab === 'experience' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider font-bold">Work Experience</h3>
              {profile.experience.map((exp, i) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow-sm mb-3 border-l-4 border-blue-500">
                  <h4 className="font-bold text-slate-800">{exp.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{exp.period}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wider font-bold">Licenses</h3>
              <div className="flex flex-wrap gap-2">
                {profile.certificates.map((cert, i) => (
                  <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="space-y-4">
            {profile.activities.map((act, i) => (
              <a href={act.link} key={i} className="flex items-center justify-between bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                <span className="font-medium text-slate-700">{act.name}</span>
                <ExternalLink size={16} className="text-blue-500" />
              </a>
            ))}
          </div>
        )}

        {activeTab === 'intro' && (
          <div className="bg-white p-6 rounded-xl shadow-sm leading-relaxed text-slate-700 border border-gray-100">
            <p className="mb-4 font-bold text-lg text-slate-900">안녕하세요, {profile.name}입니다.</p>
            <p>저의 전문성을 바탕으로 최고의 결과를 약속드립니다. 언제든 편하게 연락 주세요.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalBusinessCard;
