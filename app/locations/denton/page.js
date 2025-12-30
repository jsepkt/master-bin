'use client';
import PageHero from '../../../components/PageHero';
import QuoteCalculator from '../../../components/QuoteCalculator';
import { CheckCircle2, MapPin } from 'lucide-react';

export default function DentonPage() {
    return (
        <main className="min-h-screen bg-slate-950">
            {/* HERO - Localized */}
            <PageHero
                title="Premier Bin Cleaning in Denton, TX"
                subtitle="The #1 rated eco-friendly sanitization service for Denton homeowners and businesses."
                image="/assets/residential_bins.png"
            />

            {/* LOCAL TRUST SIGNALS */}
            <section className="py-20 relative z-10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue font-bold mb-8">
                        <MapPin className="w-4 h-4" /> Serving All Denton Zip Codes: 76201, 76205, 76208, 76209, 76210
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Denton Chooses Master Bin</h2>
                    <p className="text-gray-400 text-lg mb-12">
                        From Rayzor Ranch to South Lakes, we keep Denton beautiful one bin at a time.
                        Our self-contained cleaning units mean no runoff into Denton's storm drains, protecting our local water supply.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="glass p-6 rounded-2xl border border-white/5">
                            <h3 className="font-bold text-white mb-2 text-xl">HOA Compliant</h3>
                            <p className="text-sm text-gray-400">Trusted by major Denton HOAs for consistent, neighborhood-wide sanitation.</p>
                        </div>
                        <div className="glass p-6 rounded-2xl border border-white/5">
                            <h3 className="font-bold text-white mb-2 text-xl">Locally Owned</h3>
                            <p className="text-sm text-gray-400">We aren't a franchise. We are your Denton neighbors, dedicated to our community.</p>
                        </div>
                        <div className="glass p-6 rounded-2xl border border-white/5">
                            <h3 className="font-bold text-white mb-2 text-xl">Student Discounts</h3>
                            <p className="text-sm text-gray-400">Special rates for UNT and TWU off-campus housing residents.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-20 bg-brand-blue/5">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold text-white">Ready to Clean Your Denton Home?</h2>
                            <p className="text-gray-400 text-lg">
                                Stop holding your breath when you open your trash. Get hospital-grade sanitization starting at just $10/month.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-white"><CheckCircle2 className="text-brand-green" /> 99.9% Bacteria Removal</li>
                                <li className="flex items-center gap-3 text-white"><CheckCircle2 className="text-brand-green" /> Eco-Friendly Process</li>
                                <li className="flex items-center gap-3 text-white"><CheckCircle2 className="text-brand-green" /> 100% Satisfaction Guarantee</li>
                            </ul>
                        </div>
                        <QuoteCalculator />
                    </div>
                </div>
            </section>
        </main>
    );
}
