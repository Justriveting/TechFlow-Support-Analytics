import { cn } from "@/lib/utils";
import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

interface ScoreBadgeProps {
  score: number;
  className?: string;
}

export function ScoreBadge({ score, className }: ScoreBadgeProps) {
  const config =
    score >= 2
      ? { label: "Complete", icon: CheckCircle2, cls: "bg-success-soft text-success ring-success/20" }
      : score === 1
      ? { label: "Partial", icon: AlertTriangle, cls: "bg-warning-soft text-warning ring-warning/20" }
      : { label: "Missing", icon: XCircle, cls: "bg-danger-soft text-danger ring-danger/20" };
  const Icon = config.icon;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset",
        config.cls,
        className,
      )}
    >
      <Icon className="h-3.5 w-3.5" />
      {config.label} · {score}/2
    </span>
  );
}
