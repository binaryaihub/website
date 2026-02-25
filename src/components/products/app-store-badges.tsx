import { Apple, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function AppStoreBadges() {
  return (
    <div className="flex flex-wrap gap-3">
      <Badge
        variant="outline"
        className="gap-2 px-4 py-2 text-sm text-muted-foreground opacity-50"
      >
        <Apple className="h-4 w-4" />
        App Store — Soon
      </Badge>
      <Badge
        variant="outline"
        className="gap-2 px-4 py-2 text-sm text-muted-foreground opacity-50"
      >
        <Play className="h-4 w-4" />
        Google Play — Soon
      </Badge>
    </div>
  );
}
