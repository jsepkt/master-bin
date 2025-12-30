'use client';
import { motion } from 'framer-motion';
import { AlertTriangle, Bug, Skull, Biohazard } from 'lucide-react';
import Image from 'next/image';

export default function HealthSection() {
    return (
        <section className="py-24 relative bg-slate-900 overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden border border-red-500/20 shadow-2xl shadow-red-900/20">
                            <Image
                                src="/assets/residential_bins.png"
                                alt="Residential Trash Bins"
                                width={600}
                                height={500}
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4 border-t border-red-500/30 flex items-center gap-3">
                                <AlertTriangle className="text-red-500 w-6 h-6 animate-pulse" />
                                <span className="text-red-200 font-mono text-sm uppercase tracking-wider">Warning: Active Contamination Detected</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold mb-6 uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                            The Silent Killer
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            What's <span className="text-red-500">Really</span> Growing in Your Bin?
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            It's not just "dirty." It's a biohazard. Moisture + Heat + Trash creates the perfect storm for dangerous pathogens. A single gram of bin slime can contain millions of active bacteria cells.
                        </p>

                        <div className="space-y-6">
                            {/* Risk Item 1 */}
                            <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-red-500/30 transition-colors">
                                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                                    <Biohazard className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-1">Salmonella & E. Coli</h4>
                                    <p className="text-gray-400 text-sm">Causes severe food poisoning. Easily transferred to hands and kitchen counters.</p>
                                </div>
                            </div>

                            {/* Risk Item 2 */}
                            <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-red-500/30 transition-colors">
                                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                                    <Skull className="w-6 h-6 text-orange-500" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-1">Listeria & Mold</h4>
                                    <p className="text-gray-400 text-sm">Airborne spores released every time you open the lid. Risky for asthma sufferers.</p>
                                </div>
                            </div>

                            {/* Risk Item 3 */}
                            <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-red-500/30 transition-colors">
                                <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                                    <Bug className="w-6 h-6 text-yellow-500" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-1">Pest Magnet</h4>
                                    <p className="text-gray-400 text-sm">The smell attracts rats, raccoons, and flies that lay eggs (maggots) in the rim.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
