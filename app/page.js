'use client';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Building2, Home, Phone } from 'lucide-react';
import WaterBackground from '../components/WaterBackground';
import ComparisonSlider from '../components/ComparisonSlider';
import ServiceCard3D from '../components/ServiceCard3D';
import HealthSection from '../components/HealthSection';
import ProcessSection from '../components/ProcessSection';
import ComparisonSection from '../components/ComparisonSection';

import QuoteCalculator from '../components/QuoteCalculator';
import TestimonialMarquee from '../components/TestimonialMarquee';
import PowerWashSimulator from '../components/PowerWashSimulator';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-brand-blue selection:text-white">



      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <WaterBackground />

        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* OWNER UPSELL BADGE */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-yellow-400/30 bg-yellow-400/5 text-yellow-300 text-sm font-bold mb-8 animate-fade-in-up">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-400 text-slate-900 text-xs font-black">
                %
              </span>
              Get 3 Neighbors to Sign Up = 20% OFF!
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-8">
              Master Bin & <br />
              <span className="text-gradient">Exterior Cleaning LLC</span>
            </h1>

            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              The premier eco-friendly solution for sanitizing, deodorizing, and disinfecting your trash bins and exterior surfaces. Licensed & Insured.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:9404655505" className="w-full sm:w-auto px-8 py-4 animate-shimmer text-white font-black rounded-xl shadow-lg shadow-brand-blue/20 hover:scale-105 transition-transform flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call for Instant Quote
              </a>
              <a href="#pricing" className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                See Pricing Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400 font-medium">
              <span className="flex text-yellow-500">★★★★★</span>
              <span>5-Star Rated & Fully Insured</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RESTORED NARRATIVE SECTIONS */}
      <HealthSection />
      <ComparisonSection />
      <ProcessSection />

      {/* INTERACTIVE DEMO (Power Wash Simulator) */}
      <PowerWashSimulator />

      {/* SERVICES GRID */}
      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Complete Exterior Restoration</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">From bacteria-free bins to sparkling driveways, we bring your property back to life.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 perspective-1000">
            <ServiceCard3D
              icon={Home}
              title="Residential Cleaning"
              accentColor="blue"
              features={['Curbside Trash Bin Sanitization', 'Driveway Pressure Washing', 'Patio & Deck Cleaning', 'House Soft Washing']}
            />
            <ServiceCard3D
              icon={Building2}
              title="Commercial Services"
              accentColor="green"
              features={['Dumpster Pad Cleaning', 'Storefront & Sidewalks', 'HOA & Multi-Unit Contracts', 'Graffiti Removal']}
            />
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-20 bg-brand-blue/5 relative overflow-hidden">
        {/* Soft Gradient Separator Top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

        {/* Soft Gradient Separator Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Hospital-Grade Clean. <br /> Family-Friendly Price.</h2>
            <p className="text-gray-400 underline decoration-brand-blue underline-offset-4">No hidden fees. No contracts. Just results.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Static Layout (Simplified for clarity) */}
            <div className="space-y-6">
              <div className="glass p-6 rounded-2xl border border-brand-green/30 bg-brand-green/5 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">Monthly Service</h3>
                  <p className="text-sm text-gray-400">Best for year-round hygiene.</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black text-brand-green">$10</div>
                  <div className="text-xs text-gray-400">/month</div>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl border border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">One-Time Clean</h3>
                  <p className="text-sm text-gray-400">Seasonal deep clean.</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black text-white">$25</div>
                  <div className="text-xs text-gray-400">/visit</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="font-bold text-white mb-2">What's Included?</h4>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-blue" /> High-Pressure Steam Clean</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-blue" /> Eco-Friendly Deodorizer</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-brand-blue" /> Bin Return Service</li>
                </ul>
              </div>
            </div>

            {/* Right: Interactive Calculator */}
            <div>
              <QuoteCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialMarquee />


    </main >
  );
}
