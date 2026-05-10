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
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
    color: 'from-blue-500/20 to-cyan-500/20',
    tag: 'NEW RELEASES'
  },
  {
    id: 2,
    title: 'High-Speed Cables',
    description: 'Charging & data sync essentials.',
    icon: <Cpu className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1589131015935-77983637e72b?q=80&w=800&auto=format&fit=crop',
    color: 'from-purple-500/20 to-pink-500/20',
    tag: 'PREMIUM TECH'
  },
  {
    id: 3,
    title: 'Designer Shields',
    description: 'Stylish protection for every device.',
    icon: <ShieldCheck className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=800&auto=format&fit=crop',
    color: 'from-orange-500/20 to-red-500/20',
    tag: 'ULTRA DURABLE'
  },
  {
    id: 4,
    title: 'Impact Guards',
    description: 'Tempered glass protectors.',
    icon: <ShoppingBag className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1625467096769-92c2df9e525a?q=80&w=800&auto=format&fit=crop',
    color: 'from-green-500/20 to-emerald-500/20',
    tag: '9H HARDNESS'
  }
];

const stats = [
  { label: 'DEVICES REPAIRED', value: '12K+' },
  { label: 'GENUINE PARTS', value: '100%' },
  { label: 'PURNIA RADIUS', value: '15KM' },
  { label: 'HAPPY CLIENTS', value: '5000+' },
];

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
    alert('Request Submitted! Our technician will call you shortly.');
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 overflow-x-hidden font-sans">
      {/* Decorative Grid Background */}
      <div className="fixed inset-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-8 py-6 ${
          scrolled ? 'bg-[#050505]/90 backdrop-blur-2xl border-b border-white/5 py-4' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              <Zap className="text-white w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter uppercase leading-none">
                Purnia <span className="text-blue-500 italic">Mobile</span> Care
              </span>
              <span className="text-[10px] font-mono tracking-[0.3em] text-gray-500 mt-1">ADVANCED REPAIR HUB</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
            <a href="#shop" className="hover:text-blue-400 transition-colors">Catalog</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">Location</a>
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="px-6 py-3 bg-white text-black rounded-full hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105"
            >
              Book Service
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono tracking-[0.2em] uppercase mb-8">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Service Status: Active in Purnia
            </div>
            <h1 className="text-6xl md:text-[5.5rem] font-black leading-[0.9] tracking-tighter mb-10 uppercase italic">
              Tech <br />
              <span className="text-transparent border-t-2 border-l-2 border-white/10 pt-4 pl-4 block">Evolution.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-lg mb-12 leading-relaxed border-l-2 border-blue-600 pl-6">
              Purnia's premier destination for high-end mobile parts, designer accessories, and professional door-step repair services.
            </p>
            <div className="flex flex-wrap gap-6">
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-500 transition-all flex items-center gap-3 group shadow-2xl shadow-blue-600/40 uppercase italic"
              >
                Schedule Pick-up <Truck className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 group cursor-pointer hover:bg-white/10 transition-all">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Call Expert</span>
                  <span className="font-black text-lg">+91 98765 43210</span>
                </div>
                <PhoneCall className="w-6 h-6 text-blue-500 group-hover:animate-bounce" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 w-full aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 group">
              <img 
                src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbab?q=80&w=1000&auto=format&fit=crop" 
                alt="Tech core" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              
              <div className="absolute bottom-12 left-12 right-12 p-8 rounded-[2rem] bg-black/40 backdrop-blur-xl border border-white/10">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((s, i) => (
                    <div key={i} className="flex flex-col text-center">
                      <span className="text-3xl font-black text-blue-400 font-mono tracking-tighter">{s.value}</span>
                      <span className="text-[8px] font-mono text-gray-500 tracking-[0.3em] mt-1">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Pulsing light behind image */}
            <div className="absolute -inset-20 bg-blue-600/20 blur-[120px] rounded-full animate-pulse -z-10" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/20 blur-[80px] rounded-full -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="shop" className="py-32 px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
          <div className="max-w-xl">
            <span className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase block mb-4">Inventory Catalogue</span>
            <h2 className="text-4xl md:text-7xl font-black uppercase italic leading-none tracking-tighter">
              The <span className="text-white/40">Hardware</span> <br /> Collection.
            </h2>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all text-[10px] font-mono tracking-widest">SCROLL TO SHOP</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative h-[500px] rounded-[3rem] overflow-hidden bg-white/5 border border-white/5 hover:border-blue-500/50 transition-all duration-500"
            >
              <img 
                src={cat.image} 
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-125 group-hover:rotate-6 transition-all duration-1000 origin-center" 
                alt={cat.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent group-hover:from-blue-900/60 transition-colors" />
              
              <div className="absolute top-8 left-8">
                <span className="text-[9px] font-mono tracking-[0.4em] px-3 py-1 bg-white/10 rounded-full border border-white/10">{cat.tag}</span>
              </div>

              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 backdrop-blur-md flex items-center justify-center mb-8 border border-white/10 group-hover:bg-blue-600 transition-colors shadow-xl">
                  {cat.icon}
                </div>
                <h3 className="text-3xl font-black uppercase italic mb-2 tracking-tighter">{cat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                  {cat.description}
                </p>
                <div className="w-full h-[1px] bg-white/10 mb-6" />
                <button className="flex items-center gap-3 text-white font-mono text-[10px] tracking-widest uppercase hover:text-blue-400 transition-colors">
                  EXPLORE TECH <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Repair Section */}
      <section id="services" className="py-32 px-8 bg-blue-600 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-black/40 skew-x-[-20deg] translate-x-[20%]" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="text-white">
            <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-blue-200 block mb-6 px-4 py-1.5 rounded-full border border-blue-400 w-fit">Home Repair Engine</span>
            <h2 className="text-5xl md:text-8xl font-black uppercase italic leading-[0.85] tracking-tighter mb-12">
              Broken? <br />
              <span className="text-black inline-block transform -skew-x-12 bg-white px-6">Fixed.</span>
            </h2>
            
            <ul className="space-y-8 mb-16">
              {[
                { t: 'Pick-up Service', d: 'We collect your device from anywhere in Purnia.', i: <Truck /> },
                { t: 'Speed Fix', d: 'Common repairs done within 24 hours of pick-up.', i: <Zap /> },
                { t: 'Warranty Guard', d: 'Every repair comes with our 90-day peace of mind.', i: <ShieldCheck /> },
              ].map((item, i) => (
                <li key={i} className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center shrink-0 border border-white/20 group-hover:bg-white group-hover:text-blue-600 transition-all">
                    {React.cloneElement(item.i, { className: "w-7 h-7" })}
                  </div>
                  <div>
                    <h4 className="text-2xl font-black uppercase italic tracking-tight">{item.t}</h4>
                    <p className="text-blue-100 opacity-70 text-base">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => setIsBookingOpen(true)}
              className="px-12 py-6 bg-white text-black rounded-[2rem] font-black text-xl hover:bg-black hover:text-white transition-all uppercase italic flex items-center gap-4 shadow-3xl"
            >
              Request Service <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-[4rem] border-[20px] border-black/20 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1544006659-f0b21884cb1d?q=80&w=1000&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale brightness-50"
                alt="Repair worker"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Status Radar */}
            <div className="absolute -bottom-10 -right-10 p-12 bg-white text-black rounded-[3rem] shadow-2xl flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-4 border-blue-600 flex items-center justify-center mb-4 relative">
                <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping" />
                <Cpu className="text-blue-600 w-10 h-10" />
              </div>
              <span className="text-[10px] font-mono tracking-[0.3em] opacity-40 uppercase">System Status</span>
              <span className="text-2xl font-black italic uppercase">OPTIMIZED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="about" className="pt-32 pb-16 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-32">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-10">
                <Zap className="text-blue-500 w-10 h-10" />
                <span className="text-3xl font-black tracking-tighter uppercase italic">Purnia Mobile Care</span>
              </div>
              <p className="text-gray-500 text-lg leading-relaxed mb-12 max-w-sm">
                Revolutionizing device maintenance in Bihar. We blend rapid logistics with high-precision engineering.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
                  <a key={i} href="#" className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-[10px] font-mono tracking-[0.5em] text-blue-500 uppercase mb-10">Headquarters</h4>
              <p className="text-2xl font-black uppercase italic mb-6 leading-tight">Line Bazar, <br />Purnia, Bihar <br />854301</p>
              <div className="flex items-center gap-2 text-gray-500 text-sm group cursor-pointer hover:text-white transition-colors">
                <Globe className="w-4 h-4" /> Open in Google Maps <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
              </div>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-[10px] font-mono tracking-[0.5em] text-blue-500 uppercase mb-10">Operation Time</h4>
              <div className="space-y-4 font-black uppercase text-xl italic">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span>Mon - Sat</span>
                  <span className="text-gray-400">09:00 - 21:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span>Sunday</span>
                  <span className="text-gray-400">10:00 - 18:00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-16 border-t border-white/5">
            <span className="text-[10px] font-mono tracking-widest text-gray-600">© 2026 PMC CORE ENGINE v4.2.0</span>
            <div className="flex gap-10 mt-8 md:mt-0">
              <span className="text-[10px] font-mono tracking-widest text-gray-600 hover:text-white cursor-pointer">PRIVACY_PROTOCOL</span>
              <span className="text-[10px] font-mono tracking-widest text-gray-600 hover:text-white cursor-pointer">SERVICE_TERMS</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-[3rem] p-12 overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 p-12 pointer-events-none opacity-5">
                <Smartphone className="w-64 h-64 -rotate-12" />
              </div>

              <div className="flex justify-between items-start mb-12 relative z-10">
                <div>
                  <h3 className="text-4xl font-black uppercase italic tracking-tighter">Schedule Service</h3>
                  <p className="text-gray-500 font-mono text-[10px] tracking-widest mt-2 uppercase">Technician deployment v1.0</p>
                </div>
                <button 
                  onClick={() => setIsBookingOpen(false)}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500 transition-colors"
                >
                  <X />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-blue-500 uppercase tracking-widest ml-4">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="ENTER NAME"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all font-bold"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-blue-500 uppercase tracking-widest ml-4">Phone Matrix</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+91 MOBILE"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all font-bold"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-blue-500 uppercase tracking-widest ml-4">Device Model</label>
                  <input 
                    required
                    type="text" 
                    placeholder="E.G. IPHONE 15 / GALAXY S24"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all font-bold"
                    value={formData.device}
                    onChange={e => setFormData({...formData, device: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-blue-500 uppercase tracking-widest ml-4">Pick-up Address</label>
                  <input 
                    required
                    type="text" 
                    placeholder="PURNIA LOCAL ADDRESS"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all font-bold"
                    value={formData.address}
                    onChange={e => setFormData({...formData, address: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-blue-500 uppercase tracking-widest ml-4">Repair Intelligence</label>
                  <textarea 
                    required
                    placeholder="DESCRIBE THE CORE ISSUE"
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all font-bold resize-none"
                    value={formData.issue}
                    onChange={e => setFormData({...formData, issue: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-6 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-500 transition-all uppercase italic flex items-center justify-center gap-4 shadow-2xl shadow-blue-600/40"
                >
                  Confirm Request <Send className="w-6 h-6" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

