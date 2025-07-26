export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-container mx-auto pl-4 pr-4 ${className ?? ""}`}>
      {children}
    </div>
  );
}
