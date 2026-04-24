import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ChevronRight, Menu, MapPin, Phone, ArrowUpRight, MousePointer2, Instagram, Facebook, Twitter } from "lucide-react";
import Showcase from "./components/Showcase";
import Inventory from "./components/Inventory";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Collection", type: "page" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
];

const specs = [
  { val: "$715", label: "STARTING RATE" },
  { val: "ELITE", label: "TIER ACCESS" },
  { val: "MIAMI", label: "HUB LOCATION" },
  { val: "VVIP", label: "CONCIERGE" },
];

export default function App() {
  const [showInventory, setShowInventory] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  return (
    <div className="relative bg-luxury-black font-sans selection:bg-accent selection:text-black overflow-x-hidden" id="home">
      {/* Sophisticated UI Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(197,164,126,0.08)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white opacity-[0.02]" />
      </div>

      {/* Modern Navigation */}
      <nav className="fixed top-0 left-0 w-full z-100 flex justify-between items-center px-8 md:px-16 py-8 md:py-12 pointer-events-none">
        <div className="flex items-center gap-4 pointer-events-auto group cursor-pointer">
          <div className="text-2xl font-display font-medium tracking-tighter uppercase">
            New Era <span className="text-accent italic font-serif lowercase tracking-normal">Miami</span>
          </div>
        </div>
        
        <div className="flex items-center gap-8 md:gap-12 pointer-events-auto">
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.type === "page") {
                    e.preventDefault();
                    setShowInventory(true);
                  }
                }}
                className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40 hover:text-white transition-colors cursor-pointer"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
          <button 
            onClick={() => setShowInventory(true)}
            className="px-8 py-3 bg-white text-black text-[11px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-accent transition-colors shadow-2xl"
          >
            Explore Fleet
          </button>
        </div>
      </nav>

      {/* HERO SECTION: EDITORIAL MINIMALISM */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative z-10 min-h-screen flex flex-col justify-center items-center px-8 md:px-16 pt-24"
      >
        <div className="w-full max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left Content */}
          <div className="relative z-20">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-px bg-accent" />
                <span className="text-[11px] font-medium uppercase tracking-[0.5em] text-accent">Defining Luxury</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-[110px] font-display font-bold leading-[0.9] uppercase tracking-[-0.04em] mb-12">
                Escape <br/> 
                <span className="italic font-serif font-normal lowercase tracking-normal text-accent opacity-90">the</span> ordinary.
              </h1>
              <p className="text-lg text-white/50 max-w-md leading-relaxed font-light mb-12">
                A new era of high-end automotive excellence. Curated for the most discerning performance purists in Miami and beyond.
              </p>
              <div className="flex items-center gap-8">
                <button 
                  onClick={() => setShowInventory(true)}
                  className="flex items-center gap-3 text-white group"
                >
                  <span className="text-sm font-bold uppercase tracking-[0.2em]">View Collection</span>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                    <ArrowUpRight size={16} />
                  </div>
                </button>
                <div className="h-px w-24 bg-white/10" />
                <div className="flex items-center gap-4 text-white/30">
                  <Instagram size={18} className="hover:text-accent cursor-pointer transition-colors" />
                  <Facebook size={18} className="hover:text-accent cursor-pointer transition-colors" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <motion.div
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1.5 }}
              className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]"
            >
              <img 
                src="https://static.wixstatic.com/media/dfb3c4_0fd7d8ad30e046cd8149d8b77cd62c79~mv2.jpeg/v1/fill/w_590,h_514,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Roller%20Pics_JPEG.jpeg" 
                className="w-full h-full object-cover transition-editorial hover:scale-110"
                referrerPolicy="no-referrer"
                alt="Luxury Car"
              />
              <div className="absolute inset-0 bg-linear-to-t from-luxury-black/60 via-transparent" />
              
              <div className="absolute bottom-10 left-10">
                <p className="text-[11px] uppercase tracking-[0.5em] text-accent mb-2">Exclusive Fleet</p>
                <p className="text-3xl font-display font-medium tracking-tighter uppercase">Rolls Royce Ghost</p>
              </div>
            </motion.div>
            
            {/* Geometric Accent */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-accent/20 rounded-full blur-2xl pointer-events-none" />
          </div>
        </div>

        {/* Global Stats Bar */}
        <div className="w-full max-w-[1600px] mt-32 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((spec, i) => (
            <div key={i} className="px-8 py-10 glass-surface rounded-xl flex flex-col gap-2 group hover:luxury-border transition-all">
              <span className="text-[10px] font-medium text-white/30 tracking-[0.3em] uppercase">{spec.label}</span>
              <span className="text-4xl font-display font-bold tracking-tighter text-white group-hover:text-accent transition-colors">{spec.val}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* SHOWCASE SECTION */}
      <div id="fleet" className="relative z-10 py-32">
        <Showcase />
      </div>

      {/* SERVICES: BENTO DATA GRID */}
      <section id="services" className="relative z-20 py-40 bg-luxury-black/50 px-8 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
            <div className="max-w-2xl">
              <span className="text-[11px] font-medium uppercase tracking-[0.8em] text-accent mb-6 block">Our Standards</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase leading-[0.9]">
                Elite Elite <br/> <span className="text-outline">Experience.</span>
              </h2>
            </div>
            <div className="flex flex-col items-end text-right">
              <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-8 uppercase tracking-widest font-medium">
                Premier white-glove service / Nationwide logistics / 24/7 dedicated support
              </p>
              <div className="flex gap-2">
                {[1, 2, 3].map(i => <div key={i} className="w-2 h-0.5 bg-accent" />)}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[400px]">
            {/* Featured Bento Item */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="md:col-span-8 group relative bg-luxury-grey rounded-2xl overflow-hidden border border-white/5"
            >
              <img src="https://static.wixstatic.com/media/dfb3c4_c0a36ab317df453aa2e9e293710567a1~mv2.jpg" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-editorial grayscale group-hover:grayscale-0" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent" />
              <div className="absolute bottom-12 left-12">
                <span className="text-[10px] font-bold text-accent mb-4 block uppercase tracking-[0.4em]">Visual Excellence</span>
                <h3 className="text-4xl font-display font-bold mb-4 uppercase tracking-tighter">Signature Photography</h3>
                <p className="text-white/50 text-sm max-w-xs tracking-wide leading-relaxed font-light">Bespoke media sessions for your private collection or event.</p>
              </div>
              <div className="absolute top-12 right-12 text-5xl font-display font-bold text-white/5">01</div>
            </motion.div>

            {/* Accent Bento Item */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="md:col-span-4 group bg-accent p-12 rounded-2xl flex flex-col justify-between hover:bg-[#d4b58e] transition-colors cursor-pointer shadow-2xl"
            >
              <div className="text-black">
                <span className="text-[10px] font-bold text-black/50 mb-4 block uppercase tracking-[0.4em]">Concierge</span>
                <h3 className="text-4xl font-display font-bold mb-6 uppercase tracking-tighter leading-none">New Era <br/> Delivery</h3>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-black/70 text-sm tracking-wide leading-relaxed font-medium">Seamless delivery to any private airfield, hotel, or residence across Florida.</p>
                <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all transform group-hover:scale-110">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </motion.div>

            {/* Small Bento Item */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              bottom-in-view
              className="md:col-span-4 glass-surface p-12 rounded-2xl flex flex-col justify-between hover:border-accent/40 transition-colors"
            >
              <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-xl">
                <Phone size={20} className="text-accent" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 uppercase tracking-tighter">Bespoke Support</h4>
                <p className="text-white/40 text-xs tracking-widest leading-relaxed">Dedicated account handlers available 24/7 for all members.</p>
              </div>
            </motion.div>

            {/* Horizontal Bento Item */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="md:col-span-8 group relative glass-surface rounded-2xl overflow-hidden flex items-center p-12"
            >
              <div className="flex flex-col md:flex-row gap-12 items-center w-full">
                <div className="w-24 h-24 border border-accent/40 rounded-full flex items-center justify-center relative shadow-[0_0_50px_rgba(197,164,126,0.1)]">
                  <div className="w-16 h-16 border border-accent/10 rounded-full animate-pulse" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-display font-bold mb-4 uppercase tracking-tighter">Multi-State Logistics</h3>
                  <p className="text-white/40 text-sm tracking-widest leading-relaxed">Serving Miami, Orlando, Tampa, and the tri-state area with unified excellence.</p>
                </div>
                <button className="px-10 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-accent transition-all shrink-0">Inquire</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT: MODERN MINIMALISM */}
      <section id="about" className="relative z-20 py-48 bg-luxury-black">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-12 h-px bg-accent" />
                <span className="text-[11px] font-medium uppercase tracking-[0.8em] text-accent">Our Philosophy</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase leading-[0.9] mb-12">
                Defining <br/> <span className="text-outline italic font-serif lowercase tracking-normal">a</span> New Era.
              </h2>
              <div className="space-y-8 text-white/50 text-xl leading-relaxed font-light">
                <p>
                  New Era Miami is the intersection of high-performance automotive art and uncompromising luxury service.
                </p>
                <p className="text-base text-white/30 tracking-widest leading-loose uppercase">
                  Founded on the principal of providing more than just cars—we provide the keys to a lifestyle. Our fleet is curated for those who understand that details aren't just details; they are everything.
                </p>
              </div>
              <div className="mt-16 grid grid-cols-2 gap-12 border-t border-white/5 pt-16">
                <div>
                  <p className="text-5xl font-display font-bold mb-2 text-accent">04</p>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-white/40">Hub Locations</p>
                </div>
                <div>
                  <p className="text-5xl font-display font-bold mb-2 text-accent">100%</p>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-white/40">Satisfaction</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl luxury-border">
              <img 
                src="https://static.wixstatic.com/media/dfb3c4_b6f26321e375441caaf70f3e26f8cef5~mv2.jpg" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-accent/20 to-transparent mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="relative z-20 bg-luxury-grey/50 border-t border-white/5 px-8 pt-40 pb-20 md:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="col-span-1 lg:col-span-1">
            <div className="text-2xl font-display font-medium tracking-tighter uppercase mb-12">
              New Era <span className="text-accent italic font-serif lowercase tracking-normal">Miami</span>
            </div>
            <div className="flex flex-col gap-6 text-[10px] uppercase tracking-[0.4em] text-white/30">
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-accent" />
                <p>Miami, Florida</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-accent" />
                <p>Private Concierge</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.6em] mb-12 text-accent">Discovery</h4>
            <div className="flex flex-col gap-6 text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
              {["Fleet Deck", "Membership", "Logistics", "Services"].map(label => (
                <a key={label} href="#" className="hover:text-accent transition-colors w-fit">{label}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.6em] mb-12 text-accent">Connect</h4>
            <div className="flex flex-col gap-6 text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
              {["Instagram", "Twitter", "Facebook", "LinkedIn"].map(label => (
                <a key={label} href="#" className="hover:text-accent transition-colors w-fit">{label}</a>
              ))}
            </div>
          </div>

          <div className="glass-surface p-12 rounded-2xl group relative overflow-hidden">
            <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <h4 className="relative text-[10px] font-bold uppercase tracking-[0.4em] mb-8 text-accent">Stay Updated</h4>
            <button 
              onClick={() => setShowInventory(true)}
              className="relative w-full py-4 bg-white text-black text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-accent transition-all shadow-xl"
            >
              Explore Collection
            </button>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-[0.4em] text-white/10 uppercase">© 2025 New Era Miami — All Rights Reserved.</p>
          <div className="flex gap-10">
            {["Premium Services", "Logistics Portfolio", "Private Access"].map(link => (
              <a key={link} href="#" className="text-[10px] tracking-[0.2em] text-white/10 hover:text-accent transition-colors uppercase">{link}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* Fleet Overlay Component */}
      <AnimatePresence>
        {showInventory && (
          <Inventory onClose={() => setShowInventory(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
