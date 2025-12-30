'use client';
import { motion } from 'framer-motion';

export default function PageHero({ title, subtitle, image = null, accentColor = 'blue' }) {
    const gradients = {
        blue: 'from-brand-blue to-cyan-400',
        green: 'from-brand-green to-emerald-400',
        purple: 'from-purple-400 to-pink-400',
    };

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-24 overflow-hidden">
            {/* Background Image / Pattern */}
            <div className="absolute inset-0 z-0">
                {image ? (
                    <>
                        <img src={image} alt={title} className="w-full h-full object-cover opacity-30" />
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950"></div>
                    </>
                ) : (
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                )}
                {/* Glow Orb */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-${accentColor === 'green' ? 'brand-green' : 'brand-blue'}/10 rounded-full blur-[120px]`} />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        {/* Logic to handle highlighting last word or specific words can be added, for now simple split */}
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradients[accentColor]}`}>
                            {title}
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
