/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Database, Users, Book, Globe, Shield, Menu, X, ArrowRight } from 'lucide-react';
import { FACTIONS, TERMS, EGO_DEPTH, EMOTIONS, LoreEntry, PSYCHE_DEPTS } from './constants';

type ViewMode = 'main' | 'factions' | 'psyche-dept' | 'terms' | 'ego' | 'emotions';

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

  const isDark = currentView === 'psyche-dept';

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black text-white selection:bg-white/30' : 'bg-white text-black selection:bg-gold-200'} font-sans relative p-4 md:p-8 transition-colors duration-500`}>
      <div className={`fixed inset-0 ${isDark ? 'bg-grid-dark opacity-10' : 'bg-grid opacity-[0.03]'} pointer-events-none transition-opacity duration-500`} />
      <div className={`relative border-2 md:border-4 ${isDark ? 'border-white/20 bg-black text-white' : 'border-black bg-white text-black'} min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] flex flex-col overflow-hidden transition-colors duration-500`}>
        <MainDashboard currentView={currentView} setCurrentView={setCurrentView} isDark={isDark} />
      </div>
    </div>
  );
}

function MainDashboard({ currentView, setCurrentView, isDark }: { currentView: ViewMode, setCurrentView: (v: ViewMode) => void, isDark: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (currentView) {
      case 'main': return <HomeView setView={setCurrentView} />;
      case 'factions': return <ListView title="FACTIONS" subtitle="세력 정보" entries={FACTIONS} onEntryClick={(id) => { if(id === 'psyche') setCurrentView('psyche-dept'); }} />;
      case 'terms': return <ListView title="TERMINOLOGY" subtitle="용어 사전" entries={TERMS} />;
      case 'ego': return <ListView title="EGO DEPTH" subtitle="자아심도 분석" entries={EGO_DEPTH} />;
      case 'emotions': return <ListView title="EMOTIONAL FORMS" subtitle="감정 형상 자료" entries={EMOTIONS} />;
      case 'psyche-dept': return <PsycheDeptView />;
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
          <HeaderTab active={currentView === 'factions' || currentView === 'psyche-dept'} onClick={() => setCurrentView('factions')} isDark={isDark}>FACTIONS</HeaderTab>
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
              <SidebarItem active={currentView === 'factions' || currentView === 'psyche-dept'} onClick={() => { setCurrentView('factions'); setMobileMenuOpen(false); }} label="세력" en="Factions" isDark={isDark} />
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

function ListView({ title, subtitle, entries, onEntryClick }: { title: string, subtitle: string, entries: LoreEntry[], onEntryClick?: (id: string) => void }) {
  const isEmotions = title === 'EMOTIONAL FORMS';
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

      <div className="space-y-8 md:space-y-12">
        {entries.map((entry) => {
          const isClickable = onEntryClick && entry.id === 'psyche';
          return (
          <div 
            key={entry.id} 
            onClick={() => isClickable && onEntryClick(entry.id)}
            className={`relative group overflow-hidden border border-black/5 bg-white transition-all ${isClickable ? 'cursor-pointer hover:border-gold-500 hover:shadow-lg' : ''}`}
          >
            {/* Background Layer */}
            {entry.color && (
              entry.color === 'noise' ? (
                <div className="absolute inset-x-0 inset-y-0 noise opacity-[0.07] z-0" />
              ) : (
                <div className="absolute inset-x-0 inset-y-0 z-0" style={{ backgroundColor: entry.color }} />
              )
            )}
            
            <div className="flex gap-6 md:gap-10 p-6 md:p-10 relative z-10">
              <div className="w-1 bg-black shrink-0 relative">
                <div className="absolute top-0 left-[-4px] w-3 h-3 bg-gold-500 rounded-full" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-black text-black mb-4 uppercase italic font-display underline decoration-1 underline-offset-4">{entry.title}</h3>
                <p className="text-lg text-black font-light mb-6 leading-relaxed max-w-4xl whitespace-pre-line">{entry.description}</p>
                
                {entry.example && (
                  <div className="relative p-6 bg-white/40 border-r-4 border-gold-500 backdrop-blur-[2px]">
                    <p className="text-sm italic font-medium text-slate-600 leading-relaxed italic font-display">
                      "{entry.example}"
                    </p>
                    <div className="absolute top-0 right-0 p-1 text-[8px] font-mono text-slate-300 uppercase">Observer_Note</div>
                  </div>
                )}

                {entry.subContent && (
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-black border border-black">
                    {entry.subContent.map(sub => (
                      <div key={sub.id} className="bg-white p-6 hover:bg-gold-50 transition-colors">
                        <div className="text-[10px] font-black text-gold-600 mb-2 tracking-widest uppercase font-mono">[{sub.id}]</div>
                        <div className="text-lg font-black text-black mb-1">{sub.title}</div>
                        <div className="text-sm text-slate-500 leading-normal font-medium">{sub.description}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
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
