export function Logo({ size = 52, variant = "dark" }: { size?: number; variant?: "dark" | "light" }) {
  const textFill = variant === "dark" ? "#FAF7F2" : "#1E1E1E";
  const mFill = variant === "dark" ? "#FAF7F2" : "#1E1E1E";
  const strokeColor = "#D9774F";
  const wordFill = variant === "dark" ? "#FAF7F2" : "#1E1E1E";
  const subFill = "#D9774F";

  return (
    <div className="flex items-center gap-4">
      <svg width={size} height={size} viewBox="0 0 160 160" aria-hidden="true">
        <circle cx="80" cy="80" r="72" fill="none" stroke={strokeColor} strokeWidth="5" />
        <text x="80" y="100" textAnchor="middle" fontFamily="var(--font-cormorant)" fontSize="80" fontWeight="700" fill={mFill}>M</text>
        <path d="M54 116 L61 106 L68 116 Z M68 116 L75 106 L82 116 Z M82 116 L89 106 L96 116 Z M96 116 L103 106 L110 116 Z" fill={strokeColor} />
      </svg>
      <div className="flex items-center gap-4">
        <span className={`w-px h-10 ${variant === "dark" ? "bg-[#5A4E44]" : "bg-[#B9AA94]"}`} />
        <span className="flex flex-col gap-1 leading-none">
          <span className="font-serif text-2xl font-bold tracking-[0.15em]" style={{ color: wordFill }}>MABOMBA</span>
          <span className="text-[10px] font-bold tracking-[0.3em]" style={{ color: subFill }}>ADVISORY</span>
        </span>
      </div>
    </div>
  );
}
