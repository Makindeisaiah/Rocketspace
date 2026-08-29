import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  LineChart as ChartIcon, 
  Mail, 
  Link2, 
  ChevronRight,
  TrendingUp,
  Share2
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  BarChart, 
  Bar, 
  Cell 
} from 'recharts';

// Data for Line Chart (Real-Time Analytics)
const lineData = [
  { step: '1', value: 65 },
  { step: '2', value: 30 },
  { step: '3', value: 28 },
  { step: '4', value: 60, marked: true },
  { step: '5', value: 50 },
  { step: '6', value: 30 },
  { step: '7', value: 32 },
  { step: '8', value: 52, marked: true },
  { step: '9', value: 38 },
  { step: '10', value: 35 },
  { step: '11', value: 68, marked: true },
  { step: '12', value: 50 },
  { step: '13', value: 28 },
  { step: '14', value: 20 },
  { step: '15', value: 46 }
];

// Data for Bar Chart (Smart Email Campaigns)
const barData = [
  { month: 'Jan', value: 35 },
  { month: 'Feb', value: 55 },
  { month: 'Mar', value: 60 },
  { month: 'Apr', value: 45 },
  { month: 'June', value: 62 },
  { month: 'May', value: 85, isHighlight: true },
  { month: 'July', value: 48 },
  { month: 'Aug', value: 56 },
  { month: 'Sep', value: 65 },
  { month: 'Oct', value: 72 },
  { month: 'Nov', value: 46 },
  { month: 'Dec', value: 54 }
];

// Custom Dot for Line Chart
const CustomDot = (props) => {
  const { cx, cy, payload } = props;
  if (payload.marked) {
    return (
      <g>
        <circle cx={cx} cy={cy} r={6} fill="#FFFFFF" stroke="#8B5CF6" strokeWidth={3} />
        {payload.step === '11' && (
          <line 
            x1={cx} 
            y1={cy} 
            x2={cx} 
            y2={190} 
            stroke="#94A3B8" 
            strokeWidth={1} 
            strokeDasharray="3 3" 
          />
        )}
      </g>
    );
  }
  return null;
};

// Custom Tooltip for Line Chart
const CustomLineTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-neutral-900 text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow-md">
        {payload[0].value}%
      </div>
    );
  }
  return null;
};

export default function KeyFeatures() {
  return (
    <section id="key-features" className="w-full bg-[#F3F4F5] py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center">
        
        {/* 1. Pill Badge */}
        <motion.div 
          id="key-features-badge"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-neutral-200/90 text-neutral-700 text-xs font-bold tracking-wider uppercase mb-5 shadow-2xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-neutral-600" />
          <span>KEY FEATURES</span>
        </motion.div>

        {/* 2. Main Heading */}
        <motion.h2 
          id="key-features-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight text-center max-w-3xl leading-[1.18] mb-4"
        >
          Powerful Features to Grow <br className="hidden sm:inline" />
          Your Business.
        </motion.h2>

        {/* 3. Subtext Paragraph */}
        <motion.p 
          id="key-features-subtext"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="text-sm sm:text-base text-neutral-600 text-center max-w-xl leading-relaxed mb-12 sm:mb-16"
        >
          We offer smart tools to capture leads, streamline marketing, and drive conversion effortlessly.
        </motion.p>

        {/* 4. Feature Cards Grid */}
        <div className="w-full max-w-6xl space-y-6 sm:space-y-8">
          
          {/* Row 1: Two Columns (Card A & Card B) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Card A: Real-Time Analytics */}
            <motion.div 
              id="card-analytics"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-neutral-100 flex flex-col justify-between"
            >
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100/90 text-neutral-700 text-xs font-bold uppercase tracking-wider mb-5">
                  <ChartIcon className="w-3.5 h-3.5 text-neutral-600" />
                  <span>ANALYSIS</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mb-3">
                  Real-Time Analytics
                </h3>

                {/* Subtext */}
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
                  Access live data on your website, campaigns, and traffic to better understand your audience.
                </p>
              </div>

              {/* Chart Sub-section */}
              <div className="pt-2">
                <div className="text-sm font-bold text-neutral-900 mb-4">
                  Reports
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                  className="w-full h-56 relative"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart 
                      data={lineData} 
                      margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="lineColor" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#0EA5E9" />
                          <stop offset="40%" stopColor="#10B981" />
                          <stop offset="80%" stopColor="#84CC16" />
                          <stop offset="100%" stopColor="#EAB308" />
                        </linearGradient>
                      </defs>
                      <CartesianGrid 
                        vertical={false} 
                        stroke="#E2E8F0" 
                        strokeWidth={1} 
                      />
                      <YAxis 
                        domain={[20, 100]} 
                        ticks={[20, 40, 60, 80, 100]} 
                        axisLine={false} 
                        tickLine={false}
                        tick={{ fill: '#64748B', fontSize: 12 }}
                      />
                      <XAxis hide={true} />
                      <Tooltip content={<CustomLineTooltip />} />
                      <Line 
                        type="natural" 
                        dataKey="value" 
                        stroke="url(#lineColor)" 
                        strokeWidth={3} 
                        dot={<CustomDot />}
                        activeDot={{ r: 7, fill: '#8B5CF6', stroke: '#FFFFFF', strokeWidth: 2 }}
                        isAnimationActive={true}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </motion.div>
              </div>
            </motion.div>

            {/* Card B: Smart Email Campaigns */}
            <motion.div 
              id="card-campaigns"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-neutral-100 flex flex-col justify-between"
            >
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100/90 text-neutral-700 text-xs font-bold uppercase tracking-wider mb-5">
                  <Mail className="w-3.5 h-3.5 text-neutral-600" />
                  <span>CAMPAIGNS</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mb-3">
                  Smart Email Campaigns
                </h3>

                {/* Subtext */}
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
                  Easily create, schedule, and track personalized email campaigns. Automate follow-ups to nurture leads.
                </p>
              </div>

              {/* Chart Sub-section */}
              <div className="pt-2">
                <div className="text-sm font-bold text-neutral-900 mb-4">
                  Audience
                </div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
                  className="w-full h-56 relative"
                >
                  {/* Floating May Highlight Badge */}
                  <div className="absolute top-0 left-[43%] -translate-x-1/2 z-10">
                    <div className="bg-[#FF6B4A] text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm relative">
                      35.5K
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#FF6B4A] rotate-45" />
                    </div>
                  </div>

                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart 
                      data={barData} 
                      margin={{ top: 25, right: 0, left: 0, bottom: 0 }}
                      barSize={8}
                    >
                      <XAxis 
                        dataKey="month" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: '#64748B', fontSize: 11 }}
                      />
                      <YAxis hide={true} domain={[0, 100]} />
                      <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                        {barData.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={entry.isHighlight ? '#FF6B4A' : '#FDE8E1'} 
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </motion.div>
              </div>
            </motion.div>

          </div>

          {/* Row 2: Full-Width Integration Card (Card C) */}
          <motion.div 
            id="card-integration"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-neutral-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100/90 text-neutral-700 text-xs font-bold uppercase tracking-wider mb-5">
                  <Link2 className="w-3.5 h-3.5 text-neutral-600" />
                  <span>INTEGRATION</span>
                </div>

                {/* Heading */}
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-neutral-900 tracking-tight leading-snug mb-4">
                  Connects seamlessly with platforms you use.
                </h3>

                {/* Subtext */}
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8 max-w-md">
                  Integrate with your existing CRM, e-commerce to streamline your marketing process.
                </p>

                {/* Action Link */}
                <button 
                  id="get-notified-btn"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-neutral-900 hover:text-teal-800 transition-colors group cursor-pointer"
                >
                  <span>Get Notified</span>
                  <ChevronRight className="w-4 h-4 text-neutral-700 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right Column: Platform Tiles Grid in Rounded Panel */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="w-full max-w-lg bg-[#EAEFF4] rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center gap-4 shadow-inner">
                  
                  {/* Top Row: 5 Tiles (Skype, GitHub, Microsoft, Tesla, YouTube) */}
                  <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
                    
                    {/* 1. Skype */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center shadow-xs hover:shadow-md transition-shadow cursor-default">
                      <div className="w-8 h-8 rounded-full bg-[#00AFF0] flex items-center justify-center text-white font-bold text-base">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                          <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L2.05 21.2a.5.5 0 0 0 .61.61l4.91-.92A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1.8 13.7c-1.8.8-4.2.5-4.9-.7-.2-.3 0-.6.3-.7l1.1-.5c.3-.1.6 0 .8.3.4.6 1.7.7 2.6.2.8-.4.9-1 .4-1.3-.7-.4-2.8-.7-3.6-1.5-.7-.7-.6-1.9.4-2.6 1.4-1 3.7-.8 4.7.2.2.2.1.6-.1.7l-1 .6c-.2.1-.5 0-.7-.2-.5-.5-1.5-.5-2.2-.1-.6.3-.6.8-.2 1 .7.4 2.9.7 3.7 1.5.8.9.6 2.2-.4 2.8z" />
                        </svg>
                      </div>
                    </div>

                    {/* 2. GitHub */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center shadow-xs hover:shadow-md transition-shadow cursor-default">
                      <div className="w-8 h-8 flex items-center justify-center text-neutral-900">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </div>
                    </div>

                    {/* 3. Microsoft */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center shadow-xs hover:shadow-md transition-shadow cursor-default">
                      <div className="grid grid-cols-2 gap-1 w-5 h-5">
                        <div className="bg-[#F25022] rounded-[2px]" />
                        <div className="bg-[#7FBA00] rounded-[2px]" />
                        <div className="bg-[#00A4EF] rounded-[2px]" />
                        <div className="bg-[#FFB900] rounded-[2px]" />
                      </div>
                    </div>

                    {/* 4. Tesla */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center shadow-xs hover:shadow-md transition-shadow cursor-default">
                      <div className="text-[#E82127]">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                          <path d="M12 4.5c2.3 0 4.4.5 6.1 1.4l.9-1.8C16.8 3 14.5 2.5 12 2.5S7.2 3 5 4.1l.9 1.8c1.7-.9 3.8-1.4 6.1-1.4zm0 2.5c-.3 0-.6 0-.9.1L10 17h4l-1.1-9.9c-.3-.1-.6-.1-.9-.1zm-4.7 1.2L5.8 7.3C4.2 8.7 3.1 10.5 2.8 12.5l2 .3c.3-1.6 1.2-3.1 2.5-4.6zm9.4 0c1.3 1.5 2.2 3 2.5 4.6l2-.3c-.3-2-1.4-3.8-3-5.2l-1.5.9z" />
                        </svg>
                      </div>
                    </div>

                    {/* 5. YouTube */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center shadow-xs hover:shadow-md transition-shadow cursor-default">
                      <div className="w-7 h-5 bg-[#FF0000] rounded-lg flex items-center justify-center">
                        <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[7px] border-l-white border-b-[4px] border-b-transparent ml-0.5" />
                      </div>
                    </div>

                  </div>

                  {/* Bottom Row: 4 Tiles (Bing, Amazon, Meta, Slack) */}
                  <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
                    
                    {/* 6. Bing */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center shadow-xs hover:shadow-md transition-shadow cursor-default">
                      <div className="text-[#00839B]">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                          <path d="M6 3v18l5-2.8V7.5l5.5 3.2-3 4.8 4 2.5 2.5-4-8-7.5V3H6z" />
                        </svg>
                      </div>
                    </div>

                    {/* 7. Amazon */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center shadow-xs hover:shadow-md transition-shadow cursor-default">
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] font-black text-neutral-900 tracking-tight leading-none">
                          amazon
                        </span>
                        {/* Smile arrow */}
                        <svg viewBox="0 0 32 8" className="w-5 h-2 text-[#FF9900] stroke-current fill-none stroke-[2]">
                          <path d="M2 2c7 4 20 4 28 0" />
                        </svg>
                      </div>
                    </div>

                    {/* 8. Meta */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center shadow-xs hover:shadow-md transition-shadow cursor-default">
                      <div className="text-[#0668E1]">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                          <path d="M16.9 4.5c-1.8 0-3.3.9-4.9 2.7C10.4 5.4 8.9 4.5 7.1 4.5 3.5 4.5 1 7.6 1 12c0 4.4 2.5 7.5 6.1 7.5 2.2 0 4-1.2 5-2.8 1 1.6 2.8 2.8 5 2.8 3.6 0 6.1-3.1 6.1-7.5-.2-4.4-2.7-7.5-6.3-7.5zm-9.8 12c-2 0-3.3-1.9-3.3-4.5s1.3-4.5 3.3-4.5c1.7 0 2.9 1.4 3.9 3.2-.9 2-2.1 5.8-3.9 5.8zm9.8 0c-1.8 0-3-3.8-3.9-5.8 1-1.8 2.2-3.2 3.9-3.2 2 0 3.3 1.9 3.3 4.5s-1.3 4.5-3.3 4.5z" />
                        </svg>
                      </div>
                    </div>

                    {/* 9. Slack */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center shadow-xs hover:shadow-md transition-shadow cursor-default">
                      <div className="w-6 h-6 relative">
                        <svg viewBox="0 0 24 24" className="w-full h-full">
                          {/* Top-left: red */}
                          <path d="M5 10.5a2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5h2.5v2.5A2.5 2.5 0 0 1 5 10.5z" fill="#E01E5A" />
                          <path d="M6 12a2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5v-5z" fill="#E01E5A" />
                          {/* Top-right: blue */}
                          <path d="M13.5 5a2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5v2.5h-2.5A2.5 2.5 0 0 1 13.5 5z" fill="#36C5F0" />
                          <path d="M12 6a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 4.5 8.5 2.5 2.5 0 0 1 7 6h5z" fill="#36C5F0" />
                          {/* Bottom-right: green */}
                          <path d="M19 13.5a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5h-2.5v-2.5a2.5 2.5 0 0 1 2.5-2.5z" fill="#2EB67D" />
                          <path d="M18 12a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5v-5a2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5v5z" fill="#2EB67D" />
                          {/* Bottom-left: yellow */}
                          <path d="M10.5 19a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5v-2.5h2.5a2.5 2.5 0 0 1 2.5 2.5z" fill="#ECB22E" />
                          <path d="M12 18a2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5h5a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5h-5z" fill="#ECB22E" />
                        </svg>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
