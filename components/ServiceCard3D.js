'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function ServiceCard3D({ icon: Icon, title, features, accentColor = 'blue' }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spotlight movement
    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        x.set(clientX - left);
        y.set(clientY - top);
    }

    // Dynamic Spotlight Gradient
    const spotlight = useTransform(
        [mouseX, mouseY],
        ([newX, newY]) => `radial-gradient(400px circle at ${newX}px ${newY}px, rgba(255,255,255,0.1), transparent 40%)`
    );

    const borderClass = accentColor === 'green' ? 'group-hover:border-brand-green/50' : 'group-hover:border-brand-blue/50';
    const bgClass = accentColor === 'green' ? 'bg-brand-green/10' : 'bg-brand-blue/10';
    const textClass = accentColor === 'green' ? 'text-brand-green' : 'text-brand-blue';
    const btnClass = accentColor === 'green' ? 'hover:bg-brand-green' : 'hover:bg-brand-blue';

    return (
        <motion.div
            onMouseMove={onMouseMove}
            onFocus={() => { x.set(100); y.set(100); }} // Simulate center spotlight on focus
            tabIndex={0}
            className={`relative glass rounded-3xl overflow-hidden group cursor-default h-full flex flex-col border border-white/5 focus:outline-none focus:ring-2 focus:ring-${accentColor}-500/50`}
        >
            {/* Spotlight Overlay (Visible on Hover OR Focus-within) */}
            <motion.div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300"
                style={{ background: spotlight }}
            />

            <div className="p-8 relative z-10 flex flex-col h-full">
                <div className={`w-14 h-14 rounded-2xl ${bgClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/20 border border-white/5`}>
                    <Icon className={`w-7 h-7 ${textClass}`} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{title}</h3>

                <ul className="space-y-3 mb-8 flex-grow">
                    {features.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-gray-400 group-hover:text-gray-200 transition-colors">
                            <CheckCircle2 className={`w-5 h-5 ${textClass} flex-shrink-0`} />
                            {item}
                        </li>
                    ))}
                </ul>

                <button className={`w-full py-3 rounded-lg border border-white/10 ${textClass} font-bold ${btnClass} hover:text-white transition-all shadow-lg`}>
                    Learn More
                </button>
            </div>
        </motion.div>
    );
}
