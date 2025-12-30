'use client';
import { useState } from 'react';
import PageHero from '../../components/PageHero';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQPage() {
    const faqs = [
        {
            q: "Do I need to be home when you clean?",
            a: "No! As long as your bins are accessible (at the curb or visible in your driveway), we can clean them. We will send you a text notification when we are finished."
        },
        {
            q: "Does the cleaning process use harsh chemicals?",
            a: "Absolutely not. We use 200°F high-pressure steam effectively kill 99.9% of bacteria. For odor control, we use an eco-friendly, biodegradable deodorizer made from essential oils."
        },
        {
            q: "What day do you come?",
            a: "We typically schedule our visits for the day AFTER your trash collection day. This ensures your bins are empty and ready to be cleaned."
        },
        {
            q: "Do you clean the outside of the bin too?",
            a: "Yes, we wash the exterior, focusing on the lid and handle—the 'high touch' areas that harbor the most germs."
        },
        {
            q: "Where does the dirty water go?",
            a: "We contain 100% of the greywater in our truck's holding tank. It is then transported and disposed of at a licensed wastewater treatment facility, following all EPA regulations."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <main className="min-h-screen bg-slate-950">
            <PageHero
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about our service."
            />

            <section className="py-20 bg-slate-900/50">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="glass rounded-xl border border-white/5 overflow-hidden">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="text-lg font-bold text-white pr-8">{faq.q}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-brand-blue transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-20 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
                        <a href="/contact" className="px-8 py-3 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors">
                            Contact Support
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
