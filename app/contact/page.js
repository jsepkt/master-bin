'use client';
import { useState } from 'react';
import PageHero from '../../components/PageHero';
import { Phone, Mail, MapPin, Lock } from 'lucide-react';
import Image from 'next/image';
import toast from 'react-hot-toast';

export default function ContactPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: 'Trash Bin Cleaning',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.error || 'Something went wrong');

            toast.success("Request received! We'll be in touch shortly.");
            setFormData({ firstName: '', lastName: '', email: '', phone: '', service: 'Trash Bin Cleaning', message: '' }); // Reset form
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-slate-950">
            <PageHero
                title="Get a Free Quote"
                subtitle="Enter your details below and we'll send you a custom estimate within 24 hours."
                image="/assets/family.png"
            />

            <section className="py-20 -mt-20 relative z-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-0 overflow-hidden rounded-3xl glass border border-white/10 shadow-2xl">

                        {/* Form Section */}
                        <div className="p-8 md:p-12 bg-slate-900/80">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-400 mb-2">First Name</label>
                                        <input
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-brand-blue focus:outline-none transition-colors"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-400 mb-2">Last Name</label>
                                        <input
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            type="text"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-brand-blue focus:outline-none transition-colors"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-400 mb-2">Email</label>
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        type="email"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-brand-blue focus:outline-none transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-400 mb-2">Phone</label>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        type="tel"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-brand-blue focus:outline-none transition-colors"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-400 mb-2">Service Needed</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-brand-blue focus:outline-none transition-colors [&>option]:bg-slate-900"
                                    >
                                        <option>Trash Bin Cleaning</option>
                                        <option>Pressure Washing</option>
                                        <option>Soft Wash (House/Roof)</option>
                                        <option>Gutter Cleaning</option>
                                        <option>Commercial Service</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-400 mb-2">Message / Address</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-brand-blue focus:outline-none transition-colors"
                                        placeholder="Please include your address..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-4 bg-brand-blue text-slate-900 font-bold rounded-xl hover:bg-cyan-400 transition-colors shadow-lg shadow-brand-blue/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isLoading ? 'Sending...' : 'Request Estimate'}
                                </button>

                                <p className="flex items-center justify-center gap-2 text-xs text-gray-500">
                                    <Lock className="w-3 h-3" /> Your information is safe with us. No spam.
                                </p>
                            </form>
                        </div>

                        {/* Info / Image Section */}
                        <div className="relative bg-brand-blue/10 hidden md:block">
                            <Image src="/assets/happy_family.png" alt="Happy Family" fill className="object-cover opacity-50 mix-blend-overlay" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-12 w-full">
                                <div className="glass p-8 rounded-2xl border border-white/10 backdrop-blur-xl">
                                    <h3 className="text-xl font-bold text-white mb-6">Contact Us Directly</h3>
                                    <div className="space-y-4">
                                        <a href="tel:5551234567" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                                            <Phone className="w-5 h-5 text-brand-blue" /> (940) 465-5505
                                        </a>
                                        <a href="mailto:masterbinexterior@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                                            <Mail className="w-5 h-5 text-brand-blue" /> masterbinexterior@gmail.com
                                        </a>
                                        <div className="flex items-center gap-3 text-gray-300">
                                            <MapPin className="w-5 h-5 text-brand-blue" /> Serving North Texas
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-white/10">
                                        <div className="flex text-yellow-400 text-sm mb-2">★★★★★</div>
                                        <p className="text-gray-400 italic text-sm">"The easiest quote process ever. They texted me a price in 10 minutes!"</p>
                                        <p className="text-white font-bold text-sm mt-2">- Sarah Jenkins</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
