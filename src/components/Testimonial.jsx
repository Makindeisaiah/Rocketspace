import React from 'react';
import { 
  Megaphone, 
  CheckCircle2, 
  BarChart2 
} from 'lucide-react';

export default function Testimonial() {
  return (
    <section id="founder-testimonial" className="w-full bg-[#F3F4F5] py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Framed Founder Photo with Overlapping Badges */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg">
              
              {/* Outer Gray Frame/Container */}
              <div 
                id="founder-photo-frame"
                className="bg-[#DDE3E8] rounded-[36px] sm:rounded-[44px] p-6 sm:p-9 relative shadow-2xs"
              >
                {/* Image Container with rounded corners */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/4.5] bg-neutral-800">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80" 
                    alt="Cole Maddison, Founder and CEO of Rocketspace" 
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80";
                    }}
                  />
                  {/* Subtle lighting overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Top-Right Floating Card: Campaign 99.7% with Bar Chart Icon */}
                <div 
                  id="floating-founder-campaign-card"
                  className="absolute top-8 right-2 sm:top-5 sm:-right-4 bg-white rounded-2xl px-4 py-3 shadow-lg border border-neutral-100/90 flex items-center gap-3 z-20"
                >
                  <div className="text-left">
                    <span className="text-[11px] text-neutral-400 font-medium block leading-tight">
                      Campaign
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-neutral-900 block leading-tight tracking-tight mt-0.5">
                      99.7%
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <BarChart2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom-Left Floating Pill: All Tool For Marketing */}
                <div 
                  id="floating-founder-status-pill"
                  className="absolute -bottom-3 left-2 sm:-bottom-4 sm:-left-6 bg-white rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 shadow-lg border border-neutral-100/90 flex items-center gap-2.5 z-20"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-neutral-800 tracking-tight whitespace-nowrap">
                    All Tool For Marketing
                  </span>
                </div>

                {/* Bottom-Right Decorative Badge */}
                <div 
                  id="floating-founder-corner-badge"
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

          {/* Right Column: Founder Quote & Bio */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Pill Badge with Megaphone */}
            <div 
              id="founder-words-badge"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-neutral-200/90 text-neutral-700 text-xs font-bold tracking-wider uppercase mb-8 shadow-2xs"
            >
              <Megaphone className="w-3.5 h-3.5 text-neutral-600" />
              <span>FOUNDER WORDS</span>
            </div>

            {/* Quote Block */}
            <div className="relative mb-8">
              <p 
                id="founder-quote-text"
                className="text-2xl sm:text-3xl lg:text-[32px] text-neutral-900 font-normal leading-[1.35] tracking-tight"
              >
                &ldquo; I can&apos;t express how excited I am to share Rocketspace with you. We built it to make marketing simple, effective, and scalable—so businesses can focus on what they do best. It&apos;s been a game-changer for us, and I believe it can be for you too.
              </p>
            </div>

            {/* Thin Horizontal Divider Line */}
            <div className="w-full h-px bg-neutral-200/80 mb-6" />

            {/* Attribution Block */}
            <div id="founder-attribution" className="space-y-1">
              <h4 className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight">
                Cole Maddison
              </h4>
              <p className="text-sm text-neutral-500 font-medium">
                Founder &amp; CEO, Rocketspace
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
