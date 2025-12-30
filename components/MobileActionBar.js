'use client';
import { Phone, MessageSquare } from 'lucide-react';

export default function MobileActionBar() {
    return (
        <div className="fixed bottom-0 left-0 w-full z-50 md:hidden pb-safe">
            <div className="flex bg-slate-900/90 backdrop-blur-xl border-t border-white/10 p-4 gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">

                {/* Call Button */}
                <a
                    href="tel:9404655505"
                    className="flex-1 flex items-center justify-center gap-2 bg-brand-blue text-slate-900 font-black py-4 rounded-xl shadow-lg shadow-brand-blue/20 active:scale-95 transition-transform"
                >
                    <Phone className="w-5 h-5 fill-current" />
                    CALL
                </a>

                {/* Text Button */}
                <a
                    href="sms:9404655505"
                    className="flex-1 flex items-center justify-center gap-2 bg-white/10 border border-white/10 text-white font-bold py-4 rounded-xl active:bg-white/20 active:scale-95 transition-all"
                >
                    <MessageSquare className="w-5 h-5" />
                    TEXT
                </a>

            </div>
        </div>
    );
}
