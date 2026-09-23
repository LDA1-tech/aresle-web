import lightBg from "@/assets/light-bg-shadow.png";

interface LightBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const LightBackground = ({ children, className = "" }: LightBackgroundProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0">
        <img
          src={lightBg}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
};

export default LightBackground;
