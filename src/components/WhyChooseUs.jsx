import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Users, 
  ChevronRight,
  Zap,
  TrendingUp,
  Target,
  BarChart3,
  Layers
} from 'lucide-react';

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState('automate');

  const tabs = [
    { id: 'automate', label: 'Automate Marketing' },
    { id: 'conversions', label: 'Increase Conversions' },
    { id: 'lead', label: 'Manage Lead' },
    { id: 'scale', label: 'Scale Your Business' },
  ];

  return (
    <section id="why-choose-us" className="w-full bg-[#F3F4F5] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center">
        
        {/* 1. Pill Badge */}
        <div 
          id="why-choose-us-badge"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-neutral-200/90 text-neutral-700 text-xs font-bold tracking-wider uppercase mb-5 shadow-2xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-neutral-600" />
          <span>WHY CHOOSE US</span>
        </div>

        {/* 2. Main Heading */}
        <h2 
          id="why-choose-us-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight text-center max-w-3xl leading-[1.18] mb-10"
        >
          Everything you need for <br className="hidden sm:inline" />
          success on a platform
        </h2>

        {/* 3. Tab / Pill Switcher */}
        <div 
          id="tab-switcher"
          className="bg-[#E4E9ED] p-1.5 rounded-full inline-flex items-center gap-1 max-w-full overflow-x-auto shadow-inner mb-12 sm:mb-14 scrollbar-none"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-white text-neutral-900 font-semibold shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900 font-medium hover:bg-white/40'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 4. Feature Card Container */}
        <div className="w-full max-w-6xl">
          {activeTab === 'automate' ? (
            <div 
              id="feature-card-automate"
              className="bg-white rounded-3xl sm:rounded-[32px] p-6 sm:p-10 lg:p-14 shadow-sm border border-neutral-100"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                
                {/* Left Column */}
                <div className="lg:col-span-6 flex flex-col items-start text-left">
                  {/* Squiggle Icon Badge */}
                  <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-6 text-neutral-800 shadow-2xs">
                    <svg 
                      viewBox="0 0 24 24" 
                      className="w-5 h-5 stroke-current fill-none stroke-[2.2] stroke-linecap-round stroke-linejoin-round"
                    >
                      <path d="M4 12c2.5-4 5.5-4 8 0s5.5 4 8 0" />
                    </svg>
                  </div>

                  {/* Heading */}
                  <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-neutral-900 tracking-tight leading-snug mb-4">
                    Automate Tasks, Save <br className="hidden sm:inline" />
                    Time.
                  </h3>

                  {/* Paragraph */}
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
                    Simplify workflows with automated emails, follow-ups, and campaign triggers—so you can focus on growth while we handle the rest.
                  </p>

                  {/* Button */}
                  <button 
                    id="notify-me-btn"
                    className="bg-[#F1F3F5] hover:bg-[#E5E8EB] text-neutral-800 font-semibold px-5 py-2.5 rounded-xl text-sm inline-flex items-center gap-1.5 transition-colors active:scale-95 cursor-pointer"
                  >
                    <span>Notify Me</span>
                    <ChevronRight className="w-4 h-4 text-neutral-600" />
                  </button>
                </div>

                {/* Right Column: Visual Mockup */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="relative w-full max-w-lg">
                    
                    {/* Gray Outer Frame */}
                    <div className="bg-[#DDE3E8] rounded-3xl p-4 sm:p-5 relative shadow-2xs">
                      
                      {/* Person Working Image Container */}
                      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-neutral-800">
                        <img 
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=80" 
                          alt="Person working at a laptop in a modern workspace" 
                          className="w-full h-full object-cover object-center"
                          referrerPolicy="no-referrer"
                        />
                        {/* Subtle inner overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Top-Right Floating Card: Campaign 65,891 */}
                      <div 
                        id="floating-campaign-card"
                        className="absolute top-6 right-2 sm:top-2 sm:-right-4 bg-white rounded-2xl p-3 sm:px-4 sm:py-3 shadow-lg border border-neutral-100/90 flex items-center gap-3 z-20"
                      >
                        <div className="text-left">
                          <span className="text-[11px] text-neutral-400 font-medium block leading-tight">
                            Campaign
                          </span>
                          <span className="text-sm sm:text-base font-extrabold text-neutral-900 block leading-tight tracking-tight mt-0.5">
                            65,891
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                          <Users className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Bottom-Left Floating Pill: Email sent successfully */}
                      <div 
                        id="floating-email-status"
                        className="absolute -bottom-3 left-2 sm:-bottom-4 sm:-left-4 bg-white rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-lg border border-neutral-100/90 flex items-center gap-2.5 z-20"
                      >
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-neutral-800 tracking-tight whitespace-nowrap">
                          Email sent successfully
                        </span>
                      </div>

                      {/* Bottom-Right Decorative Badge */}
                      <div 
                        id="floating-corner-badge"
                        className="absolute -bottom-3 -right-2 sm:-bottom-3 sm:-right-3 w-11 h-11 rounded-xl bg-[#5EC2A3] text-white flex items-center justify-center shadow-md rotate-6 z-20"
                      >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                          <circle cx="12" cy="7" r="3" opacity="0.9" />
                          <circle cx="7.5" cy="15" r="3" opacity="0.9" />
                          <circle cx="16.5" cy="15" r="3" opacity="0.9" />
                        </svg>
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </div>
          ) : (
            /* Placeholder for other tabs */
            <div 
              id={`feature-card-${activeTab}`}
              className="bg-white rounded-3xl sm:rounded-[32px] p-12 sm:p-16 lg:p-20 shadow-sm border border-neutral-100 text-center flex flex-col items-center justify-center min-h-[380px]"
            >
              <div className="w-14 h-14 rounded-2xl bg-neutral-100 text-neutral-500 flex items-center justify-center mb-5">
                {activeTab === 'conversions' && <TrendingUp className="w-7 h-7 text-[#1F6363]" />}
                {activeTab === 'lead' && <Target className="w-7 h-7 text-[#1F6363]" />}
                {activeTab === 'scale' && <BarChart3 className="w-7 h-7 text-[#1F6363]" />}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                {tabs.find(t => t.id === activeTab)?.label}
              </h3>
              <p className="text-neutral-500 text-sm sm:text-base max-w-md mb-6">
                Content coming soon. Seamlessly optimize, track, and amplify conversion rates with automated tools.
              </p>
              <button
                onClick={() => setActiveTab('automate')}
                className="text-xs font-semibold text-[#1F6363] hover:underline"
              >
                ← Back to Automate Marketing
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
