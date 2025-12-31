'use client';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
    return (
        <footer className="py-16 pb-32 md:pb-16 border-t border-white/5 bg-slate-950 relative z-10">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Mobile: Centered Vertical Stack / Desktop: 4-Column Grid */}
                <div className="grid md:grid-cols-4 gap-12 text-center md:text-left">

                    {/* Brand Column */}
                    <div className="flex flex-col items-center md:items-start gap-6">
                        <Logo className="scale-100 origin-center md:origin-left" />
                        <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
                            © 2025 Master Bin & Exterior Cleaning LLC.<br />
                            We don't just clean. We restore.
                        </p>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                            <MapPin className="w-3 h-3" /> Licensed & Insured
                        </div>
                    </div>

                    {/* Quick Links (2x2 Grid on Mobile for easier tapping) */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-white text-lg tracking-wide uppercase opacity-80">Explore</h4>
                        <nav className="grid grid-cols-2 md:grid-cols-1 gap-y-3 gap-x-8 text-sm font-medium">
                            <a href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors py-2">About Us</a>
                            <a href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors py-2">Services</a>
                            <a href="/faq" className="text-gray-400 hover:text-cyan-400 transition-colors py-2">FAQ</a>
                            <a href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors py-2">Get Quote</a>
                            <a href="/commercial" className="text-gray-400 hover:text-cyan-400 transition-colors py-2 col-span-2 md:col-span-1">Commercial</a>
                        </nav>
                    </div>

                    {/* Service Areas (Simplified) */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-white text-lg tracking-wide uppercase opacity-80">Serving</h4>
                        <p className="text-sm text-gray-500 leading-loose">
                            Denton • Frisco • Plano • Little Elm • Prosper • Corinth • Flower Mound • Highland Village
                        </p>
                    </div>

                    {/* Contact Actions (Pill Buttons) */}
                    <div className="flex flex-col items-center md:items-end gap-4 mt-4 md:mt-0">
                        <a
                            href="tel:9404655505"
                            style={{ backgroundColor: '#22d3ee', color: '#020617' }}
                            className="group w-full md:w-auto flex items-center justify-center md:justify-end gap-3 px-6 py-3 font-bold rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:scale-105 transition-all"
                        >
                            <Phone className="w-5 h-5 fill-slate-900" />
                            (940) 465-5505
                        </a>

                        <a href="mailto:masterbinexterior@gmail.com" className="group w-full md:w-auto flex items-center justify-center md:justify-end gap-3 px-6 py-3 bg-slate-800 text-white font-medium rounded-full border border-white/10 hover:bg-slate-700 transition-all">
                            <Mail className="w-4 h-4 text-cyan-400" />
                            Email Us
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
