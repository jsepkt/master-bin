'use client';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Droplets, RefreshCw } from 'lucide-react';

export default function PowerWashSimulator() {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [isCleaning, setIsCleaning] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = '/dirty.png'; // The "Mask" layer

        img.onload = () => {
            canvas.width = containerRef.current.clientWidth;
            canvas.height = containerRef.current.clientHeight;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            // Default composite operation is source-over
        };

        const handleResize = () => {
            if (containerRef.current) {
                canvas.width = containerRef.current.clientWidth;
                canvas.height = containerRef.current.clientHeight;
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Calculate progress (expensive, so throttle or do periodically)
    const checkProgress = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        // Get sample of pixels (performance optimization: check every 10th pixel)
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        let transparentPixels = 0;
        const totalPixels = data.length / 4;

        for (let i = 0; i < data.length; i += 4 * 10) { // Check stride of 10
            if (data[i + 3] === 0) {
                transparentPixels++;
            }
        }

        // simple approx based on stride
        const percent = Math.round((transparentPixels / (totalPixels / 10)) * 100);
        setProgress(percent);
        if (percent > 85) setIsComplete(true);
    };

    const draw = (x, y) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, 40, 0, Math.PI * 2); // Brush size
        ctx.fill();

        // Random "splatter" for realism
        for (let i = 0; i < 5; i++) {
            const rx = x + (Math.random() - 0.5) * 60;
            const ry = y + (Math.random() - 0.5) * 60;
            ctx.beginPath();
            ctx.arc(rx, ry, Math.random() * 5, 0, Math.PI * 2);
            ctx.fill();
        }

        if (Math.random() > 0.9) checkProgress(); // Throttled check
    };

    const handleMouseMove = (e) => {
        if (!isCleaning) return;
        const rect = canvasRef.current.getBoundingClientRect();
        draw(e.clientX - rect.left, e.clientY - rect.top);
    };

    const handleTouchMove = (e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        const touch = e.touches[0];
        draw(touch.clientX - rect.left, touch.clientY - rect.top);
    };

    const reset = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = '/dirty.png';
        ctx.globalCompositeOperation = 'source-over';
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        setProgress(0);
        setIsComplete(false);
    };

    return (
        <section className="py-24 bg-slate-900 border-t border-white/5 relative overflow-hidden select-none">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold mb-4 uppercase tracking-wider">
                        <Droplets className="w-4 h-4" /> Interactive Demo
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Experience the <span className="text-brand-blue">Power</span></h2>
                    <p className="text-gray-400">Click and drag (or touch) to pressure wash this driveway.</p>
                </div>

                <div
                    ref={containerRef}
                    className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 cursor-crosshair touch-none group"
                    onMouseDown={() => setIsCleaning(true)}
                    onMouseUp={() => setIsCleaning(false)}
                    onMouseLeave={() => setIsCleaning(false)}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                    onTouchStart={() => setIsCleaning(true)}
                >
                    {/* Underlying CLEAN image */}
                    <div className="absolute inset-0 bg-[url('/clean.png')] bg-cover bg-center pointer-events-none" />

                    {/* Canvas acting as DIRTY mask */}
                    <canvas
                        ref={canvasRef}
                        className="absolute inset-0 z-10 w-full h-full"
                    />

                    {/* UI Overlay */}
                    <div className="absolute top-6 left-6 z-20 flex flex-col gap-2 pointer-events-none">
                        <div className="glass px-4 py-2 rounded-xl text-white font-bold font-mono">
                            CLEAN: {progress}%
                        </div>
                        {isComplete && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="glass px-4 py-2 rounded-xl text-brand-green font-bold flex items-center gap-2"
                            >
                                <RefreshCw className="w-4 h-4" /> COMPLETED
                            </motion.div>
                        )}
                    </div>

                    {/* Instructions */}
                    {!isCleaning && progress === 0 && (
                        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                            <div className="bg-black/50 backdrop-blur-md px-6 py-4 rounded-2xl text-white font-bold border border-white/20 animate-pulse">
                                CLICK & DRAG TO WASH
                            </div>
                        </div>
                    )}

                    {/* Reset Button */}
                    <button
                        onClick={reset}
                        className="absolute bottom-6 right-6 z-20 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 hover:rotate-180 transition-all"
                        title="Reset Demo"
                    >
                        <RefreshCw className="w-6 h-6" />
                    </button>

                    {/* Brush Follower (Visual Only) */}
                    <div className="absolute z-20 pointer-events-none w-20 h-20 rounded-full border-2 border-brand-blue/50 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                        style={{ left: -100, top: -100 }} // Controlled by JS in valid implementation, here dependent on cursor which canvas logic handles internally for drawing. 
                    // Note: Pure CSS cursor following is tricky without JS state for coordinates. 
                    // For this MVP, the 'cursor-crosshair' is sufficient.
                    />
                </div>
            </div>
        </section>
    );
}
