import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight } from 'lucide-react';

export default function CTAFooter() {
  return (
    <footer id="cta-footer-section" className="w-full bg-[#F3F4F5] pt-8 sm:pt-12 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* 1. Large CTA Banner Card */}
        <motion.div 
          id="cta-banner"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="w-full bg-[#0E5B5B] rounded-[32px] sm:rounded-[40px] px-6 py-16 sm:py-20 lg:py-24 text-center relative overflow-hidden shadow-lg"
        >
          {/* Decorative Abstract Organic Curves - Top Right */}
          <svg 
            className="absolute -top-12 -right-12 sm:-top-8 sm:-right-8 w-64 sm:w-80 h-64 sm:h-80 pointer-events-none opacity-20"
            viewBox="0 0 200 200" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M30 180C40 120 120 150 150 70C170 20 120 0 180 10" 
              stroke="#5EEAD4" 
              strokeWidth="18" 
              strokeLinecap="round" 
            />
            <path 
              d="M70 190C80 140 140 160 170 100" 
              stroke="#2DD4BF" 
              strokeWidth="12" 
              strokeLinecap="round" 
              opacity="0.6" 
            />
          </svg>

          {/* Decorative Abstract Organic Curves - Bottom Left */}
          <svg 
            className="absolute -bottom-16 -left-12 sm:-bottom-12 sm:-left-8 w-72 sm:w-96 h-72 sm:h-96 pointer-events-none opacity-20"
            viewBox="0 0 240 240" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M10 190C60 180 70 80 130 90C190 100 190 20 230 40" 
              stroke="#5EEAD4" 
              strokeWidth="22" 
              strokeLinecap="round" 
            />
            <path 
              d="M20 220C70 210 90 120 150 130" 
              stroke="#2DD4BF" 
              strokeWidth="14" 
              strokeLinecap="round" 
              opacity="0.7" 
            />
          </svg>

          {/* Banner Content */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18] mb-8">
              Be First to Experience <br />
              Rocketspace.
            </h2>

            <motion.button 
              id="banner-waitlist-btn"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="bg-white hover:bg-neutral-100 text-[#0E5B5B] font-bold px-7 sm:px-8 py-3.5 rounded-full text-sm sm:text-base inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer group"
            >
              <span>Join the Waitlist</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        {/* 2. Main Footer Navigation Columns */}
        <div className="pt-16 sm:pt-20 pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8"
          >
            
            {/* Column 1: Brand & Bio (Col 1-4) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
              className="lg:col-span-4 space-y-4"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4L4 26H16L16 4Z" fill="#0D7355" />
                    <path d="M16 4L28 26H18L16 4Z" fill="#10B981" />
                    <path d="M16 12L24 26H12L16 12Z" fill="#34D399" opacity="0.4" />
                  </svg>
                </div>
                <span className="text-xl font-bold tracking-tight text-neutral-900">
                  Rocketspace
                </span>
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed max-w-sm">
                Providing marketing tools to help businesses capture leads, boost conversions, and scale effortlessly.
              </p>
            </motion.div>

            {/* Column 2: Quick Links (Col 5-7) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
              className="lg:col-span-3 space-y-3.5"
            >
              <h4 className="text-base font-bold text-neutral-900 tracking-tight">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm text-neutral-600">
                <li>
                  <a href="#home" className="hover:text-neutral-950 transition-colors">Home</a>
                </li>
                <li>
                  <a href="#features" className="hover:text-neutral-950 transition-colors">Features</a>
                </li>
                <li>
                  <a href="#why-choose-us" className="hover:text-neutral-950 transition-colors">Why Choose Us</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-neutral-950 transition-colors">Contact</a>
                </li>
              </ul>
            </motion.div>

            {/* Column 3: Socials (Col 8-9) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.25, ease: "easeOut" }}
              className="lg:col-span-2 space-y-3.5"
            >
              <h4 className="text-base font-bold text-neutral-900 tracking-tight">
                Socials
              </h4>
              <ul className="space-y-2.5 text-sm text-neutral-600">
                <li>
                  <a href="#facebook" className="hover:text-neutral-950 transition-colors">Facebook</a>
                </li>
                <li>
                  <a href="#linkedin" className="hover:text-neutral-950 transition-colors">LinkedIn</a>
                </li>
                <li>
                  <a href="#instagram" className="hover:text-neutral-950 transition-colors">Instagram</a>
                </li>
              </ul>
            </motion.div>

            {/* Column 4: Get in Touch (Col 10-12) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.35, ease: "easeOut" }}
              className="lg:col-span-3 space-y-3.5"
            >
              <h4 className="text-base font-bold text-neutral-900 tracking-tight">
                Get in Touch
              </h4>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-neutral-700 shrink-0" />
                  <a href="mailto:info@rocketspace.com" className="hover:text-neutral-950 transition-colors">
                    info@rocketspace.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-neutral-700 shrink-0" />
                  <a href="tel:2100814911" className="hover:text-neutral-950 transition-colors">
                    (210) 081-4911
                  </a>
                </li>
              </ul>
            </motion.div>

          </motion.div>
        </div>

        {/* 3. Divider Line & Sub-Footer Bar */}
        <div className="border-t border-neutral-200/90 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-neutral-500">
          <div>
            © 2026 Rocketspace. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-neutral-800 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-neutral-800 transition-colors">
              Terms &amp; Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
