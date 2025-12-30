'use client';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
    return (
        <footer className="py-12 pb-32 md:pb-12 border-t border-white/5 bg-slate-9050 relative z-10 bg-slate-900/80 backdrop-blur-md">
            <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-4 gap-8">

                {/* Brand Column */}
                <div className="flex flex-col items-start gap-4">
                    <Logo className="scale-90 origin-left" />
                    <p className="text-sm text-gray-500">© 2025 Master Bin & Exterior Cleaning LLC</p>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                        <MapPin className="w-3 h-3" /> Licensed & Insured
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-white mb-2">Company</h4>
                    <a href="/about" className="text-sm text-gray-400 hover:text-brand-blue">About Us</a>
                    <a href="/services" className="text-sm text-gray-400 hover:text-brand-blue">Services</a>
                    <a href="/faq" className="text-sm text-gray-400 hover:text-brand-blue">FAQ</a>
                    <a href="/contact" className="text-sm text-gray-400 hover:text-brand-blue">Get Quote</a>
                </div>

                {/* Local SEO Service Areas */}
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-white mb-2">Service Areas</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Denton, Frisco, Plano, Little Elm, Prosper, Corinth, Flower Mound, Highland Village, Lewisville, Aubrey.
                    </p>
                </div>

                {/* Contact Column */}
                <div className="flex flex-col items-end gap-2 text-right">
                    <a href="tel:9404655505" className="flex items-center gap-2 text-white font-bold hover:text-brand-blue transition-colors">
                        <Phone className="w-4 h-4 text-brand-blue" />
                        (940) 465-5505
                    </a>
                    <a href="tel:9407357997" className="flex items-center gap-2 text-gray-400 text-sm hover:text-brand-blue transition-colors">
                        <Phone className="w-3 h-3 text-gray-500" />
                        (940) 735-7997
                    </a>
                    <a href="mailto:masterbinexterior@gmail.com" className="flex items-center gap-2 text-gray-400 text-sm hover:text-brand-blue transition-colors">
                        <Mail className="w-3 h-3 text-gray-500" />
                        masterbinexterior@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    );
}
