interface Props {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

export default function SectionTitle({ title, subtitle, light, className = "" }: Props) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? "text-white" : "text-anthracite"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl mx-auto ${
            light ? "text-white/80" : "text-anthracite/60"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`w-20 h-1 mx-auto mt-6 rounded-full ${
          light ? "bg-accent" : "bg-accent"
        }`}
      />
    </div>
  );
}
