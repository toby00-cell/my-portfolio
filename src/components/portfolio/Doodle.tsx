export function Arrow({ className = "" }: { className?: string }) {
    return (
      <svg viewBox="0 0 90 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
        <path d="M4 8 C30 2, 62 14, 70 46" />
        <path d="M58 38 L70 48 L78 33" />
      </svg>
    );
  }