export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`rounded-xl border border-neutral-800 bg-neutral-900 shadow ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className = "", children, ...props }) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}