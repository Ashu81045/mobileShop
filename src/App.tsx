/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Settings, 
  MapPin, 
  PhoneCall, 
  Truck, 
  ShieldCheck, 
  Cpu, 
  ChevronRight, 
  ShoppingBag,
  Instagram,
  Facebook,
  Twitter,
  Clock,
  CheckCircle2,
  X,
  Send,
  Zap,
  Globe,
  Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const categories = [
  {
    id: 1,
    title: 'New Smartphones',
    description: 'Latest models with full warranty.',
    icon: <Smartphone className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1592890288564-76628a30a657?q=80&w=800&auto=format&fit=crop',
    color: 'from-blue-500/20 to-cyan-500/20',
    tag: 'NEW RELEASES'
  },
  {
    id: 2,
    title: 'High-Speed Cables',
    description: 'Charging & data sync essentials.',
    icon: <Cpu className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=800&auto=format&fit=crop',
    color: 'from-purple-500/20 to-pink-500/20',
    tag: 'PREMIUM TECH'
  },
  {
    id: 3,
    title: 'Designer Shields',
    description: 'Stylish protection for every device.',
    icon: <ShieldCheck className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800&auto=format&fit=crop',
    color: 'from-orange-500/20 to-red-500/20',
    tag: 'ULTRA DURABLE'
  },
  {
    id: 4,
    title: 'Impact Guards',
    description: 'Tempered glass protectors.',
    icon: <ShoppingBag className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=800&auto=format&fit=crop',
    color: 'from-green-500/20 to-emerald-500/20',
    tag: '9H HARDNESS'
  }
];

const stats = [
  { label: 'DEVICES REPAIRED', value: '15K+' },
  { label: 'AUTHENTIC PARTS', value: '100%' },
  { label: 'EXPERT CARE', value: '24/7' },
  { label: 'HAPPY CLIENTS', value: '10K+' },
];

const Logo = ({ className = "w-10 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 200 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stylized 'S' Icon Part - matching the 3D-ish feel */}
    <g transform="translate(5, 10)">
      <circle cx="45" cy="40" r="42" stroke="currentColor" strokeWidth="0.5" className="opacity-20" />
      <circle cx="45" cy="40" r="36" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" className="opacity-10 animate-[spin_60s_linear_infinite]" />
      
      {/* 3D-like 'S' shape based on the image layers */}
      <path 
        d="M25 25 L70 25 L35 45 L75 45 L40 65 L60 65" 
        stroke="currentColor" 
        strokeWidth="10" 
        strokeLinecap="butt" 
        strokeLinejoin="miter"
        className="drop-shadow-[0_0_12px_rgba(0,229,255,0.9)]"
      />
      {/* Shadow layer for 3D effect */}
      <path 
        d="M27 27 L72 27 L37 47 L77 47 L42 67 L62 67" 
        stroke="black" 
        strokeWidth="10" 
        strokeLinecap="butt" 
        strokeLinejoin="miter"
        className="opacity-40"
      />
    </g>
    
    {/* Text Part matching the logo typography */}
    <text x="85" y="52" fill="currentColor" className="font-black italic" style={{ fontSize: '32px', letterSpacing: '-0.02em', fontWeight: 900 }}>SHAMIA</text>
    
    {/* Line - Text - Line pattern */}
    <rect x="85" y="65" width="25" height="1.5" fill="currentColor" />
    <text x="115" y="72" fill="white" className="font-bold" style={{ fontSize: '13px', letterSpacing: '0.4em' }}>MOBILE</text>
    <rect x="175" y="65" width="20" height="1.5" fill="currentColor" />
    
    <text x="88" y="90" fill="currentColor" className="font-medium opacity-90" style={{ fontSize: '8px', letterSpacing: '0.05em' }}>ALL SOLLUTION UNDER ONE ROOF</text>
  </svg>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    issue: '',
    device: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Our technician will contact you within 30 minutes.');
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-brand-cyan/30 overflow-x-hidden font-sans">
      {/* Soft Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 grain" />
        <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-cyan/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[128px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
          scrolled ? 'glass py-3' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center group cursor-pointer">
            <Logo className="w-40 h-20 text-brand-cyan transition-all transform group-hover:scale-105 drop-shadow-[0_0_15px_rgba(0,229,255,0.2)]" />
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#shop" className="text-slate-400 hover:text-white transition-colors">Catalog</a>
            <a href="#services" className="text-slate-400 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-slate-400 hover:text-white transition-colors">Location</a>
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="px-6 py-2.5 bg-brand-cyan text-black rounded-full font-bold hover:brightness-110 transition-all shadow-lg shadow-brand-cyan/20 active:scale-95"
            >
              Book Service
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 px-6 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-cyan/10 text-brand-cyan rounded-full text-xs font-semibold mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
              Serving Purnia & Surrounding Areas
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Expert Repair <br />
              <span className="text-gradient">Premium Accessories.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed">
              Purnia's premier destination for genuine mobile parts, expert care, and professional door-step repair services.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="px-8 py-4 bg-brand-cyan text-black rounded-2xl font-bold text-lg hover:brightness-110 transition-all flex items-center gap-2 shadow-xl shadow-brand-cyan/20"
              >
                Request Pickup <ChevronRight className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-4 p-4 rounded-2xl glass glass-hover transition-all">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                  <PhoneCall className="w-6 h-6 text-brand-cyan" />
                </div>
                <div className="flex flex-col pr-4">
                  <span className="text-xs text-slate-500 font-medium">Direct Line</span>
                  <span className="font-bold text-lg">+91 99312 96160</span>
                  <span className="font-bold text-lg">+91 91427 89166</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 glass p-2 rounded-[2.5rem]">
              <div className="rounded-[2rem] overflow-hidden bg-slate-900 border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop" 
                  alt="Tech repair" 
                  className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 glass rounded-2xl shadow-2xl">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((s, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-2xl font-bold text-brand-cyan leading-none">{s.value}</span>
                      <span className="text-[10px] font-semibold text-slate-500 mt-1 uppercase">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="shop" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Inventory Collection</h2>
          <p className="text-slate-400">Genuine parts and premium accessories for all major brands.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass glass-hover p-4 rounded-3xl group transition-all"
            >
              <div className="h-56 rounded-2xl overflow-hidden mb-6 relative">
                <img 
                  src={cat.image} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt={cat.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-brand-cyan text-black px-3 py-1 rounded-full text-[10px] font-bold">
                  {cat.tag}
                </div>
              </div>

              <div className="px-2 pb-2">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-4 group-hover:bg-brand-cyan group-hover:text-black transition-colors">
                  {React.cloneElement(cat.icon as React.ReactElement, { className: "w-5 h-5" })}
                </div>
                <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{cat.description}</p>
                <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white hover:text-black transition-all">
                  Browse Specs
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Repair Section */}
      <section id="services" className="py-24 px-6 bg-slate-900/50 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Fast. Reliable. <br />
              <span className="text-brand-cyan">Zero Hassle.</span>
            </h2>
            
            <div className="space-y-6 mb-10">
              {[
                { t: 'Free Pickup & Drop', d: 'Available within 15km of Purnia city center.', i: <Truck /> },
                { t: '90-Day Warranty', d: 'Peace of mind with every hardware replacement.', i: <ShieldCheck /> },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center shrink-0">
                    {React.cloneElement(item.i, { className: "w-6 h-6 text-brand-cyan" })}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-tight">{item.t}</h4>
                    <p className="text-slate-500 text-sm mt-0.5">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setIsBookingOpen(true)}
              className="px-10 py-5 bg-brand-cyan text-black rounded-2xl font-bold text-lg hover:brightness-110 transition-all flex items-center gap-2 shadow-xl shadow-brand-cyan/20"
            >
              Start Repair Request
            </button>
          </div>

          <div className="relative">
            <div className="glass p-3 rounded-[3rem]">
              <img 
                src="https://images.unsplash.com/photo-1540324155974-7523202daa3f?q=80&w=1000&auto=format&fit=crop" 
                className="w-full aspect-square object-cover rounded-[2.5rem] opacity-80"
                alt="Expert repair"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 p-8 glass rounded-full shadow-2xl backdrop-blur-2xl">
              <Cpu className="text-brand-cyan w-12 h-12 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="pt-24 pb-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center mb-8">
                <Logo className="w-48 h-24 text-brand-cyan" />
              </div>
              <p className="text-slate-500 text-lg leading-relaxed max-w-sm mb-10">
                Purnia's most trusted partner for mobile technical support and premium parts since 2018.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/shamia_mobile" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-brand-cyan transition-all hover:text-black">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/share/1BHmWfoYBq/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-brand-cyan transition-all hover:text-black">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://g.page/r/CR16AM0ybkobEBM/review" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-brand-cyan transition-all hover:text-black" title="Leave a review">
                  <CheckCircle2 className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-brand-cyan uppercase text-xs tracking-widest mb-8 italic">Location</h4>
              <p className="text-slate-300 font-medium">JVR Plaza Cinema Hall Campus,<br />Near Girja Chowk, Purnea,<br />Bihar 854301</p>
            </div>

            <div>
              <h4 className="font-bold text-brand-cyan uppercase text-xs tracking-widest mb-8 italic">Help Desk</h4>
              <p className="text-slate-300 font-medium">+91 99312 96160<br />+91 91427 89166<br />mdmunazir786@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 text-slate-500 text-xs font-medium uppercase tracking-widest">
            <span>© 2026 Shamia Mobile Hub</span>
            <div className="flex gap-8 mt-6 md:mt-0">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Improved Booking Modal */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl glass rounded-[2.5rem] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
            >              {/* Header */}
              <div className="px-8 pt-8 pb-4 flex justify-between items-start border-b border-white/5 bg-slate-900/50">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Logo className="w-8 h-8 text-brand-cyan" />
                    <h3 className="text-3xl font-bold">Book Repair</h3>
                  </div>
                  <p className="text-slate-500 text-sm">Specialist technician deployment for Shamia Mobile clients.</p>
                </div>
                <button 
                  onClick={() => setIsBookingOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Content - Scrollable */}
              <div className="p-8 overflow-y-auto custom-scrollbar flex-grow">
                <form id="booking-form" onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 italic">CLIENT_ID</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan focus:outline-none transition-all placeholder:text-slate-600"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 italic">COMMS_LINK</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="+91"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan focus:outline-none transition-all placeholder:text-slate-600"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 italic">HARDWARE_MODEL</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. iPhone 15 Pro"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan focus:outline-none transition-all placeholder:text-slate-600"
                      value={formData.device}
                      onChange={e => setFormData({...formData, device: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 italic">PICKUP_ADDR</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Street, Landmark, Purnia"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan focus:outline-none transition-all placeholder:text-slate-600"
                      value={formData.address}
                      onChange={e => setFormData({...formData, address: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2 pb-4">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 italic">DIAG_LOG</label>
                    <textarea 
                      required
                      placeholder="Briefly describe what's wrong..."
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan focus:outline-none transition-all placeholder:text-slate-600 resize-none"
                      value={formData.issue}
                      onChange={e => setFormData({...formData, issue: e.target.value})}
                    />
                  </div>
                </form>
              </div>

              {/* Action Button Area - Fixed at Bottom */}
              <div className="p-8 border-t border-white/5 bg-slate-900/80">
                <button 
                  form="booking-form"
                  type="submit"
                  className="w-full py-5 bg-brand-cyan text-black rounded-2xl font-bold text-lg hover:brightness-110 transition-all shadow-xl shadow-brand-cyan/25 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Confirm Pickup Mission <Send className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

