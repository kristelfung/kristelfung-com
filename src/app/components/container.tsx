export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-container mx-auto pl-10 pr-10 ${className ?? ""}`}>
      {children}
    </div>
  );
}
