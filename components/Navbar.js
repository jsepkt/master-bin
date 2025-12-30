'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (path) => pathname === path;

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Commercial', path: '/commercial' },
        { name: 'About', path: '/about' },
        { name: 'FAQ', path: '/faq' },
    ];

    return (
        <header className="fixed top-0 md:top-6 left-0 right-0 z-50 transition-all duration-300">
            <div className="glass md:rounded-full border-b md:border border-white/10 md:shadow-2xl md:bg-slate-900/60 backdrop-blur-xl w-full md:w-[95%] max-w-7xl mx-auto pl-4 pr-6 md:px-8 h-20 flex items-center justify-between">
                <a href="/">
                    <Logo className="scale-75 origin-left" />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    {navLinks.map((link) => (
                        <a
                            key={link.path}
                            href={link.path}
                            className={`transition-colors hover:text-brand-blue ${isActive(link.path) ? 'text-brand-blue font-bold' : ''}`}
                        >
                            {link.name}
                        </a>
                    ))}

                    <div className="h-6 w-px bg-white/10 mx-2"></div>

                    <a href="/contact" className="px-5 py-2.5 bg-brand-blue text-slate-900 rounded-lg font-bold shadow-lg shadow-brand-blue/20 hover:bg-cyan-400 transition-all flex items-center gap-2">
                        <Phone className="w-4 h-4" /> Get Quote
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
                    >
                        <nav className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.path}
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`py-2 text-lg font-medium text-gray-300 ${isActive(link.path) ? 'text-brand-blue font-bold' : ''}`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-2 w-full py-4 bg-brand-blue text-slate-900 font-bold rounded-xl text-center shadow-lg shadow-brand-blue/20"
                            >
                                Get a Quote
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
