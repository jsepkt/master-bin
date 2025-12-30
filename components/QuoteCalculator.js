'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Check, Plus, Minus } from 'lucide-react';

export default function QuoteCalculator() {
    const [frequency, setFrequency] = useState('monthly'); // 'monthly' | 'onetime'
    const [bins, setBins] = useState(1);

    const prices = {
        monthly: 10,
        onetime: 25
    };

    const total = prices[frequency] * bins;

    return (
        <div className="w-full max-w-md mx-auto glass p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center text-slate-900 shadow-lg">
                    <Calculator className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Instant Estimate</h3>
            </div>

            {/* Frequency Toggle */}
            <div className="flex bg-black/40 p-1.5 rounded-2xl mb-8 border border-white/5 shadow-inner">
                <button
                    onClick={() => setFrequency('monthly')}
                    className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all relative overflow-hidden ${frequency === 'monthly' ? 'bg-brand-green text-slate-900 shadow-[0_0_20px_rgba(34,197,94,0.4)] ring-1 ring-white/50' : 'text-gray-400 hover:text-white'
                        }`}
                >
                    <span className="relative z-10">Monthly ($10)</span>
                </button>
                <button
                    onClick={() => setFrequency('onetime')}
                    className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${frequency === 'onetime' ? 'bg-white text-slate-900 shadow-[0_0_20px_rgba(255,255,255,0.4)] ring-1 ring-white/50' : 'text-gray-400 hover:text-white'
                        }`}
                >
                    One-Time ($25)
                </button>
            </div>

            {/* Bin Counter */}
            <div className="mb-8">
                <label className="text-gray-400 text-sm font-medium mb-3 block">Number of Bins</label>
                <div className="flex items-center justify-between bg-slate-900/30 rounded-xl p-2 border border-white/5">
                    <button
                        onClick={() => setBins(Math.max(1, bins - 1))}
                        className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
                    >
                        <Minus className="w-4 h-4" />
                    </button>

                    <span className="text-2xl font-bold text-white font-mono w-12 text-center">{bins}</span>

                    <button
                        onClick={() => setBins(Math.min(10, bins + 1))}
                        className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Total Display */}
            <div className="flex items-end justify-between mb-8 border-t border-white/10 pt-6">
                <div>
                    <span className="text-gray-400 text-sm block mb-1">Estimated Total</span>
                    {frequency === 'monthly' && (
                        <span className="text-xs text-brand-green font-bold bg-brand-green/10 px-2 py-0.5 rounded">
                            Save 60% vs One-Time
                        </span>
                    )}
                </div>
                <div className="text-right">
                    <span className="text-5xl font-black text-white tracking-tight">
                        ${total}
                    </span>
                    <span className="text-gray-500 text-sm font-medium ml-1">
                        /{frequency === 'monthly' ? 'mo' : 'visit'}
                    </span>
                </div>
            </div>

            <a
                href="tel:9404655505"
                className="block w-full py-4 bg-gradient-brand text-slate-900 font-bold text-center rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all mb-3"
            >
                Book This Price
            </a>

            <a
                href="sms:9404655505"
                className="block w-full py-2 text-gray-400 text-sm font-medium text-center hover:text-white transition-colors"
            >
                Or text quote to (940) 465-5505
            </a>

            <p className="text-center text-gray-500 text-xs mt-4">
                *Multi-bin discounts may apply for 3+ bins. Call for details.
            </p>
        </div>
    );
}
