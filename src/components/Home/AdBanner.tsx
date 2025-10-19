"use client";

export default function AdBanner({
  display,
  title,
  description,
  img,
}: {
  display: boolean;
  title: string;
  description: string;
  img: string;
}) {
  return (
    <div
      className={`w-full overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group border border-border/50 ${
        display ? "" : "hidden"
      }`}
    >
      {/* 16:9 aspect ratio container */}
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        {/* Placeholder for actual banner image with enhanced dark theme gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-card/50 to-tertiary/30 backdrop-blur-sm flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-tertiary/20"></div>
          <div className="text-center relative z-10">
            <div className="text-6xl mb-4 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 drop-shadow-lg">
              🎯
            </div>
            <p className="text-lg text-foreground/90 font-medium transition-colors duration-300 group-hover:text-secondary drop-shadow-sm">
              16:9 Banner Image
            </p>
            <p className="text-sm text-muted-foreground mt-2">{description}</p>
          </div>
        </div>
        {/* When you have an actual image, replace the div above with:
        <img
          src="/path-to-your-banner-image.jpg"
          alt="Promotional banner"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        */}
      </div>
    </div>
  );
}
