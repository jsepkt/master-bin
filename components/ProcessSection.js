'use client'; // Corrected directive
import { motion } from 'framer-motion';
import { Cloud, Flame, Droplets, Flower2, Truck, ArrowRight } from 'lucide-react';

export default function ProcessSection() {
    const steps = [
        {
            num: '01',
            title: 'Hydraulic Lift',
            desc: 'We lift your bin upside down over our specialized wash bay.',
            icon: Truck,
            color: 'bg-blue-500'
        },
        {
            num: '02',
            title: '360° Steam Blast',
            desc: 'High-pressure spinning heads blast 200°F water into every corner.',
            icon: Flame,
            color: 'bg-orange-500'
        },
        {
            num: '03',
            title: 'Exterior Wash',
            desc: 'We hand-detail the handle and lid—the parts you touch most.',
            icon: Droplets,
            color: 'bg-cyan-500'
        },
        {
            num: '04',
            title: 'Deodorize',
            desc: 'An eco-friendly essential oil spray leaves a fresh scent.',
            icon: Flower2,
            color: 'bg-pink-500'
        }
    ];

    return (
        <section id="process" className="py-24 relative bg-slate-950">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The <span className="text-brand-blue">Professional</span> Process</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Our truck is a specialized mobile cleaning unit designed for one job.</p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="absolute top-0 right-0 text-6xl font-black text-white/5 select-none -translate-x-4 -translate-y-4 group-hover:text-brand-blue/10 transition-colors">
                                {step.num}
                            </div>

                            <div className="glass p-8 rounded-2xl border border-white/5 hover:border-brand-blue/30 h-full relative z-10 transition-all group-hover:-translate-y-2">
                                <div className={`w-14 h-14 rounded-xl ${step.color}/20 flex items-center justify-center mb-6`}>
                                    <step.icon className={`w-7 h-7 ${step.color.replace('bg-', 'text-')}`} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                            </div>

                            {/* Connector Line (Desktop Only) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-white/10 z-0"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
