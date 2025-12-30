'use client';
import PageHero from '../../components/PageHero';
import { ShieldCheck, Leaf, Clock, Users } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-slate-950">
            <PageHero
                title="Restoring Curb Appeal"
                subtitle="We believe a clean home starts at the curb. Learn why we're passionate about sanitation."
                image="/assets/family.png"
            />

            <section className="py-20 relative">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="glass p-12 rounded-3xl border border-white/5 bg-white/5 relative overflow-hidden">
                        {/* Decorative Quote */}
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Users className="w-32 h-32" />
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-6">Driven by Sanitation Science</h2>
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                It started with a simple observation: <strong>trash bins are gross</strong>. We realized that while people spend hours cleaning their kitchens and bathrooms, the one item that holds the actual garbage sits fostering bacteria right in the garage.
                            </p>
                            <p>
                                Master Bin was founded to solve this problem professionally. We didn't want to just "wash" bins; we wanted to <span className="text-brand-blue font-bold">sanitize</span> them. That's why we invested in hospital-grade steam cleaning technology that kills 99.9% of bacteria without harsh chemicals.
                            </p>
                            <p>
                                Today, we serve thousands of homes and businesses, helping our community stay clean, safe, and pest-free.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 border-y border-white/5 bg-black/20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-6">
                            <div className="text-5xl font-black text-brand-blue mb-2">5k+</div>
                            <div className="text-gray-400">Bins Cleaned</div>
                        </div>
                        <div className="p-6">
                            <div className="text-5xl font-black text-brand-green mb-2">100%</div>
                            <div className="text-gray-400">Eco-Friendly</div>
                        </div>
                        <div className="p-6">
                            <div className="text-5xl font-black text-purple-400 mb-2">500+</div>
                            <div className="text-gray-400">Happy Neighbors</div>
                        </div>
                        <div className="p-6">
                            <div className="text-5xl font-black text-yellow-400 mb-2">5.0</div>
                            <div className="text-gray-400">Average Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
                        <p className="text-gray-400">What drives us every day.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="glass p-8 rounded-2xl border border-white/5 hover:border-brand-blue/30 transition-colors">
                            <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-6">
                                <ShieldCheck className="w-6 h-6 text-brand-blue" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Safety First</h3>
                            <p className="text-gray-400">We use high-temperature steam (200°F) to ensure true sanitation, protecting your family from harmful pathogens.</p>
                        </div>

                        <div className="glass p-8 rounded-2xl border border-white/5 hover:border-brand-green/30 transition-colors">
                            <div className="w-12 h-12 rounded-lg bg-brand-green/10 flex items-center justify-center mb-6">
                                <Leaf className="w-6 h-6 text-brand-green" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Eco-Conscious</h3>
                            <p className="text-gray-400">We reclaim all dirty water and dispose of it properly. No runoff into storm drains.</p>
                        </div>

                        <div className="glass p-8 rounded-2xl border border-white/5 hover:border-purple-400/30 transition-colors">
                            <div className="w-12 h-12 rounded-lg bg-purple-400/10 flex items-center justify-center mb-6">
                                <Clock className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Reliability</h3>
                            <p className="text-gray-400">We show up when we say we will. You get a text notification before we arrive.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
