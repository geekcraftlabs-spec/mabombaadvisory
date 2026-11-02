export function ZigZag({ id }: { id: string }) {
  return (
    <svg width="100%" height="12" aria-hidden="true" className="block">
      <defs>
        <pattern id={id} width="24" height="12" patternUnits="userSpaceOnUse">
          <path d="M0 12 L12 0 L24 12 Z" fill="#B5532E" />
        </pattern>
      </defs>
      <rect width="100%" height="12" fill={`url(#${id})`} />
    </svg>
  );
}
