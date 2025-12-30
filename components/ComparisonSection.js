'use client';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle, Home, Star } from 'lucide-react';
import Image from 'next/image';

export default function ComparisonSection() {
    return (
        <section className="py-24 relative bg-slate-950 overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why the "Garden Hose" Fails</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">You wouldn't wash your dishes with cold water and no soap. Why do it to your trash bin?</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch">

                    {/* DIY / Garden Hose (The Bad Way) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-3xl border border-red-500/20 bg-red-900/5 hover:bg-red-900/10 transition-colors"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center">
                                <Home className="w-6 h-6 text-red-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">DIY / Garden Hose</h3>
                        </div>

                        <ul className="space-y-4">
                            {[
                                'Cold Water (Does not kill bacteria)',
                                'Low Pressure (Leaves grime behind)',
                                'Harmful Runoff (Pollutes storm drains)',
                                'Wastes 15-20 Gallons of Water',
                                'Result: Wet, smelly bin.'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400">
                                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className={i === 4 ? 'font-bold text-red-400' : ''}>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 relative h-48 w-full rounded-xl overflow-hidden grayscale opacity-60">
                            <Image src="/dirty.png" alt="Dirty Bin Runoff" fill className="object-cover" />
                        </div>
                    </motion.div>

                    {/* Master Bin System (The Good Way) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-3xl border border-brand-green/30 bg-brand-green/5 hover:bg-brand-green/10 transition-colors relative"
                    >
                        <div className="absolute top-0 right-0 bg-brand-green text-slate-900 text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-3xl shadow-lg shadow-brand-green/20">
                            RECOMMENDED
                        </div>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center shadow-lg shadow-brand-green/20">
                                <Star className="w-6 h-6 text-brand-green fill-brand-green" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Master Bin System</h3>
                        </div>

                        <ul className="space-y-4">
                            {[
                                '200°F Steam (Instantly sanitizes)',
                                '3,500 PSI (Blasts stubborn gunk)',
                                '100% Eco-Friendly (We collect dirty water)',
                                'Uses 90% Less Water',
                                'Result: Hospital-grade clean.'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                                    <span className={i === 4 ? 'font-bold text-brand-green' : ''}>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 relative h-48 w-full rounded-xl overflow-hidden shadow-lg shadow-brand-green/10">
                            <Image src="/assets/steam_action.png" alt="Steam Cleaning Action" fill className="object-cover" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
