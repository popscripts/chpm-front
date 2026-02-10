
export default function GlassCard({ children, className, ...props }) {
  return (
    <div 
      className={
        "backdrop-blur-md bg-(--color-deep-teal)/30 border border-(--color-champagne-gold)/20 shadow-xl" +
        (className ? ` ${className}` : "")
      }
      {...props}
    >
      {children}
    </div>
  );
}