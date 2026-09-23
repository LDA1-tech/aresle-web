import darkBg from "@/assets/dark-bg-gold.png";

interface DarkBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const DarkBackground = ({ children, className = "" }: DarkBackgroundProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0">
        <img
          src={darkBg}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
};

export default DarkBackground;
