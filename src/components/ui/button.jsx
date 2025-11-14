export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-semibold bg-yellow-500 text-black hover:bg-yellow-400 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}