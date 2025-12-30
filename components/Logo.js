export default function Logo({ className = "" }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* Icon */}
            <svg
                width="60"
                height="60"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
            >
                {/* Bin Body */}
                <path
                    d="M20 30L25 90C25.5 95 28 98 33 98H67C72 98 74.5 95 75 90L80 30H20Z"
                    fill="#4ADE80"
                />
                {/* Lid */}
                <path
                    d="M15 30H85V25C85 22 83 20 80 20H60V15C60 12 58 10 55 10H45C42 10 40 12 40 15V20H20C17 20 15 22 15 25V30Z"
                    fill="#22C55E"
                />
                {/* Recycle Arrows Pattern (stylized on bin) */}
                <g opacity="0.6">
                    <path d="M50 45 L60 55 H40 Z" fill="#15803d" />
                    <path d="M62 60 L52 80 L72 80 Z" fill="#15803d" transform="rotate(120 62 70)" />
                    <path d="M38 60 L28 80 L48 80 Z" fill="#15803d" transform="rotate(240 38 70)" />
                </g>
            </svg>

            {/* Typography */}
            <div className="flex flex-col justify-center leading-none">
                <span className="text-3xl font-black text-white tracking-wide font-sans">
                    MASTER
                </span>
                <span className="text-3xl font-black text-brand-blue tracking-wider font-sans -mt-1">
                    BIN
                </span>
            </div>
        </div>
    );
}
