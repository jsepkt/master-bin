'use client';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah T.",
        role: "Subscription Member",
        text: "Absolutely amazing service. The trash bins smell like mint now! I signed up for the monthly plan immediately.",
        rating: 5
    },
    {
        name: "Michael J.",
        role: "Homeowner",
        text: "My driveway looks brand new! I didn't realize how dirty it was until Master Bin cleaned it. Highly recommended.",
        rating: 5
    },
    {
        name: "Robert D.",
        role: "Property Manager",
        text: "Professional, on time, and great communication. They even cleaned up the mess the garbage truck left behind.",
        rating: 5
    },
    {
        name: "Emily R.",
        role: "Local Business",
        text: "Our storefront sidewalk has never looked better. The steam cleaning really makes a difference.",
        rating: 5
    }
];

export default function TestimonialMarquee() {
    return (
        <section className="py-20 bg-slate-950 overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 max-w-6xl mb-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Neighbors Love Us</h2>
                <div className="flex items-center justify-center gap-1">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                    <span className="text-gray-400 ml-2">(5.0 Average Rating)</span>
                </div>
            </div>

            <div className="relative flex overflow-hidden mask-gradient-x">
                <motion.div
                    className="flex gap-8 flex-nowrap px-4"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20
                    }}
                >
                    {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="w-[350px] flex-shrink-0 glass p-6 rounded-2xl border border-white/5 bg-slate-900/50"
                        >
                            <Quote className="w-8 h-8 text-brand-blue/20 mb-4" />
                            <p className="text-gray-300 mb-6 italic min-h-[80px]">"{t.text}"</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-slate-900 font-bold">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold text-white">{t.name}</div>
                                    <div className="text-xs text-brand-blue">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
