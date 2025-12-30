'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { MoveHorizontal } from 'lucide-react';
import Image from 'next/image';

export default function ComparisonSlider() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const handleDrag = (event, info) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPosition(percentage);
    };

    const handleTouchMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const touch = e.touches[0];
        const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPosition(percentage);
    }

    return (
        <div className="w-full max-w-5xl mx-auto py-20 px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">See the Difference</h2>
                <p className="text-gray-400">Drag to reveal the cleaning power.</p>
            </div>

            <div
                ref={containerRef}
                className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-brand-blue/20 border border-white/10 cursor-col-resize select-none touch-none"
                onMouseMove={(e) => isDragging && handleDrag(e)}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onTouchMove={handleTouchMove}
            >
                {/* DIRTY IMAGE (Background) */}
                <div className="absolute inset-0">
                    <Image
                        src="/dirty.png"
                        alt="Dirty Surface"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-white text-xs font-bold uppercase tracking-wider">
                        Before
                    </div>
                </div>

                {/* CLEAN IMAGE (Clipped Foreground) */}
                <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                >
                    <Image
                        src="/clean.png"
                        alt="Clean Surface"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute top-4 left-4 bg-brand-green/90 backdrop-blur px-3 py-1 rounded text-slate-900 text-xs font-bold uppercase tracking-wider">
                        After
                    </div>
                </div>

                {/* SLIDER HANDLE */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize z-20 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                    style={{ left: `${sliderPosition}%` }}
                >
                    <div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-900 border-4 border-slate-900/20">
                        <MoveHorizontal className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    );
}
