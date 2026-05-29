/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Database, Users, Book, Globe, Shield, Menu, X, ArrowRight } from 'lucide-react';
import { FACTIONS, TERMS, EGO_DEPTH, EMOTIONS, LoreEntry, PSYCHE_DEPTS } from './constants';

type ViewMode = 'main' | 'factions' | 'psyche-dept' | 'schadenfreude-dept' | 'terms' | 'ego' | 'emotions';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showEntryButton, setShowEntryButton] = useState(false);
  const [entered, setEntered] = useState(false);
  const [currentView, setCurrentView] = useState<ViewMode>('main');
  const [selectedEntry, setSelectedEntry] = useState<LoreEntry | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowEntryButton(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleEntry = () => {
    setEntered(true);
  };

  if (!entered) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.8, letterSpacing: '0.2em' }}
                animate={{ scale: 1, letterSpacing: '0.5em' }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="text-6xl font-bold text-white mb-2"
              >
                P.S.Y.C.H.E
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-xs text-white uppercase tracking-[0.3em] font-mono"
              >
                Psycho Spatial Yield Cognitive Hazard Executive
              </motion.div>
              <motion.div 
                className="mt-8 h-[1px] bg-white/20 w-48 mx-auto overflow-hidden"
              >
                <motion.div 
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className="h-full bg-gold-400 w-full"
                />
              </motion.div>
            </motion.div>
          ) : (
             <motion.div
              key="entry"
              className="text-center relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-6xl font-bold text-white mb-2 tracking-[0.5em]">
                P.S.Y.C.H.E
              </div>
              <div className="text-xs text-white opacity-60 uppercase tracking-[0.3em] font-mono">
                Psycho Spatial Yield Cognitive Hazard Executive
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-16"
              >
                <button
                  onClick={handleEntry}
                  className="group relative px-12 py-3 bg-transparent border border-white/30 text-white overflow-hidden transition-all hover:border-gold-500"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform"
                  />
                  <div className="relative flex items-center gap-2 tracking-[0.4em] text-sm uppercase">
                    진입 <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
                <div className="mt-4 text-[10px] text-gold-500 font-mono tracking-widest uppercase animate-pulse">
                  System Ready. Connection Established.
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Transition Flash */}
        <AnimatePresence>
          {entered && (
            <motion.div
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: 50, opacity: 1 }}
              transition={{ duration: 1, ease: "easeIn" }}
              className="fixed inset-0 bg-white z-[100] pointer-events-none"
            />
          )}
        </AnimatePresence>
      </div>
    );
  }

  const isDark = currentView === 'psyche-dept' || currentView === 'schadenfreude-dept';
  const isSchadenfreude = currentView === 'schadenfreude-dept';

  return (
    <div className={`min-h-screen ${
      isSchadenfreude 
        ? 'bg-black text-red-500 selection:bg-red-500/30' 
        : isDark 
          ? 'bg-black text-white selection:bg-white/30' 
          : 'bg-white text-black selection:bg-gold-200'
    } font-sans relative p-4 md:p-8 transition-colors duration-500`}>
      <div className={`fixed inset-0 ${
        isSchadenfreude 
          ? 'bg-grid-dark opacity-20' 
          : isDark 
            ? 'bg-grid-dark opacity-10' 
            : 'bg-grid opacity-[0.03]'
      } pointer-events-none transition-opacity duration-500`} />
      <div className={`relative border-2 md:border-4 ${
        isSchadenfreude 
          ? 'border-red-900/60 bg-black text-white' 
          : isDark 
            ? 'border-white/20 bg-black text-white' 
            : 'border-black bg-white text-black'
      } min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] flex flex-col overflow-hidden transition-colors duration-500`}>
        <MainDashboard currentView={currentView} setCurrentView={setCurrentView} isDark={isDark} />
      </div>
    </div>
  );
}

function MainDashboard({ currentView, setCurrentView, isDark }: { currentView: ViewMode, setCurrentView: (v: ViewMode) => void, isDark: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [selectedEmotionId, setSelectedEmotionId] = useState<string | null>(null);

  const selectedEmotion = EMOTIONS.find(e => e.id === selectedEmotionId);

  const renderContent = () => {
    switch (currentView) {
      case 'main': return <HomeView setView={setCurrentView} />;
      case 'factions': return <ListView title="FACTIONS" subtitle="세력 정보" entries={FACTIONS} onEntryClick={(id) => { 
        if(id === 'psyche') setCurrentView('psyche-dept'); 
        if(id === 'schadenfreude') setCurrentView('schadenfreude-dept');
      }} />;
      case 'terms': return <ListView title="TERMINOLOGY" subtitle="용어 사전" entries={TERMS} />;
      case 'ego': return <ListView title="EGO DEPTH" subtitle="자아심도 분석" entries={EGO_DEPTH} />;
      case 'emotions': 
        if (selectedEmotionId && selectedEmotion) {
          return <EmotionDetailView emotion={selectedEmotion} onBack={() => setSelectedEmotionId(null)} />;
        }
        return <ListView title="EMOTIONAL FORMS" subtitle="감정 형상 자료" entries={EMOTIONS} onEntryClick={(id) => setSelectedEmotionId(id)} isEmotions />;
      case 'psyche-dept': return <PsycheDeptView />;
      case 'schadenfreude-dept': return <SchadenfreudeDeptView onBack={() => setCurrentView('factions')} />;
    }
  };

  return (
    <div className="flex flex-col flex-1 h-full">
      {/* Header */}
      <header className={`h-16 border-b-2 ${isDark ? 'border-white/20 bg-black text-white' : 'border-black bg-white text-black'} flex items-center px-4 md:px-8 justify-between z-40 sticky top-0 transition-colors duration-500`}>
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 ${isDark ? 'bg-white text-black' : 'bg-black text-white'} flex items-center justify-center transition-colors duration-500`}>
            <span className="font-bold text-xl">Ψ</span>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter leading-none">P.S.Y.C.H.E</h1>
            <p className="text-[8px] uppercase tracking-widest text-gold-600 -mt-0.5 font-bold">Psycho Spatial Yield Cognitive Hazard Executive</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <HeaderTab active={currentView === 'main'} onClick={() => setCurrentView('main')} isDark={isDark}>MAIN OPS</HeaderTab>
          <HeaderTab active={currentView === 'factions' || currentView === 'psyche-dept' || currentView === 'schadenfreude-dept'} onClick={() => setCurrentView('factions')} isDark={isDark}>FACTIONS</HeaderTab>
          <HeaderTab active={currentView === 'terms'} onClick={() => setCurrentView('terms')} isDark={isDark}>TERMINOLOGY</HeaderTab>
          <HeaderTab active={currentView === 'ego'} onClick={() => setCurrentView('ego')} isDark={isDark}>EGO DEPTH</HeaderTab>
        </div>

        <div className="text-right hidden sm:block">
          <p className="text-[10px] font-mono leading-none">SYS_STATUS: <span className="text-gold-600 font-bold">ONLINE</span></p>
          <p className="text-[10px] font-mono leading-none opacity-40">DEPTH_LVL: 0.892m</p>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
          <Menu size={24} />
        </button>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar Menu */}
        <aside className={`
          fixed md:relative inset-y-0 left-0 z-50 w-64 border-r-2 ${isDark ? 'border-white/20 bg-black text-white' : 'border-black bg-white text-black'} transition-transform duration-300 transition-colors
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          flex flex-col p-6
        `}>
          <div className="mb-12">
            <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-6 font-mono">Navigation Module</p>
            <nav className="space-y-4">
              <SidebarItem active={currentView === 'factions' || currentView === 'psyche-dept' || currentView === 'schadenfreude-dept'} onClick={() => { setCurrentView('factions'); setMobileMenuOpen(false); }} label="세력" en="Factions" isDark={isDark} />
              <SidebarItem active={currentView === 'terms'} onClick={() => { setCurrentView('terms'); setMobileMenuOpen(false); }} label="용어" en="Terms" isDark={isDark} />
              <SidebarItem active={currentView === 'ego'} onClick={() => { setCurrentView('ego'); setMobileMenuOpen(false); }} label="자아심도" en="Ego Depth" isDark={isDark} />
              <SidebarItem active={currentView === 'emotions'} onClick={() => { setCurrentView('emotions'); setMobileMenuOpen(false); }} label="감정 형상" en="Emotions" isDark={isDark} />
            </nav>
          </div>

          <div className="mt-auto">
            <div className="mb-4">
               <div className="text-[10px] font-mono opacity-40 mb-1">COGNITIVE_HAZARD_DETECTED</div>
               <div className={`h-1 w-full relative ${isDark ? 'bg-white/10' : 'bg-black/5'}`}>
                  <motion.div 
                    animate={{ width: ['20%', '80%', '20%'] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute inset-y-0 left-0 bg-gold-500" 
                  />
               </div>
            </div>
            <div className={`p-4 transition-colors duration-500 ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
              <p className="text-[10px] uppercase text-gold-500 mb-1 font-bold">Alert Level</p>
              <p className="text-xl font-black">ID_CRITICAL</p>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className={`flex-1 overflow-y-auto relative transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
          <div className="absolute top-10 right-10 hidden lg:block">
            <span className="vertical-text text-[10px] font-mono opacity-20 tracking-[0.6em] pointer-events-none">STRATEGIC_DATA_INDEX</span>
          </div>

          <div className="p-6 md:p-12 lg:p-16 max-w-5xl mx-auto w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentView}
                initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.98 }}
                animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* Bottom Status Bar */}
      <footer className={`h-10 border-t-2 ${isDark ? 'border-white/20 bg-black text-white' : 'border-black bg-black text-white'} flex items-center px-6 justify-between text-[10px] font-mono z-50 transition-colors duration-500`}>
        <div className="flex gap-6">
          <span className="opacity-60">P.S.Y.C.H.E CENTRAL COMMAND // TERMINAL_{Math.floor(Math.random() * 900) + 100}</span>
          <span className="text-gold-500 font-bold hidden sm:inline">[CONNECTED_SUCCESSFULLY]</span>
        </div>
        <div className="hidden md:block">
          <span className="opacity-60 uppercase tracking-widest text-[9px]">Auth Level: OMNISCIENT</span>
        </div>
      </footer>

      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-45 md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}
    </div>
  );
}

function HeaderTab({ active, onClick, children, isDark }: { active: boolean, onClick: () => void, children: React.ReactNode, isDark?: boolean }) {
  const activeColor = isDark ? 'border-white text-white' : 'border-black text-black';
  const inactiveColor = isDark ? 'border-transparent text-white/50 hover:text-white' : 'border-transparent text-gray-400 hover:text-black';
  return (
    <button 
      onClick={onClick}
      className={`text-xs font-black tracking-tight pt-1 transition-all border-b-2 ${active ? activeColor : inactiveColor}`}
    >
      {children}
    </button>
  );
}

function SidebarItem({ active, onClick, label, en, isDark }: { active: boolean, onClick: () => void, label: string, en: string, isDark?: boolean }) {
  const dotColorActive = 'bg-gold-500';
  const dotColorInactive = isDark ? 'bg-white/30 group-hover:bg-gold-500' : 'bg-black group-hover:bg-gold-500';
  const textColorActive = 'text-gold-600';
  const textColorInactive = isDark ? 'text-white/70 group-hover:text-gold-500' : 'text-black group-hover:text-gold-600';

  return (
    <button onClick={onClick} className="flex items-center gap-3 group w-full text-left">
      <div className={`w-2 h-2 transition-colors ${active ? dotColorActive : dotColorInactive}`} />
      <span className={`text-lg font-black tracking-tighter uppercase transition-colors ${active ? textColorActive : textColorInactive}`}>
        {label} <span className="text-[10px] opacity-40 ml-1 font-mono">({en})</span>
      </span>
    </button>
  );
}

function HomeView({ setView }: { setView: (v: ViewMode) => void }) {
  return (
    <div className="space-y-16">
      <section className="relative">
        <div className="w-fit mb-8 border-l-4 border-black pl-4">
           <p className="text-sm font-mono gold-text tracking-widest mb-1 italic">DEPARTMENT_CORE</p>
           <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9]">
             P.S.Y.C.H.E<br/>
             <span className="text-gold-600 underline decoration-4 underline-offset-8">EXECUTIVE</span>
           </h1>
        </div>
        
        <p className="max-w-2xl text-xl text-black font-light leading-relaxed">
          정신 공간 인지 재해 집행부. 인간의 무의식이 현실을 잠식하는 '자아심도' 재해에 대응하기 위한 특수 전략 자산입니다.
          현상체 격리 및 드림 코어 회수 절차를 개시합니다.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border border-black group overflow-hidden">
        <HomeCard 
          onClick={() => setView('factions')}
          title="세력 및 본부" 
          subtitle="FACTIONS" 
          desc="자아심도를 개방하는 가스라이터와 닫는 프시케의 대립."
        />
        <HomeCard 
          onClick={() => setView('ego')}
          title="자아심도 분석" 
          subtitle="EGO_DEPTH" 
          desc="무의식의 구조와 핵심 기억 '드림 코어'의 정체."
        />
        <HomeCard 
          onClick={() => setView('terms')}
          title="작전 용어" 
          subtitle="TERMINOLOGY" 
          desc="가스라이팅, 침잠, 초자아 등 대응 프로토콜."
        />
        <HomeCard 
          onClick={() => setView('emotions')}
          title="감정 형상관" 
          subtitle="EMOTIONAL_FORMS" 
          desc="감정이 공간으로 치환될 때의 물리적 발현 형태."
        />
      </div>
    </div>
  );
}

function HomeCard({ title, subtitle, desc, onClick }: { title: string, subtitle: string, desc: string, onClick: () => void }) {
  const isEmotions = subtitle === 'EMOTIONAL_FORMS';
  
  return (
    <button 
      onClick={onClick}
      className={`group p-10 bg-white hover:bg-black transition-all text-left flex flex-col h-full relative overflow-hidden`}
    >
      {isEmotions && (
        <div className="absolute inset-0 noise opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none" />
      )}
      <div className="text-[10px] font-mono text-gold-600 mb-1 tracking-[0.3em] uppercase relative z-10">{subtitle}</div>
      <div className="text-3xl font-black text-black group-hover:text-white mb-4 tracking-tighter relative z-10">{title}</div>
      <div className="text-sm text-slate-500 group-hover:text-slate-400 leading-relaxed flex-1 font-medium relative z-10">{desc}</div>
      <div className="mt-8 flex justify-end relative z-10">
        <ArrowRight className="text-black group-hover:text-gold-500 group-hover:translate-x-2 transition-all" size={28} />
      </div>
    </button>
  );
}

function ListView({ title, subtitle, entries, onEntryClick, isEmotions }: { title: string, subtitle: string, entries: LoreEntry[], onEntryClick?: (id: string) => void, isEmotions?: boolean }) {
  const isEgoDepth = title === 'EGO DEPTH';
  
  return (
    <div className="space-y-16 pb-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-black pb-4 gap-4">
        <div>
          <div className="text-gold-600 font-black tracking-[0.3em] text-xs mb-1 uppercase font-mono">{title}</div>
          <h2 className="text-5xl font-black text-black tracking-tight">{subtitle}</h2>
          {isEmotions && (
            <p className="mt-4 text-xs text-slate-500 font-medium border-l-2 border-gold-500 pl-3">
              각 감정은 가장 흔하게 관측되는 결과를 수집하여 명시한 것이며, 감정이 항상 같은 식으로 형상되지 않음을 알림.
            </p>
          )}
        </div>
        <div className="text-[10px] font-mono opacity-40 uppercase tracking-widest text-right">
          Sector_Security: [HIGH]<br/>
          Doc_ID: PSY-{Math.random().toString(36).substr(2, 6).toUpperCase()}
        </div>
      </div>

      {isEgoDepth && <EgoDepthVisual />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {entries.map((entry) => {
          const isClickable = onEntryClick;
          return (
          <button 
            key={entry.id} 
            onClick={() => isClickable && onEntryClick(entry.id)}
            className={`relative group overflow-hidden border border-black/5 bg-white transition-all text-left ${isClickable ? 'cursor-pointer hover:border-gold-500 hover:shadow-lg' : ''}`}
          >
            {/* Background Layer */}
            {entry.color && (
              entry.color === 'noise' ? (
                <div className="absolute inset-x-0 inset-y-0 noise opacity-[0.07] z-0" />
              ) : (
                <div className="absolute inset-x-0 inset-y-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: entry.color }} />
              )
            )}
            
            <div className="flex gap-4 md:gap-6 p-6 md:p-8 relative z-10 transition-transform group-hover:translate-x-1">
              <div className="w-1 bg-black group-hover:bg-gold-500 shrink-0 relative transition-colors">
                <div className="absolute top-0 left-[-4px] w-3 h-3 bg-gold-500 rounded-full" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-black mb-2 uppercase italic font-display underline decoration-1 underline-offset-4 tracking-tighter">{entry.title}</h3>
                <p className="text-sm text-black/70 font-light mb-4 leading-relaxed max-w-4xl line-clamp-2">{entry.description}</p>
                
                <div className="mt-4 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                   <ArrowRight size={16} className="text-gold-600" />
                </div>
              </div>
            </div>
          </button>
        )})}
      </div>
      
      {isEmotions && (
        <div className="mt-16 text-center border-t border-black/10 pt-8 opacity-40">
           <p className="text-[10px] font-mono tracking-widest">END OF EMOTIONAL FORM DATABASE_04</p>
        </div>
      )}
    </div>
  );
}

function EmotionDetailView({ emotion, onBack }: { emotion: LoreEntry, onBack: () => void }) {
  const bgColor = emotion.color === 'noise' ? 'transparent' : emotion.color;

  return (
    <div className="relative min-h-[600px] transition-all duration-700">
      <div 
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        style={{ 
          background: emotion.color === 'noise' ? 'none' : `radial-gradient(circle at center, ${bgColor}, transparent)` 
        }}
      >
        {emotion.color === 'noise' && <div className="absolute inset-0 noise opacity-10" />}
      </div>

      <div className="relative z-10 space-y-12 pb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-black pb-4 gap-4">
          <div>
            <button 
              onClick={onBack}
              className="text-gold-600 font-black tracking-[0.3em] text-xs mb-1 uppercase font-mono hover:text-black transition-colors flex items-center gap-2"
            >
              <ArrowRight className="rotate-180" size={14} /> BACK_TO_EMOTIONS
            </button>
            <h2 className="text-5xl font-black text-black tracking-tight uppercase italic">{emotion.title}</h2>
          </div>
          <div className="text-[10px] font-mono opacity-40 uppercase tracking-widest text-right">
            Emotion_ID: {emotion.id.toUpperCase()}<br/>
            Observation_Status: [DOCUMENTED]
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-xs font-mono text-gold-500 tracking-[0.4em] uppercase mb-4">OBSERVED_FORM</h3>
              <p className="text-4xl font-black tracking-tighter leading-tight italic border-l-4 border-black pl-6">
                {emotion.description}
              </p>
            </div>

            {emotion.example && (
              <div className="relative p-10 bg-black text-white group shadow-2xl">
                <div className="absolute top-0 right-0 p-2 text-[8px] font-mono text-gold-500 uppercase tracking-widest">Observer_Tape_LOG_01</div>
                <p className="text-2xl font-light italic font-display leading-relaxed">
                  "{emotion.example}"
                </p>
              </div>
            )}

            {emotion.profile?.features && (
              <div className="space-y-6">
                <h3 className="text-xs font-mono text-gold-500 tracking-[0.4em] uppercase">CHARACTERISTICS</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border border-black shadow-lg">
                  {emotion.profile.features.map((f, i) => (
                    <div key={i} className="bg-white p-6 flex items-start gap-4 hover:bg-gold-50 transition-colors">
                      <span className="text-[10px] font-mono text-gold-600 font-bold mt-1">[{String(i+1).padStart(2, '0')}]</span>
                      <span className="text-sm font-bold tracking-tight">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-8">
             <div className="p-8 border-2 border-black bg-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gold-500/10 -mr-8 -mt-8 rotate-45" />
                <h4 className="text-xs font-black tracking-[0.2em] mb-6 uppercase border-b border-black/10 pb-2">PSYCHE_ANALYTICS</h4>
                <div className="space-y-4">
                   <StatRow label="Invasive_Potency" value="78%" />
                   <StatRow label="Reality_Distortion" value="HIGH" />
                   <StatRow label="Closing_Difficulty" value="VARIES" />
                </div>
             </div>

             <div className="text-[9px] font-mono opacity-50 space-y-1">
                <p>// DATA_INTEGRITY_VERIFIED_BY_GESTAULT</p>
                <p>// MONITORING_ACTIVE_VOID_CORE</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex justify-between items-end border-b border-black/5 pb-2">
      <span className="text-[10px] font-mono opacity-40 uppercase tracking-widest">{label}</span>
      <span className="text-sm font-black tracking-tighter text-gold-600">{value}</span>
    </div>
  );
}

function EgoDepthVisual() {
  return (
    <div className="relative flex justify-center items-center py-20 mb-12 border border-black bg-white overflow-hidden group">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
      
      {/* 3 Concentric Circles Container */}
      <div className="relative flex items-center justify-center w-64 h-64 md:w-[400px] md:h-[400px]">
        
        {/* Outer: Ego Depth */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute w-full h-full border border-black rounded-full flex items-start justify-center pt-8 bg-white"
        >
          <div className="text-center z-10 bg-white/80 px-2 backdrop-blur-sm -mt-2">
            <div className="text-xs md:text-sm font-black tracking-widest text-black">자아심도</div>
            <div className="text-[8px] md:text-[10px] font-mono text-slate-400">EGO DEPTH</div>
          </div>
        </motion.div>
        
        {/* Middle: Ego Abyss */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute w-[66%] h-[66%] border border-black border-dashed rounded-full flex items-start justify-center pt-8 md:pt-10 bg-slate-50 overflow-hidden"
        >
          <div className="text-center z-10 bg-slate-50/80 px-2 backdrop-blur-sm -mt-2">
            <div className="text-[10px] md:text-xs font-black tracking-widest text-black">자아심층</div>
            <div className="text-[7px] md:text-[9px] font-mono text-slate-400">EGO ABYSS</div>
          </div>
        </motion.div>
        
        {/* Inner: Dream Core */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          className="absolute z-10 w-[33%] h-[33%] bg-black rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(198,163,79,0.3)]"
        >
          <div className="text-center relative z-20">
            <div className="text-[10px] md:text-xs font-black tracking-widest text-gold-500">드림 코어</div>
            <div className="text-[7px] md:text-[8px] font-mono text-white/50">DREAM CORE</div>
          </div>
          <div className="absolute inset-0 bg-gold-500/20 rounded-full animate-ping opacity-30 z-0" style={{ animationDuration: '3s' }} />
        </motion.div>

        {/* Crosshairs & Target Lines */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
          <div className="w-full h-[1px] bg-black" />
          <div className="h-full w-[1px] bg-black absolute" />
        </div>
      </div>
      
      <div className="absolute bottom-4 right-4 text-right hidden sm:block">
        <div className="text-[10px] font-mono text-slate-400">FIG_01: STRUCTURAL_DIAGRAM</div>
      </div>
    </div>
  );
}

function PsycheDeptView() {
  const [selectedDeptId, setSelectedDeptId] = useState<string | null>(null);
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);

  const selectedDept = PSYCHE_DEPTS.find(d => d.id === selectedDeptId);
  const selectedMember = selectedDept?.subContent?.find(m => m.id === selectedMemberId);

  return (
    <AnimatePresence mode="wait">
      {selectedMemberId && selectedMember ? (
        <motion.div 
          key="member-profile"
          initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.98 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.02 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="pb-24"
        >
          <div className="mb-8">
            <button 
              onClick={() => setSelectedMemberId(null)}
              className="text-gold-600 font-black tracking-[0.3em] text-xs mb-1 uppercase font-mono hover:text-white transition-colors flex items-center gap-2"
            >
              <ArrowRight className="rotate-180" size={14} /> BACK_TO_{selectedDept?.id.replace('dep-', '').toUpperCase() || 'DEPARTMENT'}
            </button>
          </div>
          <CharacterProfileView entry={selectedMember} onBack={() => setSelectedMemberId(null)} />
        </motion.div>
      ) : selectedDeptId && selectedDept ? (
        <motion.div 
          key="dept-detail"
          initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.98 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.02 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16 pb-24 text-white"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-white/20 pb-4 gap-4">
            <div>
              <button 
                onClick={() => setSelectedDeptId(null)}
                className="text-gold-600 font-black tracking-[0.3em] text-xs mb-1 uppercase font-mono hover:text-white transition-colors flex items-center gap-2"
              >
                <ArrowRight className="rotate-180" size={14} /> BACK_TO_DEPARTMENTS
              </button>
              <h2 className="text-5xl font-black text-white tracking-tight">{selectedDept.title}</h2>
            </div>
            <div className="text-[10px] font-mono opacity-40 uppercase tracking-widest text-right">
              Dept_ID: {selectedDept.id.toUpperCase()}<br/>
              Access_Level: [AUTHORIZED]
            </div>
          </div>

          <div className="max-w-4xl">
            <p className="text-xl text-white/80 font-light mb-12 leading-relaxed border-l-2 border-gold-500 pl-6">
              {selectedDept.description}
            </p>

            <div className="space-y-4">
              <h4 className="text-xs font-mono text-gold-500 tracking-[0.4em] uppercase mb-8">PERSONNEL_REGISTRY</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedDept.subContent?.map((member, idx) => (
                  <motion.button 
                    key={member.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setSelectedMemberId(member.id)}
                    className="p-6 border border-white/10 bg-white/5 flex items-center justify-between group hover:bg-gold-500/10 transition-colors text-left"
                  >
                    <span className="text-2xl font-black text-white tracking-tighter uppercase">{member.title}</span>
                    <div className="flex items-center gap-4">
                       {member.profile && <span className="text-[10px] font-mono text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity uppercase">View_Dossier</span>}
                       <div className="w-12 h-[1px] bg-white/20 group-hover:bg-gold-500 transition-colors" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div 
          key="dept-list"
          initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.98 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.02 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16 pb-24 text-white"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-white/20 pb-4 gap-4">
            <div>
              <div className="text-gold-600 font-black tracking-[0.3em] text-xs mb-1 uppercase font-mono">P.S.Y.C.H.E DEPARTMENTS</div>
              <h2 className="text-5xl font-black text-white tracking-tight">집행부 편제</h2>
              <p className="text-[10px] text-white/50 mt-2 font-light">* 화기를 잘 사용하지 않는 이유는 프시케의 업무는 자아심도의 처리이지 전투가 아니기 때문입니다</p>
            </div>
            <div className="text-[10px] font-mono opacity-40 uppercase tracking-widest text-right">
              Dept_Auth: [CLASSIFIED]<br/>
              Doc_ID: DPT-INFO_CORE
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {PSYCHE_DEPTS.map((dept, idx) => (
              <motion.button 
                key={dept.id} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedDeptId(dept.id)}
                className="relative group overflow-hidden border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors text-left"
              >
                <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-xs uppercase tracking-widest" style={{ color: dept.color === 'mint-black' ? '#6EE7B7' : (dept.color || '#C6A34F') }}>[{dept.id.replace('dep-', '')}]</span>
                </div>
                <h3 className="text-2xl font-black mb-2 uppercase font-display" style={dept.color && dept.id !== 'dep-wais-wisc' ? { color: dept.color } : {}}>
                  {dept.id === 'dep-wais-wisc' ? (
                    <>
                      <span style={{ color: '#6EE7B7' }}>WAIS</span>
                      <span style={{ color: '#ffffff' }}>, </span>
                      <span style={{ color: '#000000', textShadow: '-1px -1px 0 #6EE7B7, 1px -1px 0 #6EE7B7, -1px 1px 0 #6EE7B7, 1px 1px 0 #6EE7B7' }}>WISC</span>
                      <span style={{ color: '#6EE7B7' }}> 부서</span>
                    </>
                  ) : (
                    dept.title
                  )}
                </h3>
                <div className="w-8 h-1 mb-6" style={{ backgroundColor: dept.color === 'mint-black' ? '#6EE7B7' : (dept.color || '#C6A34F') }} />
                <p className="text-sm text-white/70 font-light leading-relaxed max-w-sm whitespace-pre-line group-hover:text-white transition-colors">{dept.description}</p>
                
                <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 transition-transform">
                  <ArrowRight className="text-gold-500" size={20} />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CharacterProfileView({ entry, onBack }: { entry: LoreEntry, onBack: () => void }) {
  const { profile } = entry;
  if (!profile) {
    return (
      <div className="p-12 border-2 border-white/10 bg-white/5 text-center">
        <p className="text-white/40 font-mono uppercase tracking-widest mb-4">No dossier available for this personnel.</p>
        <button onClick={onBack} className="text-gold-500 font-bold hover:underline">Return to department</button>
      </div>
    );
  }

  return (
    <div className="pb-12 text-black bg-[#fdfcf8] p-6 md:p-12 border-2 border-black/10 shadow-2xl relative overflow-hidden mx-auto max-w-4xl">
        {/* Blood splatter decoration for Sprüche */}
        {entry.id === 'member-spruch' && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-20">
            {/* Splatter blur background */}
            <div className="absolute top-[15%] right-[15%] w-[150px] h-[150px] bg-red-800/15 rounded-full blur-[25px] mix-blend-multiply" />
            <div className="absolute bottom-[20%] left-[5%] w-[180px] h-[180px] bg-red-900/10 rounded-full blur-[30px] mix-blend-multiply" />
            
            {/* Blood stain 1 */}
            <svg className="absolute top-24 right-12 w-48 h-48 text-red-900/50 opacity-80 mix-blend-multiply" viewBox="0 0 100 100" fill="currentColor">
              <path d="M 50,50 C 62,32 45,18 72,12 C 88,8 82,28 92,42 C 102,58 88,72 68,82 C 48,92 28,78 22,62 C 18,48 38,52 42,38 C 46,22 42,68 50,50 Z" />
              <circle cx="28" cy="18" r="4" />
              <circle cx="82" cy="20" r="3" />
              <circle cx="90" cy="68" r="5" />
              <circle cx="38" cy="78" r="2.5" />
              <circle cx="15" cy="42" r="4" />
            </svg>

            {/* Blood stain 1.5 - drip */}
            <svg className="absolute top-[210px] right-[60px] w-8 h-32 text-red-900/55 opacity-75 mix-blend-multiply animate-pulse" viewBox="0 0 20 100" fill="currentColor" style={{ animationDuration: '6s' }}>
              <path d="M 10,0 C 12,20 12,40 14,60 C 15,70 17,80 17,85 C 17,92 13,98 10,98 C 7,98 3,92 3,85 C 3,80 5,70 6,60 C 8,40 8,20 10,0 Z" />
            </svg>

            {/* Blood stain 2 */}
            <svg className="absolute bottom-16 left-8 w-64 h-64 text-red-900/45 opacity-70 mix-blend-multiply" viewBox="0 0 120 120" fill="currentColor">
              <path d="M 60,60 C 82,38 52,8 32,18 C 12,28 8,58 28,78 C 48,98 82,112 102,88 C 122,62 102,42 82,32 C 62,22 42,78 60,60 Z" />
              <circle cx="48" cy="12" r="5" />
              <circle cx="98" cy="48" r="4" />
              <circle cx="112" cy="98" r="3.5" />
              <circle cx="18" cy="88" r="3" />
              <circle cx="5" cy="55" r="4.5" />
            </svg>
            
            {/* Warning stamp and bloody fingerprint */}
            <div className="absolute top-[40%] right-10 text-red-900/60 font-mono text-[10px] border-2 border-dashed border-red-950/40 px-3 py-1.5 rotate-12 mix-blend-multiply uppercase tracking-widest select-none">
               [WARNING: BIO_CONTAINMENT_BREACH]
            </div>
            
            {/* Red blood text marking */}
            <div className="absolute top-[16%] left-[28%] text-red-800/70 font-mono text-xl font-black rotate-[-8deg] uppercase tracking-widest pointer-events-none select-none">
              SAMPLE_INFECTED
            </div>
          </div>
        )}
        {/* Document Header */}
        <div className="flex flex-col md:flex-row justify-between items-start border-b-4 border-black pb-8 gap-8">
            <div>
                <h2 className="text-4xl font-black tracking-tighter mb-2">입사지원서류</h2>
                <p className="font-mono text-xs opacity-50 uppercase">P.S.Y.C.H.E PERSONNEL_DOSSIER // CLASSIFIED // No_{Math.floor(Math.random() * 100000)}</p>
                <div className="mt-4 flex gap-2">
                    <span className="px-2 py-1 bg-black text-white text-[10px] font-bold">TYPE: FIELD_AGENT</span>
                    <span className="px-2 py-1 border border-black text-[10px] font-bold">AUTH: LV_03</span>
                </div>
            </div>
            <div className="w-32 h-40 border-2 border-black/20 flex items-center justify-center bg-white/50 relative shrink-0">
                <span className="text-[10px] font-mono opacity-30 text-center px-4">PHOTO_REDACTED or_UNAVAILABLE</span>
                {entry.id === 'p-seonsaeng' && (
                    <motion.div 
                      initial={{ scale: 0.8, rotate: 10, opacity: 0 }}
                      animate={{ scale: 1, rotate: 3, opacity: 1 }}
                      className="absolute inset-4 bg-yellow-100 border border-yellow-200 flex items-center justify-center shadow-sm z-10"
                    >
                         <span className="text-2xl font-mono text-yellow-800 font-bold opacity-30">?</span>
                         <span className="absolute bottom-1 right-2 text-[8px] font-mono text-yellow-800">MEMO</span>
                    </motion.div>
                )}
            </div>
        </div>

        {/* Basic Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border border-black my-8">
            <InfoCell label="성명 (NAME)" value={entry.title} />
            <InfoCell label="성별 (GENDER)" value={profile.gender || 'N/A'} />
            <InfoCell label="소속 (DEPT)" value={profile.department || 'N/A'} />
            <InfoCell label="무장 (WEAPON)" value={profile.weapon || 'N/A'} />
        </div>

        {/* Content Section */}
        <div className="space-y-12">
            <div>
                <h4 className="text-xs font-black border-l-4 border-black pl-3 mb-4 bg-black/5 py-1 uppercase tracking-widest">성격 키워드 (PERSONALITY_KEYWORDS)</h4>
                <div className="flex flex-wrap gap-2">
                    {profile.personalityKeywords?.map(kw => (
                        <span key={kw} className="px-4 py-1.5 bg-white border-2 border-black font-black text-sm tracking-tight shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          {kw}
                        </span>
                    ))}
                </div>
            </div>

            <div>
                <h4 className="text-xs font-black border-l-4 border-black pl-3 mb-4 bg-black/5 py-1 uppercase tracking-widest">특징 (REMARKS / BIOMETRIC_FEATURES)</h4>
                <ul className="space-y-4">
                     {profile.features?.map((f, i) => (
                         <li key={i} className="flex gap-4 items-start text-sm leading-relaxed border-b border-black/5 pb-2">
                            <span className="font-mono opacity-20 mt-1 shrink-0">CODE_{String(i+1).padStart(2, '0')}</span>
                            <span className="font-medium">{f}</span>
                         </li>
                     ))}
                </ul>
            </div>

            {/* 관계도 (PERSONNEL RELATIONSHIPS) */}
            {profile.relationships && profile.relationships.length > 0 && (
                <div>
                    <h4 className="text-xs font-black border-l-4 border-black pl-3 mb-4 bg-black/5 py-1 uppercase tracking-widest">요원 상호 작용 / 관계도 (RELATIONSHIP_MATRIX)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {profile.relationships.map((rel, index) => (
                            <div key={index} className="p-4 border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-2 relative overflow-hidden">
                                <div className="flex justify-between items-start border-b border-black pb-1.5 gap-2">
                                    <span className="font-black text-sm tracking-tight">{rel.name}</span>
                                    <span className="px-1.5 py-0.5 bg-black text-white text-[8px] font-mono leading-none tracking-wider uppercase font-extrabold shrink-0">
                                        {rel.relation}
                                    </span>
                                </div>
                                <p className="text-xs text-gray-700 leading-relaxed font-semibold">{rel.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* 활동 로그 (INTERACTION LOGS) */}
            {profile.logs && profile.logs.length > 0 && (
                <div>
                    <h4 className="text-xs font-black border-l-4 border-black pl-3 mb-4 bg-black/5 py-1 uppercase tracking-widest">업무 지침 / 상황 대처 및 활동 로그 (INTERACTION_LOGS)</h4>
                    <div className="border-2 border-black bg-white p-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] divide-y divide-black/10">
                        {profile.logs.map((log, index) => (
                            <div key={index} className={`flex gap-4 items-start text-xs leading-relaxed ${index > 0 ? 'pt-3 mt-3' : ''}`}>
                                <span className="font-mono text-[8px] px-1.5 py-0.5 bg-black/5 border border-black/20 text-black/60 shrink-0 font-bold leading-none">
                                    RECORD_{String(index + 1).padStart(2, '0')}
                                </span>
                                <p className="font-semibold text-gray-900">{log}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>

        {/* Footer / Stamps */}
        <div className="mt-16 pt-8 border-t border-black/10 flex justify-between items-end">
            <div className="text-[10px] font-mono opacity-40 leading-tight">
                DOCUMENT_STATUS: ARCHIVED<br/>
                TIMESTAMP: {new Date().toLocaleDateString()}<br/>
                LOCATION: P.S.Y.C.H.E HQ // SECTOR_G
            </div>
            <div className="relative">
                <div className="w-20 h-20 rounded-full border-4 border-red-600/30 flex items-center justify-center -rotate-12 -mr-6 -mb-4">
                    <span className="text-[10px] font-black text-red-600/40 text-center leading-none uppercase tracking-tighter">
                      PSYCHE<br/>OFFICIAL<br/>SEAL
                    </span>
                </div>
            </div>
        </div>

        <button 
          onClick={onBack}
          className="absolute top-4 right-4 p-2 hover:bg-black/5 transition-colors border border-transparent hover:border-black/10 rounded"
        >
          <X size={20} />
        </button>
    </div>
  );
}

function InfoCell({ label, value }: { label: string, value: string }) {
    return (
        <div className="bg-[#fdfcf8] p-5 flex flex-col gap-1">
            <span className="text-[10px] font-mono opacity-40 uppercase font-black">{label}</span>
            <span className="text-2xl font-black tracking-tighter uppercase italic">{value}</span>
        </div>
    );
}

function SchadenfreudeDeptView({ onBack }: { onBack: () => void }) {
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);

  const sfFaction = FACTIONS.find(f => f.id === 'schadenfreude');
  const selectedMember = sfFaction?.subContent?.find(m => m.id === selectedMemberId);

  return (
    <AnimatePresence mode="wait">
      {selectedMemberId && selectedMember ? (
        <motion.div 
          key="member-profile"
          initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.98 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.02 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="pb-24"
        >
          <div className="mb-8">
            <button 
              onClick={() => setSelectedMemberId(null)}
              className="text-red-500 font-black tracking-[0.3em] text-xs mb-1 uppercase font-mono hover:text-white transition-colors flex items-center gap-2"
            >
              <ArrowRight className="rotate-180" size={14} /> BACK_TO_{sfFaction?.title || 'SCHADENFREUDE'}
            </button>
          </div>
          <CharacterProfileView entry={selectedMember} onBack={() => setSelectedMemberId(null)} />
        </motion.div>
      ) : (
        <motion.div 
          key="sf-detail"
          initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.98 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.02 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16 pb-24 text-white"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-red-900 pb-4 gap-4">
            <div>
              <button 
                onClick={onBack}
                className="text-red-500 font-black tracking-[0.3em] text-xs mb-1 uppercase font-mono hover:text-white transition-colors flex items-center gap-2"
              >
                <ArrowRight className="rotate-180" size={14} /> BACK_TO_FACTIONS
              </button>
              <h2 className="text-5xl font-black text-red-500 tracking-tight">{sfFaction?.title || '샤덴프로이데'}</h2>
            </div>
            <div className="text-[10px] font-mono text-red-800 opacity-60 uppercase tracking-widest text-right">
              Faction_ID: SCHADENFREUDE<br/>
              Access_Level: [UNAUTHORIZED_HAZARD]
            </div>
          </div>

          <div className="max-w-4xl">
            <p className="text-xl text-red-200/80 font-light mb-12 leading-relaxed border-l-2 border-red-600 pl-6">
              {sfFaction?.description}
            </p>

            <div className="space-y-4">
              <h4 className="text-xs font-mono text-red-500 tracking-[0.4em] uppercase mb-8">KNOWN_MEMBERS</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sfFaction?.subContent?.map((member, idx) => (
                  <motion.button 
                    key={member.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setSelectedMemberId(member.id)}
                    className="p-6 border border-red-950/40 bg-red-950/10 flex items-center justify-between group hover:bg-red-900/10 hover:border-red-800 transition-colors text-left"
                  >
                    <span className="text-2xl font-black text-red-500 tracking-tighter uppercase group-hover:text-red-400 transition-colors">{member.title}</span>
                    <div className="flex items-center gap-4">
                       {member.profile && <span className="text-[10px] font-mono text-red-500 opacity-0 group-hover:opacity-100 transition-opacity uppercase">View_Dossier</span>}
                       <div className="w-12 h-[1px] bg-red-950/40 group-hover:bg-red-500 transition-colors" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
