"use client";

import * as React from "react";
import { Legend, Tooltip } from "recharts";

export type ChartConfig = Record<
  string,
  {
    label: string;
    color: string;
    icon?: React.ComponentType<{ className?: string }>;
  }
>;

type ChartContainerProps = {
  config: ChartConfig;
  children: React.ReactNode;
  className?: string;
};

export function ChartContainer({
  config,
  children,
  className,
}: ChartContainerProps) {
  const styleVars = Object.fromEntries(
    Object.entries(config).map(([key, value]) => [
      `--color-${key}`,
      value.color,
    ])
  ) as React.CSSProperties;

  return (
    <div className={className} style={styleVars}>
      {children}
    </div>
  );
}

export function ChartTooltip(props: React.ComponentProps<typeof Tooltip>) {
  return <Tooltip {...props} />;
}

export function ChartLegend(props: React.ComponentProps<typeof Legend>) {
  return <Legend {...props} />;
}

// Simple default tooltip content compatible with Recharts
export function ChartTooltipContent({
  active,
  payload,
  label,
  indicator,
}: {
  active?: boolean;
  payload?: any[];
  label?: string | number;
  indicator?: "line" | "dot";
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-md border bg-popover text-popover-foreground shadow-md p-2 text-sm">
      {label ? <div className="mb-1 font-medium">{String(label)}</div> : null}
      <div className="space-y-1">
        {payload.map((entry, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span
              className="inline-block h-2 w-2 rounded"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-muted-foreground">{entry.name}:</span>
            <span className="font-medium">{entry.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ChartLegendContent({ payload }: { payload?: any[] }) {
  if (!payload?.length) return null;
  return (
    <div className="flex flex-wrap gap-4 text-sm">
      {payload.map((item: any, idx: number) => (
        <div key={idx} className="flex items-center gap-2">
          <span
            className="inline-block h-2 w-2 rounded"
            style={{ backgroundColor: item.color }}
          />
          <span className="text-muted-foreground">{item.value}</span>
        </div>
      ))}
    </div>
  );
}
