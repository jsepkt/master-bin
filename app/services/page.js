'use client';
import PageHero from '../../components/PageHero';
import { Droplets, Home, Trash2, Leaf, CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function ServicesPage() {
    const services = [
        {
            id: 'pressure-washing',
            title: 'High-Pressure Surface Cleaning',
            desc: 'Restore the brilliance of your concrete and stone. Our industrial-grade pressure washing system blasts away years of accumulated grime, oil stains, and tire marks.',
            features: ['Deep Clean Concrete & Pavers', 'Oil & Rust Stain Removal', 'Slip Hazard Reduction'],
            icon: Droplets,
            image: '/assets/steam_action.png', // Reusing action shot
            color: 'blue'
        },
        {
            id: 'soft-wash',
            title: 'Soft Wash House Washing',
            desc: 'Gentle yet powerful cleaning for delicate surfaces. High pressure can damage siding and roofs. We use a specialized "Soft Wash" technique that kills algae and mold at the root.',
            features: ['Safe for Vinyl, Stucco & Wood', 'Eliminates Mold & Algae', 'Long-Lasting Results'],
            icon: Home,
            image: '/assets/happy_family.png', // Placeholder for "House"
            color: 'green'
        },
        {
            id: 'bin-cleaning',
            title: 'Trash Bin Sanitization',
            desc: 'Our core specialty. Bye-bye bad smells. It’s not just about the smell—trash bins are breeding grounds for E. coli. Our steam truck sanitizes them on the spot.',
            features: ['200°F Steam Sanitization', 'Eco-Friendly Deodorizer', 'We Haul Away the Dirty Water'],
            icon: Trash2,
            image: '/assets/residential_bins.png',
            color: 'purple'
        },
        {
            id: 'gutter-cleaning',
            title: 'Gutter Cleaning',
            desc: 'Protect your foundation from water damage. We remove all debris and flush the downspouts to ensure free flow.',
            features: ['Debris Removal & Flush', 'Exterior Brightening', 'Prevent Water Damage'],
            icon: Leaf,
            image: '/assets/pest_warning.png', // Contextual (bugs/debris)
            color: 'yellow'
        }
    ];

    return (
        <main className="min-h-screen bg-slate-950">
            <PageHero
                title="Expert Exterior Restoration"
                subtitle="From bacteria-free bins to sparkling driveways, we bring your property back to life."
                image="/assets/steam_action.png"
            />

            <section className="py-24">
                <div className="container mx-auto px-6 max-w-6xl space-y-32">
                    {services.map((service, index) => (
                        <div key={service.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Image Side */}
                            <div className="w-full md:w-1/2">
                                <div className={`relative h-[400px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl group`}>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className={`absolute inset-0 bg-${service.color}-500/10 mixing-blend-overlay`} />
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full md:w-1/2">
                                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6`}>
                                    <service.icon className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{service.title}</h2>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    {service.desc}
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle2 className={`w-5 h-5 text-${service.color === 'yellow' ? 'yellow-400' : 'brand-' + service.color}`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href="/contact" className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-3 transition-all">
                                    Get a Free Quote <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
