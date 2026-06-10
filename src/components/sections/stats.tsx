import { Ticker } from "@/components/shared/ticker";
import { products } from "@/config/products";

const liveCount = products.filter((p) => p.status === "live").length;
const buildingCount = products.length - liveCount;

const stats = [
  { value: `${liveCount}`, label: "live products serving real customers" },
  { value: `${buildingCount}`, label: "AI-powered apps in development" },
  { value: "500+", label: "cattle sheltered by our non-profit partner" },
];

export function Stats() {
  return (
    <Ticker>
      {stats.map((stat) => (
        <span
          key={stat.label}
          className="inline-flex items-center gap-2 text-sm whitespace-nowrap"
        >
          <span className="bg-gradient-to-r from-[oklch(0.7_0.25_270)] via-[oklch(0.75_0.2_220)] to-[oklch(0.78_0.2_310)] bg-clip-text font-bold text-transparent tabular-nums">
            {stat.value}
          </span>
          <span className="text-muted-foreground">{stat.label}</span>
          <span
            aria-hidden
            className="ml-10 h-1 w-1 rounded-full bg-[oklch(0.7_0.2_270)]/60"
          />
        </span>
      ))}
    </Ticker>
  );
}
