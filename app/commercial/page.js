'use client';
import { Building2, Truck, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import Logo from '../../components/Logo';
import { motion } from 'framer-motion';

export default function CommercialPage() {
    return (
        <main className="min-h-screen bg-slate-950 selection:bg-brand-green selection:text-slate-900">



            {/* HERO */}
            <section className="relative pt-48 pb-32 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="container mx-auto max-w-6xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-sm font-bold mb-6">
                            <Building2 className="w-4 h-4" /> Commercial Division
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                            Protect Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400">Brand Image</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
                            A dirty dumpster pad or stained sidewalk is the first thing customers notice. We provide enterprise-grade sanitation for restaurants, HOAs, and retail centers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#contact" className="px-8 py-4 bg-brand-green text-slate-900 font-bold rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                                Request Proposal <ArrowRight className="w-5 h-5" />
                            </a>
                            <a href="tel:9404655505" className="px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                                <Phone className="w-5 h-5" /> Speak to Manager
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SOLUTIONS GRID */}
            <section id="solutions" className="py-24 bg-white/5 border-t border-white/5">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-bold text-white mb-16">Enterprise Solutions</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "HOA & Multi-Family", icon: Building2, desc: "Volume discounts for community-wide bin cleaning. Improve resident satisfaction." },
                            { title: "Restaurants", icon: ShieldCheck, desc: "Eliminate grease, odors, and rodent attractants from dumpster pads." },
                            { title: "Fleet Washing", icon: Truck, desc: "Keep your delivery vehicles spotless and representing your brand well." },
                        ].map((item, i) => (
                            <div key={i} className="glass p-8 rounded-2xl border border-white/5 hover:border-brand-green/50 transition-colors group">
                                <div className="w-12 h-12 rounded-lg bg-brand-green/10 flex items-center justify-center mb-6 group-hover:bg-brand-green/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-brand-green" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="contact" className="py-24 relative">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-4xl font-bold text-white mb-8">Ready to Partner?</h2>
                    <div className="glass p-12 rounded-3xl border border-brand-green/30 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-green to-emerald-600" />
                        <p className="text-gray-300 mb-8 text-lg">We offer net-30 terms, consolidated billing, and off-hours scheduling for our commercial partners.</p>
                        <a href="mailto:contact@masterbin.com" className="inline-block px-10 py-5 bg-white text-slate-900 font-bold rounded-xl hover:bg-gray-100 transition-colors">
                            Email Service Director
                        </a>
                    </div>
                </div>
            </section>

        </main>
    );
}
